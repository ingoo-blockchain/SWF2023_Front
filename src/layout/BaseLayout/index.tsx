import Modal from '@/src/components/modal'
import WalletList from '@/src/contents/modals/WalletList'
import { useSign } from '@/src/hooks/useSign'
import Head from 'next/head'
import PropTypes from 'prop-types'
import { ReactNode, SetStateAction, useState } from 'react'
import Header from './Header'

interface BaseLayoutProps {
    children?: ReactNode
}

const BaseLayout: React.FC<BaseLayoutProps> = ({ children }) => {
    const { user, isLoading, isConnected } = useSign()
    const [isOpenModal, setIsOpenModal] = useState<boolean>(false)

    console.log(user, isLoading, isConnected)

    return (
        <div>
            <div className="flex flex-col justify-between h-full">
                <Head>
                    <title>Review</title>
                </Head>
                <div>
                    <Header
                        isConnected={isConnected}
                        isLoading={isLoading}
                        user={user}
                        setIsOpenModal={setIsOpenModal}
                    />
                    <div className="px-4 md:container md:mx-auto">{children}</div>
                </div>
                <Modal isOpenModal={isOpenModal} setIsOpenModal={setIsOpenModal} width="20rem" height="1.5rem">
                    <WalletList close={() => setIsOpenModal(false)} />
                </Modal>
            </div>
        </div>
    )
}

BaseLayout.propTypes = {
    children: PropTypes.node,
}

export default BaseLayout
