import { Button } from '@/src/components/common/button'
import FundSlot from '@/src/contents/modals/WalletList/slot'
import BaseLayout from '@/src/layout/BaseLayout'
import { Inter } from 'next/font/google'
import Head from 'next/head'
import Link from 'next/link'
import { ReactElement, useEffect } from 'react'
import { useInfiniteQuery } from '@tanstack/react-query'
import axios from 'axios'
const inter = Inter({ subsets: ['latin'] })

const Home = () => {
    const fundTestList: Array<FundSlotList> = [
        {
            title: 'title',
            content: '너무 긴 컨텐츠',
            answered: true,
        },
        {
            title: '어쩌구 저쩌구 이거 안돼요 으아앙',
            content: '어쩌구 저쩌구 이거 안돼요 으아앙 어쩌구 저쩌구 이거 안돼요 으아앙',
            answered: true,
        },
        {
            title: '어쩌구 저쩌구 이거 안돼요 으아앙',
            content: '어쩌구 저쩌구 이거 안돼요 으아앙 어쩌구 저쩌구 이거 안돼요 으아앙',
            answered: true,
        },
        {
            title: '어쩌구 저쩌구 이거 안돼요 으아앙',
            content: '어쩌구 저쩌구 이거 안돼요 으아앙 어쩌구 저쩌구 이거 안돼요 으아앙',
            answered: true,
        },
        {
            title: '어쩌구 저쩌구 이거 안돼요 으아앙',
            content: '어쩌구 저쩌구 이거 안돼요 으아앙 어쩌구 저쩌구 이거 안돼요 으아앙',
            answered: false,
        },
        {
            title: '어쩌구 저쩌구 이거 안돼요 으아앙',
            content: '어쩌구 저쩌구 이거 안돼요 으아앙 어쩌구 저쩌구 이거 안돼요 으아앙',
            answered: false,
        },
        {
            title: '어쩌구 저쩌구',
            content:
                '너무 긴 컨텐츠너무 긴 컨텐츠너무 긴 컨텐츠너무 긴 컨텐츠너무 긴 컨텐츠너무 긴 컨텐츠너무 긴 컨텐츠너무 긴 컨텐츠',
            answered: true,
        },
        {
            title: '너무짧은컨텐츠',
            content:
                '너무짧은컨텐츠너무짧은컨텐츠너무짧은컨텐츠너무짧은컨텐츠너무짧은컨텐츠너무짧은컨텐츠너무짧은컨텐츠너무짧은컨텐츠너무짧은컨텐츠너무짧은컨텐츠너무짧은컨텐츠너무짧은컨텐츠너무짧은컨텐츠너무짧은컨텐츠너무짧은컨텐츠',
            answered: true,
        },
        {
            title: 'title',
            content: 'titletitletitletitletitletitle',
            answered: false,
        },
    ]

    const getSlotList = async () => {
        // const data = await axios.get('')
        return fundTestList
    }
    
    const { data, isSuccess, hasNextPage, fetchNextPage, isFetchingNextPage } = useInfiniteQuery(
        ['InfiniteScroll'],
        ({ pageParam = 1 }) => getSlotList(),
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

            <main
                className={`flex flex-col h-fit items-center justify-start pt-10 pb-10 pr-24 pl-24 ${inter.className}`}
            >
                <div className="flex w-full justify-end">
                    <Link href={'/fund/write'}>
                        <Button color="red" size="w-fit" style="pr-5 pl-5 pt-2 pb-2 m-4" fontSize="sm">
                            Write
                        </Button>
                    </Link>
                </div>
                <div className="h-slot w-full flex flex-col items-center justify-start overflow-x-auto pr-1 pl-1 ">
                    {fundTestList.map((item: FundSlotList) => (
                        <FundSlot title={item.title} content={item.content} answered={item.answered} />
                    ))}
                </div>
            </main>
        </>
    )
}

Home.getLayout = (page: ReactElement) => <BaseLayout>{page}</BaseLayout>
export default Home
