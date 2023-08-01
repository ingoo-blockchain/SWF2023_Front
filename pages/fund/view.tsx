import Card from '@/src/components/card'
import { Button } from '@/src/components/common/button'
import AnswerCard from '@/src/contents/modals/WalletList/answerCard'
import FundCard from '@/src/contents/modals/WalletList/fundCard'
import UserProfile from '@/src/contents/modals/WalletList/profile'
import BaseLayout from '@/src/layout/BaseLayout'
import { Content, Inter } from 'next/font/google'
import Head from 'next/head'
import { ReactElement } from 'react'
const inter = Inter({ subsets: ['latin'] })

const Home = () => {
    const fundCardTest: FundSlotList = {
        title: '이것은 타이틀 크하하',
        content:
            '이것은 너무너무 긴 컨텐츠이다 이것은 너무너무 긴 컨텐츠이다 이것은 너무너무 긴 컨텐츠이다 이것은 너무너무 긴 컨텐츠이다 이것은 너무너무 긴 컨텐츠이다 이것은 너무너무 긴 컨텐츠이다 이것은 너무너무 긴 컨텐츠이다 이것은 너무너무 긴 컨텐츠이다 이것은 너무너무 긴 컨텐츠이다 이것은 너무너무 긴 컨텐츠이다 이것은 너무너무 긴 컨텐츠이다 이것은 너무너무 긴 컨텐츠이다 이것은 너무너무 긴 컨텐츠이다 ',
    }

    const answeredCardTest: Array<FundSlotList> = [
        {
            title: '어마무시한 댓글',
            content: '어마무시어마무시어마무시어마무시어마무시어마무시어마무시어마무시어마무시',
            answered: true,
        },
        {
            title: '어마무시한 댓글',
            content: '어마무시어마무시어마무시어마무시어마무시어마무시어마무시어마무시어마무시',
            answered: true,
        },
        {
            title: '어마무시한 댓글',
            content: '어마무시어마무시어마무시어마무시어마무시어마무시어마무시어마무시어마무시',
            answered: true,
        },
        {
            title: '어마무시한 댓글',
            content: '어마무시어마무시어마무시어마무시어마무시어마무시어마무시어마무시어마무시',
            answered: false,
        },
        {
            title: '어마무시한 댓글',
            content: '어마무시어마무시어마무시어마무시어마무시어마무시어마무시어마무시어마무시',
            answered: false,
        },
        {
            title: '너무짧은컨텐츠',
            content:
                '너무짧은컨텐츠너무짧은컨텐츠너무짧은컨텐츠너무짧은컨텐츠너무짧은컨텐츠너무짧은컨텐츠너무짧은컨텐츠너무짧은컨텐츠너무짧은컨텐츠너무짧은컨텐츠너무짧은컨텐츠너무짧은컨텐츠너무짧은컨텐츠너무짧은컨텐츠너무짧은컨텐츠',
            answered: true,
        },
    ]

    return (
        <>
            <Head>
                <title>리뷰 - 메인페이지</title>
            </Head>

            <main className={`flex h-900px flex-col items-center justify-start p-10 ${inter.className}`}>
                <FundCard info={fundCardTest} />
                <section className="w-full flex flex-col">
                    <AnswerCard />
                    <div className='overflow-auto'>
                        {answeredCardTest.map((item: FundSlotList) => (
                            <Card>
                                <div className="flex flex-col justify-start">
                                    <div className="w-full">
                                        <UserProfile id="djWJrn@web7722" name="adlkfa" direction={'b'} />
                                    </div>
                                    <section className=" p-5">
                                        <h3 className="w-full">
                                            <span className={`text-2xl text-black font-semibold`}>{item.title}</span>
                                        </h3>
                                        <div className="pt-3 pb-3">{item.content}</div>
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
