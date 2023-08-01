import { MarkDown } from '@/src/contents/markdown'
import BaseLayout from '@/src/layout/BaseLayout'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { Inter } from 'next/font/google'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { ReactElement, useEffect } from 'react'
const inter = Inter({ subsets: ['latin'] })
const View = () => {
    const router = useRouter()
    const fetchContent = async () => {
        const {
            query: { id },
        } = router
        // const {data} = await axios.get('');
        return [id]
    }
    const { isLoading, data } = useQuery({
        queryKey: ['evaluate'],
        queryFn: () => fetchContent(),
    })
    const content = `# 테스트\n## 테스트임\n### 테스트임${data}`

    return (
        <>
            <Head>
                <title>리뷰 - 상세페이지</title>
            </Head>

            <main className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}>
                <MarkDown source={content}></MarkDown>
            </main>
        </>
    )
}

View.getLayout = (page: ReactElement) => <BaseLayout>{page}</BaseLayout>
export default View
