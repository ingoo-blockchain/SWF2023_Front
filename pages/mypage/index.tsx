import BaseLayout from '@/src/layout/BaseLayout'
// import { LoadingSpinner2 } from '@/src/components/common/loading'
// import { RootLayout } from '@/src/components/layout/layout'
import { ProfileCard } from '@/src/components/profile/'
// import { useEvent } from '@/src/utils/hooks/useEvent'
// import { useMarket } from '@/src/utils/hooks/useMarket'
// import { useSign } from '@/src/utils/hooks/useSign'
import request from '@/src/utils/request'
import { useAccount } from 'wagmi'
import { ReactElement } from 'react'
import Head from 'next/head'
import Post from '../post'

const MyPage = () => {
    return (
        <>
            <Head>
                <title>리뷰 - 메인페이지</title>
            </Head>

            {/* <main className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}> */}
            <ProfileCard />
            {/* </main> */}
        </>
    )
}
MyPage.getLayout = (page: ReactElement) => <BaseLayout>{page}</BaseLayout>
export default MyPage
