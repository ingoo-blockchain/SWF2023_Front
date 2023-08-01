import BaseLayout from '@/src/layout/BaseLayout'
import { Inter } from 'next/font/google'
import Head from 'next/head'
import { ReactElement, useEffect } from 'react'
import PostItem from '../../src/contents/PostCard'
import styled from 'styled-components'
import { useInfiniteQuery } from '@tanstack/react-query'
import axios from 'axios'

const inter = Inter({ subsets: ['latin'] })

const PostBenner = styled.div`
    display: flex;
    margin: 0 auto;
    margin-bottom: 128px;
    & > img {
        width: 500px;
        height: 360px;
        background-color: gray;
        margin-right: 78px;
    }

    & > div {
        & > p {
            font-size: 32px;
            font-weight: bold;
            margin-bottom: 78px;
        }
        & > h1 {
            font-size: 32px;
            font-weight: bold;
        }
        & > h3 {
            font-size: 18px;
            font-weight: bold;
        }
    }
`

const PostItemWarp = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`
const obj = {
    items: [
        {
            thumbnail: '',
            profile: '',
            title: '주니어 개발자의 현업에서 배운 Git Flow',
            content: '입사 후, 1년 동안 열심히 공부하고 익힌 실무에 활 용 되는 git flow 전략',
            date: '2023년 7월 21일',
            writer: '주병현',
            url: '/1',
        },
        {
            thumbnail: '',
            profile: '',
            title: '주니어 개발자의 현업에서 배운 Git Flow',
            content: '입사 후, 1년 동안 열심히 공부하고 익힌 실무에 활 용 되는 git flow 전략',
            date: '2023년 7월 21일',
            writer: '주병현',
            url: '/1',
        },
        {
            thumbnail: '',
            profile: '',
            title: '주니어 개발자의 현업에서 배운 Git Flow',
            content: '입사 후, 1년 동안 열심히 공부하고 익힌 실무에 활 용 되는 git flow 전략',
            date: '2023년 7월 21일',
            writer: '주병현',
            url: '/1',
        },
        {
            thumbnail: '',
            profile: '',
            title: '주니어 개발자의 현업에서 배운 Git Flow',
            content: '입사 후, 1년 동안 열심히 공부하고 익힌 실무에 활 용 되는 git flow 전략',
            date: '2023년 7월 21일',
            writer: '주병현',
            url: '/1',
        },
        {
            thumbnail: '',
            profile: '',
            title: '주니어 개발자의 현업에서 배운 Git Flow',
            content: '입사 후, 1년 동안 열심히 공부하고 익힌 실무에 활 용 되는 git flow 전략',
            date: '2023년 7월 21일',
            writer: '주병현',
            url: '/1',
        },
        {
            thumbnail: '',
            profile: '',
            title: '주니어 개발자의 현업에서 배운 Git Flow',
            content: '입사 후, 1년 동안 열심히 공부하고 익힌 실무에 활 용 되는 git flow 전략',
            date: '2023년 7월 21일',
            writer: '주병현',
            url: '/1',
        },
    ],
}

const Post = () => {
    const LIMIT = 10

    const fetchRepositories = async (page: number) => {
        const { data } = await axios.get(`https://jsonplaceholder.typicode.com/posts`)
        console.log(LIMIT, page)
        console.log(data)
        return obj
    }

    const { data, isSuccess, hasNextPage, fetchNextPage, isFetchingNextPage } = useInfiniteQuery(
        ['InfiniteScroll'],
        ({ pageParam = 1 }) => fetchRepositories(pageParam),
        {
            getNextPageParam: (lastPage, allPages) => {
                const nextPage = allPages.length + 1
                return nextPage
            },
        },
    )

    useEffect(() => {
        let fetching = false
        const handleScroll = async (e: any) => {
            const { scrollHeight, scrollTop, clientHeight } = e.target.scrollingElement
            if (!fetching && scrollHeight - scrollTop <= clientHeight * 1.2) {
                fetching = true
                if (hasNextPage) await fetchNextPage()
                fetching = false
            }
        }
        document.addEventListener('scroll', handleScroll)
        return () => {
            document.removeEventListener('scroll', handleScroll)
        }
    }, [fetchNextPage, hasNextPage])

    return (
        <>
            <Head>
                <title>리뷰 - 메인페이지</title>
            </Head>

            <main className={`flex min-h-screen flex-col items-center justify-between ${inter.className}`}>
                <PostBenner>
                    <img alt="" />
                    <div>
                        <p>BlockChain</p>
                        <h1>아무글자나 넣자</h1>
                        <h3>아무글자나 넣자</h3>
                    </div>
                </PostBenner>
                <div className="bg-white">
                    <div className="w-full">
                        <PostItemWarp>
                            {isSuccess &&
                                data.pages.map((page) =>
                                    page.items.map((item, index) => (
                                        <div key={index}>
                                            <PostItem
                                                thumbnail={item.thumbnail}
                                                profile={item.profile}
                                                title={item.title}
                                                content={item.content}
                                                date={item.date}
                                                writer={item.writer}
                                                url={item.url}
                                            ></PostItem>
                                        </div>
                                    )),
                                )}
                        </PostItemWarp>
                        {isFetchingNextPage ? 'loading...' : null}
                    </div>
                </div>
            </main>
        </>
    )
}

Post.getLayout = (page: ReactElement) => <BaseLayout>{page}</BaseLayout>
export default Post
