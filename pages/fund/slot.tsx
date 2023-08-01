import { Button } from '@/src/components/common/button'
import FundSlot from '@/src/contents/modals/WalletList/slot'
import BaseLayout from '@/src/layout/BaseLayout'
import { Inter } from 'next/font/google'
import Head from 'next/head'
import Link from 'next/link'
import { ReactElement, useEffect, useRef } from 'react'
import { useInfiniteQuery } from '@tanstack/react-query'
import axios from 'axios'
import FundFilter from '@/src/contents/filter'
import request from '@/src/utils/request'
import { htmlToText } from '@/src/utils/htmlToText'
const inter = Inter({ subsets: ['latin'] })

interface ReqeustProps {
    account: Account
    uuid: string
    proposal_id: string
    status: 0
    IpfsHash: string
    created_at: any
}

// {
//     account: '0xB118a3CE35b206c14c51fC2653AE7f4F7434118D',
//     uuid: 'bccf6820-fdd9-43b4-8c7b-c685baeb4903',
//     proposal_id: '44031275621736276863324102003761290632648635910282779431148813851574920189396',
//     status: 0,
//     IpfsHash: 'QmYoigx9PcewKR6yid86NM9k2stmtpJ4SMvBySTtkWJWrv',
//     created_at: 2023-08-01T06:53:07.000Z
//   }

const Slot = () => {
    const fundTestList = {
        items: [
            // {
            //     title: 'title',
            //     content: '너무 긴 컨텐츠',
            //     answered: true,
            // },
            // {
            //     title: '어쩌구 저쩌구 이거 안돼요 으아앙',
            //     content: '어쩌구 저쩌구 이거 안돼요 으아앙 어쩌구 저쩌구 이거 안돼요 으아앙',
            //     answered: true,
            // },
            // {
            //     title: '어쩌구 저쩌구 이거 안돼요 으아앙',
            //     content: '어쩌구 저쩌구 이거 안돼요 으아앙 어쩌구 저쩌구 이거 안돼요 으아앙',
            //     answered: true,
            // },
            // {
            //     title: '어쩌구 저쩌구 이거 안돼요 으아앙',
            //     content: '어쩌구 저쩌구 이거 안돼요 으아앙 어쩌구 저쩌구 이거 안돼요 으아앙',
            //     answered: true,
            // },
            // {
            //     title: '어쩌구 저쩌구 이거 안돼요 으아앙',
            //     content: '어쩌구 저쩌구 이거 안돼요 으아앙 어쩌구 저쩌구 이거 안돼요 으아앙',
            //     answered: false,
            // },
            // {
            //     title: '어쩌구 저쩌구 이거 안돼요 으아앙',
            //     content: '어쩌구 저쩌구 이거 안돼요 으아앙 어쩌구 저쩌구 이거 안돼요 으아앙',
            //     answered: false,
            // },
            // {
            //     title: '어쩌구 저쩌구',
            //     content:
            //         '너무 긴 컨텐츠너무 긴 컨텐츠너무 긴 컨텐츠너무 긴 컨텐츠너무 긴 컨텐츠너무 긴 컨텐츠너무 긴 컨텐츠너무 긴 컨텐츠',
            //     answered: true,
            // },
            // {
            //     title: '너무짧은컨텐츠',
            //     content: '캬캬',
            //     answered: true,
            // },
            // {
            //     title: 'title',
            //     content: 'titletitletitletitletitletitle',
            //     answered: false,
            // },
        ],
    }
    let slotRef = useRef(null) as React.MutableRefObject<any | null>

    const getSlotList = async (page: number) => {
        const { data } = await request.get<ReqeustProps[]>(`/proposal?page=${page}&limit=${10}`)

        const result = Promise.all(
            data.map((item) => axios.get(`${process.env.NEXT_PUBLIC_IPFS_URL}/${item.IpfsHash}`)),
        )

        return result
    }

    const { data, isSuccess, hasNextPage, fetchNextPage, isFetchingNextPage } = useInfiniteQuery(
        ['InfiniteSlot'],
        ({ pageParam = 1 }) => getSlotList(pageParam),
        {
            getNextPageParam: (lastPage, allPages) => {
                const nextPage = allPages.length + 1
                return nextPage
            },
        },
    )

    useEffect(() => {
        if (!slotRef.current) return

        let fetching = false
        const handleScroll = async (e: any) => {
            if (!e.target) return
            if (!fetching && e.target.scrollHeight - e.target.scrollTop <= e.target.clientHeight * 1.2) {
                fetching = true
                if (hasNextPage) await fetchNextPage()
                fetching = false
            }
        }

        slotRef.current.addEventListener('scroll', handleScroll)
        return () => {
            if (!slotRef.current) return
            slotRef.current.removeEventListener('scroll', handleScroll)
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
                <div className="flex w-full justify-between">
                    <FundFilter />
                    <Link href={'/fund/write'}>
                        <Button color="red" size="w-fit" style="pr-5 pl-5 pt-2 pb-2 m-4" fontSize="sm">
                            Write
                        </Button>
                    </Link>
                </div>
                <div
                    className="h-slot w-full flex flex-col items-center justify-start overflow-x-auto pr-1 pl-1 scroll-m-0 scroll-p-0 scrollbar-hide"
                    ref={slotRef}
                >
                    <>
                        {isSuccess &&
                            data.pages.map((page) => {
                                return page.map((item, idx) => {
                                    console.log(item)
                                    const { data } = item
                                    const thumbnail = data.thumbnail.replaceAll('\\', '/')
                                    return (
                                        <FundSlot
                                            key={idx}
                                            title={data.title}
                                            content={htmlToText(data.content)}
                                            answered={data.answered}
                                            thumbnail={thumbnail}
                                            user_id={data.user.user_id}
                                        />
                                    )
                                })

                                // page.map((item, idx) => {
                                //     console.log(item.IpfsHash)
                                //     return <></>
                                // })
                            })}
                    </>
                </div>
            </main>
        </>
    )
}

Slot.getLayout = (page: ReactElement) => <BaseLayout>{page}</BaseLayout>
export default Slot

// {isSuccess &&
//     data.pages.map((page) =>
//         page.items.map((item, idx) => (
//             <FundSlot
//                 key={idx}
//                 title={item.title}
//                 content={item.content}
//                 answered={item.answered}
//                 thumbnail={''}
//             />
//         )),
//     )}
