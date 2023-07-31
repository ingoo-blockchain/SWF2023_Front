import ReviewSlot from '@/src/contents/modals/WalletList/slot'
import BaseLayout from '@/src/layout/BaseLayout'
import { Inter } from 'next/font/google'
import Head from 'next/head'
import { ReactElement } from 'react'
const inter = Inter({ subsets: ['latin'] })

const Home = () => {
    return (
        <>
            <Head>
                <title>리뷰 - 메인페이지</title>
            </Head>

            <main className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}>
                <ReviewSlot title={'이것은 타이틀 크하하하'} children/>
            </main>
        </>
    )
}

Home.getLayout = (page: ReactElement) => <BaseLayout>{page}</BaseLayout>
export default Home
