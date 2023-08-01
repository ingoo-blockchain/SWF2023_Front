import request from '@/src/utils/request'
import { useAccount } from 'wagmi'
import Post from '../post'
import BaseLayout from '@/src/layout/BaseLayout'
import { Login } from '@/src/contents/login/'
import { useSign } from '@/src/hooks/useSign'
import { ReactElement } from 'react'
import Head from 'next/head'
const MyPage = () => {
    const { user, isLoading, isConnected } = useSign()
    // 여기에서 data 요청 응답 처리 function
    // 그리고 상태 변수로 값을 저장한 후 Props에 전달
    if (!user) return <>데이터가 없어유</>
    return (
        <>
            <Head>
                <title>리뷰 - 메인페이지</title>
            </Head>

            <Login />
        </>
    )
}
MyPage.getLayout = (page: ReactElement) => <BaseLayout>{page}</BaseLayout>
export default MyPage
