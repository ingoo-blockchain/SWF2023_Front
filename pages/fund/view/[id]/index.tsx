import Card from '@/src/components/card'
import { Button } from '@/src/components/common/button'
import AnswerCard from '@/src/contents/modals/WalletList/answerCard'
import FundCard from '@/src/contents/modals/WalletList/fundCard'
import UserProfile from '@/src/contents/modals/WalletList/profile'
import BaseLayout from '@/src/layout/BaseLayout'
import axios from 'axios'
import { Content, Inter } from 'next/font/google'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { ReactElement, useEffect, useState } from 'react'
import { useMutation, useQuery } from '@tanstack/react-query'
import request from '@/src/utils/request'
const inter = Inter({ subsets: ['latin'] })

const Home = () => {
    const [url, setUrl] = useState<string>()
    const [data, setData] = useState<FundSlotList>({ title: '', content: '', answered: false, thumbnail: '' })
    const router = useRouter()
    const fundCardTest: FundSlotList = {
        title: data?.title,
        content: data?.content,
        answered: true,
        thumbnail: data?.thumbnail,
    }

    const ipfsContent = async () => {
        const ipfs = `${process.env.NEXT_PUBLIC_IPFS_URL}/${router.query.id}`
        return await axios.get(ipfs)
    }
    // const { isLoading, data } = useQuery({
    //     queryKey: ['ipfs'],
    //     queryFn: () => ipfsContent() as any,
    // })
    const ipfsMutation = useMutation({
        mutationFn: ipfsContent,
        onSuccess: (result) => {
            console.log(result)
            const { data: ipfs } = result
            // title: data?.title,
            // //     content: data?.content,
            setData({ title: ipfs.title, content: ipfs.content, answered: true, thumbnail: ipfs.thumbnail })
        },
    })

    // useEffect(() => {
    //     console.log(data)
    // }, [isLoading])

    useEffect(() => {
        if (!router.query.id) return
        ipfsMutation.mutate()
    }, [router.query.id])

    const answeredCardTest: Array<FundSlotList> = [
        {
            title: '어마무시한 다음글',
            content: '어마무시어마무시어마무시어마무시어마무시어마무시어마무시어마무시어마무시',
            answered: true,
            thumbnail: '',
        },
        {
            title: '어마무시한 다음글',
            content: '어마무시어마무시어마무시어마무시어마무시어마무시어마무시어마무시어마무시',
            answered: true,
            thumbnail: '',
        },
        {
            title: '어마무시한 다음글',
            content: '어마무시어마무시어마무시어마무시어마무시어마무시어마무시어마무시어마무시',
            answered: true,
            thumbnail: '',
        },
        {
            title: '어마무시한 다음글',
            content: '어마무시어마무시어마무시어마무시어마무시어마무시어마무시어마무시어마무시',
            answered: true,
            thumbnail: '',
        },
        {
            title: '어마무시한 다음글',
            content: '어마무시어마무시어마무시어마무시어마무시어마무시어마무시어마무시어마무시',
            answered: true,
            thumbnail: '',
        },
    ]

    return (
        <>
            <Head>
                <title>리뷰 - 메인페이지</title>
            </Head>

            <main className={`flex h-900px items-center justify-start p-10 `}>
                <section className="h-full mr-5 w-3/4">
                    <FundCard info={fundCardTest} />
                </section>
                <section className="w-1/4 flex flex-col h-full">
                    <div className="overflow-auto grid grid-rows-3 h-full gap-3">
                        {Array<undefined>(3)
                            .fill(undefined)
                            .map((item, idx) => (
                                <Card className="mb-0" key={`viewcard-${idx}`}>
                                    <div className="flex flex-col justify-start">
                                        <div className="w-full">
                                            <UserProfile
                                                src={answeredCardTest[idx].thumbnail}
                                                id="djWJrn@web7722"
                                                name="adlkfa"
                                                direction={'b'}
                                            />
                                        </div>
                                        <section className="p-5">
                                            <h3 className="w-full">
                                                <span className={`text-2xl text-black font-semibold`}>
                                                    {answeredCardTest[idx].title}
                                                </span>
                                            </h3>
                                            <div className="pt-3 pb-3">{answeredCardTest[idx].content}</div>
                                        </section>
                                    </div>
                                </Card>
                            ))}
                    </div>
                </section>
            </main>
        </>
    )
}

Home.getLayout = (page: ReactElement) => <BaseLayout>{page}</BaseLayout>
export default Home
