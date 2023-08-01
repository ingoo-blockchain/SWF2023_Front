import Card from '@/src/components/card'
import { Button } from '@/src/components/common/button'
import { InputBox } from '@/src/components/common/input'
import FundInput from '@/src/contents/modals/WalletList/fundArea'
import BaseLayout from '@/src/layout/BaseLayout'
import { Icon } from '@iconify/react/dist/iconify.js'
import { Inter } from 'next/font/google'
import Head from 'next/head'
import { ChangeEvent, FormEvent, ReactElement, useEffect, useState } from 'react'
import { useAccount } from 'wagmi'
import { useContract } from '@/src/hooks/ethers'
import request from '@/src/utils/request'
import { useRouter } from 'next/router'
const inter = Inter({ subsets: ['latin'] })

const Home = () => {
    const [value, setValue] = useState<string>('')
    const [realPath, setRealPath] = useState<string>('')
    const { isConnected, address } = useAccount()
    const router = useRouter()
    interface DaoWriteProps {
        title: HTMLInputElement
        content: HTMLInputElement
        file: any
    }

    const handleChange = (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>) => {
        setValue(String(e.target.value))
    }
    const writeHandler = async (e: FormEvent<HTMLFormElement>) => {
        const { posting, governor } = useContract()

        e.preventDefault()
        const {
            title: { value: title },
            content: { value: content },
            file,
        } = e.target as unknown as DaoWriteProps

        console.log(title, content, file)
        const formData = new FormData()
        formData.append('title', title)
        formData.append('content', content)
        formData.append('thumbnail', file.files[0])
        const {
            data: { account, uuid, ipfs, IpfsHash },
        } = await request.post('/proposal', formData, {
            headers: { Authorization: `Bearer ${address}`, 'Content-Type': 'multipart/form-data' },
        })
        console.log(account, uuid)
        const encodedFunctionCall = posting.interface.encodeFunctionData('store', [`${account}:${uuid}`, ipfs])
        const proposeTx = await governor.propose([posting.address], [0], [encodedFunctionCall], '')
        const proposeReceipt = await proposeTx.wait(1)
        const proposalId = proposeReceipt.events[0].args.proposalId
        console.log(proposalId.toString())
        const proposal_id = proposalId.toString()
        await request.patch('/proposal', { uuid, proposal_id })
        router.push(`/fund/view/${IpfsHash}`)
    }
    return (
        <form onSubmit={writeHandler}>
            <Head>
                <title>리뷰 - 메인페이지</title>
            </Head>

            <main className={`flex min-h-screen flex-col items-center justify-between p-10 ${inter.className}`}>
                <Card>
                    <label
                        htmlFor="thumbnail"
                        className={`w-full flex-1 flex rounded-t-sm justify-center items-center p-8 text-white bg-gray-400 border-b `}
                    >
                        <Icon icon="fluent:image-add-20-filled" className="w-12 h-12 text-white" />
                        <span className="pl-2 text-xl font-bold">Thumbnail</span>
                    </label>
                    <input type="file" name="file" id="thumbnail" className="invisible" />
                    <section className="p-4">
                        <div className="flex w-full items-center mb-3 pt-1">
                            <span className="pr-3 font-bold w-fit text-2xl">title</span>
                            <div className="flex-1 pr-3">
                                <InputBox name="title" value={value} onInput={handleChange} />
                            </div>
                            <Button type="submit" color="red" size="w-fit" style="pr-5 pl-5 pt-2 pb-2" fontSize="sm">
                                Write
                            </Button>
                        </div>
                        <FundInput className="h-full" />
                    </section>
                </Card>
            </main>
        </form>
    )
}

Home.getLayout = (page: ReactElement) => <BaseLayout>{page}</BaseLayout>
export default Home
