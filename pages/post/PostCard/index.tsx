import BaseLayout from '@/src/layout/BaseLayout'
import { Inter } from 'next/font/google'
import Head from 'next/head'
import { ReactElement } from 'react'
const inter = Inter({ subsets: ['latin'] })

const PostItem = () => {
    return (
        <>
            <div
                className={`flex flex-col relative ml-20 mr-20 w-80 border-gray-300 border-solid border-2 rounded-lg ${inter.className}`}
            >
                <div className="w-80 overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 h-40">
                    <img alt="post img" className="block w-80 h-40 object-cover object-center bg-gray-400" />
                </div>
                <div className="mt-6 mr-5 ml-5 flex flex-col">
                    <div>
                        <p className="text-black text-sm font-bold mb-3">주니어 개발자의 현업에서 배운 Git Flow</p>
                    </div>
                    <p className="text-xs font-medium text-gray-300">
                        입사 후, 1년 동안 열심히 공부하고 익힌 실무에 활 용 되는 git flow 전략
                    </p>
                    <p className="text-xs mt-10 mb-2">2023년 7월 21일</p>
                </div>
                <span className="w-full h-px bg-gray-300 mt-2.5 mb-1"></span>
                <div className="flex items-center  mb-1">
                    <img alt="user img" className="w-6 h-6 ml-5 bg-gray-400 rounded-full" />
                    <p className="text-xs ml-2 flex items-center justify-center">
                        <span className="text-gray-600 mr-1">by</span> 주병현
                    </p>
                </div>
            </div>
        </>
    )
}

PostItem.getLayout = (page: ReactElement) => <BaseLayout>{page}</BaseLayout>
export default PostItem
