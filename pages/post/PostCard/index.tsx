import BaseLayout from '@/src/layout/BaseLayout'
import { Inter } from 'next/font/google'
import Head from 'next/head'
import { ReactElement } from 'react'
const inter = Inter({ subsets: ['latin'] })

const PostItem = () => {
    return (
        <>
            <div
                className={`absolute flex flex-col relative ml-20 mr-20 w-80 border-gray-300 border-solid border-2 rounded-lg ${inter.className}`}
            >
                <div className="h-40 overflow-hidden bg-gray-200 rounded-md w-80 lg:aspect-none group-hover:opacity-75">
                    <img alt="post img" className="block object-cover object-center h-40 bg-gray-400 w-80" />
                </div>
                <div className="flex flex-col mt-6 ml-5 mr-5">
                    <div>
                        <p className="mb-3 text-sm font-bold text-black">주니어 개발자의 현업에서 배운 Git Flow</p>
                    </div>
                    <p className="text-xs font-medium text-gray-300">
                        입사 후, 1년 동안 열심히 공부하고 익힌 실무에 활 용 되는 git flow 전략
                    </p>
                    <p className="mt-10 mb-2 text-xs">2023년 7월 21일</p>
                </div>
                <span className="w-full h-px bg-gray-300 mt-2.5 mb-1"></span>
                <div className="flex items-center mb-1">
                    <img alt="user img" className="w-6 h-6 ml-5 bg-gray-400 rounded-full" />
                    <p className="flex items-center justify-center ml-2 text-xs">
                        <span className="mr-1 text-gray-600">by</span> 주병현
                    </p>
                </div>
            </div>
        </>
    )
}

PostItem.getLayout = (page: ReactElement) => <BaseLayout>{page}</BaseLayout>
export default PostItem
