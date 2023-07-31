import FundCard from '@/src/contents/modals/WalletList/fundCard'
import BaseLayout from '@/src/layout/BaseLayout'
import { Inter } from 'next/font/google'
import Head from 'next/head'
import { ReactElement } from 'react'
const inter = Inter({ subsets: ['latin'] })

const Home = () => {
    const fundCardTest: FundSlotList = {
        title: '이것은 타이틀 크하하',
        content:
            '이것은 너무너무 긴 컨텐츠이다 이것은 너무너무 긴 컨텐츠이다 이것은 너무너무 긴 컨텐츠이다 이것은 너무너무 긴 컨텐츠이다 이것은 너무너무 긴 컨텐츠이다 이것은 너무너무 긴 컨텐츠이다 이것은 너무너무 긴 컨텐츠이다 이것은 너무너무 긴 컨텐츠이다 이것은 너무너무 긴 컨텐츠이다 이것은 너무너무 긴 컨텐츠이다 이것은 너무너무 긴 컨텐츠이다 이것은 너무너무 긴 컨텐츠이다 이것은 너무너무 긴 컨텐츠이다 ',
    }
    return (
        <>
            <Head>
                <title>리뷰 - 메인페이지</title>
            </Head>

            <main className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}>
                <FundCard info={fundCardTest}/>
            </main>
        </>
    )
}

Home.getLayout = (page: ReactElement) => <BaseLayout>{page}</BaseLayout>
export default Home
