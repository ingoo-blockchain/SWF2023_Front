import { SetStateAction } from 'react'
import WalletConnectButton from './WalletConnectButton'
import UserBox from './UserBox'

interface HeaderProps {
    isConnected: boolean
    isLoading: boolean
    user: User | null
    setIsOpenModal: React.Dispatch<React.SetStateAction<boolean>>
}

const Header: React.FC<HeaderProps> = ({ isConnected, isLoading, user, setIsOpenModal }) => {
    return (
        <div className="flex flex-row justify-between">
            <h1>logo</h1>
            <ul>
                <li>
                    <WalletConnectButton isConnected={isConnected} setIsOpenModal={setIsOpenModal} />
                    <UserBox isConnected={isConnected} isLoading={isLoading} user={user} />
                </li>
            </ul>
        </div>
    )
}

export default Header
