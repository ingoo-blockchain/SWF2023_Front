import Card from '@/src/components/card'
import { Button } from '@/src/components/common/button'
import { InputBox } from '@/src/components/common/input'
import FundInput from '@/src/contents/modals/WalletList/fundArea'
import BaseLayout from '@/src/layout/BaseLayout'
import { Icon } from '@iconify/react/dist/iconify.js'
import { Inter } from 'next/font/google'
import Head from 'next/head'
import { ChangeEvent, ReactElement, useEffect, useState } from 'react'
const inter = Inter({ subsets: ['latin'] })

const Home = () => {
    const [value, setValue] = useState<string>('')

    const handleChange = (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>) => {
        setValue(String(e.target.value))
    }

    return (
        <>
            <Head>
                <title>리뷰 - 메인페이지</title>
            </Head>

            <main className={`flex min-h-screen flex-col items-center justify-between p-10 ${inter.className}`}>
                <Card>
                    <label htmlFor="thumbnail" className="w-full flex-1 flex rounded-t-sm justify-center items-center p-8 text-white bg-gray-400 border-b border-b">
                        <Icon icon="fluent:camera-add-20-filled" className="w-12 h-12 text-white" />
                        <span className="pl-2 text-xl font-bold">Thumbnail</span>
                    </label>
                    <input type="file" id="thumbnail" className="invisible" />
                    <section className="p-4">
                        <div className="flex w-full items-center mb-3 pt-1">
                            <span className="pr-3 font-bold w-fit text-2xl">title</span>
                            <div className="flex-1 pr-3">
                                <InputBox value={value} onInput={handleChange} />
                            </div>
                            <Button color="red" size="w-fit" style="pr-5 pl-5 pt-2 pb-2" fontSize="sm">
                                Write
                            </Button>
                        </div>
                        <FundInput className="h-full" />
                    </section>
                </Card>
            </main>
        </>
    )
}

Home.getLayout = (page: ReactElement) => <BaseLayout>{page}</BaseLayout>
export default Home
