import request from '@/src/utils/request'
import { useAccount } from 'wagmi'
import Post from '../post'
import BaseLayout from '@/src/layout/BaseLayout'
import { Modify } from '@/src/contents/modify'
import { useSign } from '@/src/hooks/useSign'
import { ReactElement } from 'react'
import Head from 'next/head'
const SignUp = () => {
    const { user, isLoading, isConnected } = useSign()
    // 여기에서 data 요청 응답 처리 function
    // 그리고 상태 변수로 값을 저장한 후 Props에 전달
    if (!user) return <>데이터가 없어유</>
    return (
        <>
            <Head>
                <title>리뷰 - 회원수정</title>
            </Head>
            <Modify />
        </>
    )
}
SignUp.getLayout = (page: ReactElement) => <BaseLayout>{page}</BaseLayout>
export default SignUp
