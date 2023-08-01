import BaseLayout from '@/src/layout/BaseLayout'
import { Inter } from 'next/font/google'
import Head from 'next/head'
import { ReactElement, useEffect } from 'react'
import PostItem from '../../src/contents/PostCard'
import styled from 'styled-components'
import { useInfiniteQuery } from '@tanstack/react-query'
import axios from 'axios'
import FundFilter from '@/src/contents/filter'
import LoadingSpinner from '@/src/components/loading/LoadingSpinner'
import ProgressCircle from '@/src/contents/progress'

const inter = Inter({ subsets: ['latin'] })

const PostBenner = styled.div`
    display: flex;
    margin: 0 auto;
    margin-bottom: 30px;
    position: relative;
    & .main-img {
        position: absolute;
        width: 500px;
        top: -30px;
        left: -190px;
        z-index: 2;
    }
    & > img {
        position: relative;
        width: 500px;
        background-size: contain;
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
            <ProgressCircle />
            <Head>
                <title>리뷰 - 메인페이지</title>
            </Head>

            <main className={`flex min-h-screen flex-col items-center justify-between ${inter.className}`}>
                <PostBenner>
                    <img className="main-img" src="/static/images/banner.jpg" alt="" />
                    <img src="/static/images/banner2.jpg" alt="" />
                    <div>
                        <p className="italic">PenPoll</p>
                        <h1>"야" 너두 할 수 있어</h1>
                        <h1> 낭만 코딩</h1>
                        <br />
                        <h3>누구나 참여 가능한 검증된</h3>
                        <h3>지식 공간</h3>
                        <img className="w-96 mt-12" src="/static/images/logo.png" alt="" />
                    </div>
                </PostBenner>
                <section className="w-full mt-20 pr-10 pl-10">
                    <div className="flex justify-between mb-10 items-center">
                        <h1 className="font-bold text-4xl ">Contents</h1>
                        <FundFilter />
                    </div>
                    <article className="grid grid-cols-3 gap-10">
                        {isSuccess &&
                            data.pages.map((page) =>
                                page.items.map((item, index) => (
                                    <PostItem
                                        key={`postcard-${index}`}
                                        thumbnail={item.thumbnail}
                                        profile={item.profile}
                                        title={item.title}
                                        content={item.content}
                                        date={item.date}
                                        writer={item.writer}
                                        url={item.url}
                                    />
                                )),
                            )}
                    </article>
                    {isFetchingNextPage ? <LoadingSpinner /> : null}
                </section>
            </main>
        </>
    )
}

Post.getLayout = (page: ReactElement) => <BaseLayout>{page}</BaseLayout>
export default Post
