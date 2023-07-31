import BaseLayout from '@/src/layout/BaseLayout'
import { Inter } from 'next/font/google'
import Head from 'next/head'
import { ReactElement } from 'react'
import PostItem from './PostCard'
import styled from 'styled-components'
const inter = Inter({ subsets: ['latin'] })

const PostBenner = styled.div`
    display: flex;
    margin: 0 auto;
    margin-bottom: 128px;
    & > img {
        width: 500px;
        height: 360px;
        background-color: gray;
        margin-right: 78px;
    }

    & > div {
        & > p {
            font-size: 32px;
            font-weight: bold;
            margin-bottom: 78px;
        }
        & > h1 {
            font-size: 32px;
            font-weight: bold;
        }
        & > h3 {
            font-size: 18px;
            font-weight: bold;
        }
    }
`

const Post = () => {
    return (
        <>
            <Head>
                <title>리뷰 - 메인페이지</title>
            </Head>

            <main className={`flex min-h-screen flex-col items-center justify-between ${inter.className}`}>
                <PostBenner>
                    <img alt="" />
                    <div>
                        <p>BlockChain</p>
                        <h1>아무글자나 넣자</h1>
                        <h3>아무글자나 넣자</h3>
                    </div>
                </PostBenner>
                <div className="bg-white">
                    <div className="w-full">
                        <div className="flex w-full">
                            <PostItem></PostItem>
                            <PostItem></PostItem>
                            <PostItem></PostItem>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

Post.getLayout = (page: ReactElement) => <BaseLayout>{page}</BaseLayout>
export default Post
