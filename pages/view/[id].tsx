import { MarkDown } from '@/src/contents/markdown'
import BaseLayout from '@/src/layout/BaseLayout'
import { Inter } from 'next/font/google'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { ReactElement, useEffect } from 'react'
const inter = Inter({ subsets: ['latin'] })
const View = () => {
    const router = useRouter()
    const content = `# 테스트\n## 테스트임\n### 테스트임`
    useEffect(() => {
        console.log(router.query)
    }, [])
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
