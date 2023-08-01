import BaseLayout from '@/src/layout/BaseLayout'
import { Inter } from 'next/font/google'
import Head from 'next/head'
import Link from 'next/link'
import { ReactElement } from 'react'
const inter = Inter({ subsets: ['latin'] })

interface PostItemProps {
    thumbnail: string
    profile: string
    title: string
    content: string
    date: string
    writer: string
    url: string
}

const PostItem = ({ thumbnail, profile, title, content, date, writer, url }: PostItemProps) => {
    return (
        <Link href={`/view/${url}`}>
            <div
                className={`flex flex-col relative ml-10 mr-10 mb-20 w-80 border-gray-300 border-solid border-2 rounded-lg ${inter.className} post-item`}
            >
                <div className="w-80 overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 h-40">
                    <img
                        src={thumbnail}
                        alt="thumbnail img"
                        className="block w-80 h-40 object-cover object-center bg-gray-400"
                    />
                </div>
                <div className="mt-6 mr-5 ml-5 flex flex-col">
                    <div>
                        <p className="text-black text-sm font-bold mb-3">{title}</p>
                    </div>
                    <p className="text-xs font-medium text-gray-300">{content}</p>
                    <p className="text-xs mt-10 mb-2">{date}</p>
                </div>
                <span className="w-full h-px bg-gray-300 mt-2.5 mb-1"></span>
                <div className="flex items-center  mb-1">
                    <img src={profile} alt="user img" className="w-6 h-6 ml-5 bg-gray-400 rounded-full" />
                    <p className="text-xs ml-2 flex items-center justify-center">
                        <span className="text-gray-600 mr-1">by</span> {writer}
                    </p>
                </div>
            </div>
        </Link>
    )
}

PostItem.getLayout = (page: ReactElement) => <BaseLayout>{page}</BaseLayout>
export default PostItem
