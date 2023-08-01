import MetaMask from '@/src/components/icons/metamask'
import withLoading from '@/src/components/loading'
import request from '@/src/utils/request'
import { useEffect } from 'react'
import tw from 'tailwind-styled-components'
import { useAccount, useConnect, useDisconnect } from 'wagmi'

const WalletListWrapper = tw.div`
    relative text-md font-normal text-gray-500 dark:text-gray-400
`

const LoginTextBox = tw.span`
    px-6 text-md font-normal text-gray-500 dark:text-gray-400
`

const WalletGroup = tw.ul`
    my-6 space-y-4
`

const WalletItem = tw.li`
    flex items-center cursor-pointer px-5 py-3 text-base font-bold rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500
`

const WalletName = tw.span`
    flex-1 ml-5 whitespace-nowrap
`

const RecommendText = tw.span`
    inline-flex items-center justify-center px-2 py-0.5 ml-3 text-xs font-medium text-gray-500 bg-gray-200 rounded dark:bg-gray-700 dark:text-gray-400
`

interface WalletListProps {
    close: () => void
}

const WalletList: React.FC<WalletListProps> = ({ close }) => {
    const { isConnected, address } = useAccount()
    const { connect, connectors, error, isLoading, pendingConnector } = useConnect()

    const { disconnect } = useDisconnect()
    const LoginText = withLoading(LoginTextBox)

    const handleConnect = (type: string) => async () => {
        if (isConnected) return disconnect()
        const provider = connectors.find((x) => x.ready && type === x.id)
        connect({ connector: provider })

        close()
    }

    useEffect(() => {
        if (!address) return
        ;(async () => {
            const { data } = await request.post('/users', { account: address })
            console.log(data)
        })()
    }, [address])

    return (
        <>
            <WalletListWrapper>
                <LoginText isLoading={isLoading}>사이트에 연결할 지갑을 선택해주세요.</LoginText>
                <WalletGroup>
                    <WalletItem onClick={handleConnect('metaMask')}>
                        <MetaMask />
                        <WalletName>MetaMask</WalletName>
                        <RecommendText>추천</RecommendText>
                    </WalletItem>
                </WalletGroup>
            </WalletListWrapper>
            {error && <div>{(error as any).shortMessage}</div>}
        </>
    )
}

export default WalletList
