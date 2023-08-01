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
import request from '@/src/utils/request'
import tw from 'tailwind-styled-components'
import Link from 'next/link'
import Image from 'next/image'
import { Icon } from '@iconify/react/dist/iconify.js'

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

export const SlideWrap = tw.div`
  mx-auto mb-20 w-5/6  md:w-3/4 h-450 lg:h-450 rounded-lg dark:bg-gray-900 bg-gary-100 dark:shadow-2xl dark:shadow-cyan-500/50
`

export const SlideBox = tw.div`
  w-10/12 h-450 mx-auto items-center flex flex-col lg:flex-row
`

interface ReqeustProps {
    account: Account
    uuid: string
    proposal_id: string
    status: 0
    IpfsHash: string
    created_at: any
}

const Post = () => {
    const imageUrl = ''
    const fetchRepositories = async (page: number) => {
        const { data } = await request.get<ReqeustProps[]>(`/posts?page=${page}&limit=${10}`)
        const result = Promise.all(
            data.map(async (item) => {
                const { data } = await axios.get(`${process.env.NEXT_PUBLIC_IPFS_URL}/${item.IpfsHash}`)
                return { ...data, IpfsHash: item.IpfsHash }
            }),
        )

        return result
    }

    const { data, isSuccess, hasNextPage, fetchNextPage, isFetchingNextPage } = useInfiniteQuery<any>(
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
                    <div className="container mx-auto">
                        <SlideBox>
                            <Link href={`/collections`}>
                                <div className="object-fill overflow-hidden w-80 h-80 lg:border-4 rounded-md border-white dark:border-gray-600 mt-8 lg:mt-0 lg:ml-10">
                                    <Image
                                        src={imageUrl ? imageUrl : '/banner.jpg'}
                                        alt="test"
                                        width={1000}
                                        height={1000}
                                    />
                                </div>
                            </Link>
                            <div className="w-full lg:h-80 lg:ml-20 mt-4 lg:mt-11">
                                <div className="flex flex-wrap">
                                    <div className="w-full mb-2 lg:mb-10 flex justify-center lg:justify-start">
                                        <span className="text-2xl lg:text-4xl font-bold whitespace-nowrap overflow-hidden text-ellipsis uppercase">
                                            PenPoll
                                        </span>
                                    </div>
                                    <div className="hidden lg:block w-full mb-2">
                                        <span className="text-2xl">DAO 를 통해 검증된 포스팅을 확인해 보세요.</span>
                                    </div>
                                    <div className="w-full mb-4 lg:mb-10 flex items-center justify-center lg:justify-start">
                                        여러분의 참여가 좋은 포스팅을 만들어갑니다.
                                    </div>
                                    <div className="w-full flex justify-center lg:justify-start">
                                        <div className="w-4/6 h-16 font-bold bg-red-500 lg:mr-10 rounded-lg cursor-pointer flex items-center hover:bg-red-700 transition-all duration-150">
                                            <div className="w-full text-center text-xl text-white font-mono">
                                                <Link href={`/fund/write`}>글쓰기</Link>
                                            </div>
                                            <div className="w-24 h-full border-l-2 flex justify-center items-center">
                                                <Icon icon="bi:chat-left-quote-fill" className="text-3xl text-white" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SlideBox>
                    </div>
                    {/* <img className="main-img" src="/static/images/banner.jpg" alt="" />
                    <img src="/static/images/banner2.jpg" alt="" />
                    <div>
                        <p className="italic">PenPoll</p>
                        <h1>"야" 너두 할 수 있어</h1>
                        <h1> 낭만 코딩</h1>
                        <br />
                        <h3>누구나 참여 가능한 검증된</h3>
                        <h3>지식 공간</h3>
                        <img className="w-96 mt-12" src="/static/images/logo.png" alt="" />
                    </div> */}
                </PostBenner>

                <div className="flex justify-content gap-5">
                    <div className="rounded-xl shadow-2xl dark:shadow-cyan-700/50 text-gray-800 dark:text-white hidden md:block overflow-hidden md:max-w-[360px] lg:max-w-[420px]">
                        <Image
                            src={`/img1.jpg`}
                            alt="=image"
                            width={1000}
                            height={1000}
                            className="object-cover h-72 lg:h-96"
                        />
                        <div className="flex h-24 flex-col justify-start gap-2.5 rounded-b-[20px] dark:bg-gray-800 px-5 py-4">
                            <div className="flex text-2xl font-semibold leading-[30px]">[BEST] Solidity 깨부시기!</div>
                            <div className="flex items-center gap-2">
                                <div className="text-base font-normal text-lg">web7722</div>
                            </div>
                        </div>
                    </div>
                    <div className="rounded-xl shadow-2xl dark:shadow-cyan-700/50 text-gray-800 dark:text-white hidden md:block overflow-hidden md:max-w-[360px] lg:max-w-[420px]">
                        <Image
                            src={`/img2.jpg`}
                            alt="image"
                            width={1000}
                            height={1000}
                            className="object-cover h-72 lg:h-96"
                        />
                        <div className="flex h-24 flex-col justify-start gap-2.5 rounded-b-[20px] dark:bg-gray-800 px-5 py-4">
                            <div className="flex text-2xl font-semibold leading-[30px]">
                                Typescript로 토이비트코인 구현하기{' '}
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="text-base font-normal text-lg">BitKunst</div>
                            </div>
                        </div>
                    </div>
                    <div className="rounded-xl shadow-2xl dark:shadow-cyan-700/50 text-gray-800 dark:text-white hidden md:block overflow-hidden md:max-w-[360px] lg:max-w-[420px]">
                        <Image
                            src={`/img3.jpg`}
                            alt="nft image"
                            width={1000}
                            height={1000}
                            className="object-cover h-72 lg:h-96"
                        />
                        <div className="flex h-24 flex-col justify-start gap-2.5 rounded-b-[20px] dark:bg-gray-800 px-5 py-4">
                            <div className="flex text-2xl font-semibold leading-[30px]">#34. Space Opera</div>
                            <div className="flex items-center gap-2">
                                <div className="text-base font-normal text-lg">Astronaut</div>
                            </div>
                        </div>
                    </div>
                </div>

                <section className="w-full mt-20 pr-10 pl-10">
                    <div className="flex justify-between mb-10 items-center">
                        <h1 className="font-bold text-4xl ">Contents</h1>
                        <FundFilter />
                    </div>
                    <article className="grid grid-cols-3 gap-10">
                        {isSuccess &&
                            data.pages.map((page) =>
                                page.map(
                                    (
                                        item: {
                                            thumbnail: string
                                            profile: string
                                            title: string
                                            content: string
                                            date: string
                                            writer: string
                                            url: string
                                        },
                                        index: any,
                                    ) => {
                                        console.log(item)
                                        return (
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
                                        )
                                    },
                                ),
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
