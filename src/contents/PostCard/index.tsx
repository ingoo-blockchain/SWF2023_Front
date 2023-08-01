import Card from '@/src/components/card'
import BaseLayout from '@/src/layout/BaseLayout'
import { Inter } from 'next/font/google'
import Head from 'next/head'
import Link from 'next/link'
import { ReactElement } from 'react'
import UserProfile from '../modals/WalletList/profile'
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
            <Card className='mb-5'>
                <img
                    src={thumbnail}
                    alt="thumbnail img "
                    className="block w-full rounded-t-sm h-40 object-cover object-center bg-gray-400"
                />
                <div className="flex flex-col mt-6 ml-5 mr-5">
                    <div>
                        <p className="text-black text-sm font-bold mb-3">{title}</p>
                    </div>
                    <p className="text-xs font-medium text-gray-300">{content}</p>
                    <p className="text-xs mt-10 mb-2">{date}</p>
                </div>
                <div className='w-full border-t'>
                    <UserProfile direction="none" id={'test'} name="test" />
                </div>
            </Card>
        </Link>
    )
}

PostItem.getLayout = (page: ReactElement) => <BaseLayout>{page}</BaseLayout>
export default PostItem
