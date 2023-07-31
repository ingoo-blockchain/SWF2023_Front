import DropDown from '@/src/components/dropdown'

import LoadingSpinner from '@/src/components/loading/LoadingSpinner'
import { useRouter } from 'next/router'
import { useDisconnect } from 'wagmi'
import DropDownMenu from './DropDownMenu'

interface UserBoxProps {
    isConnected: boolean
    isLoading: boolean
    user: User | null
}

const UserBox: React.FC<UserBoxProps> = ({ isConnected, isLoading, user }) => {
    const router = useRouter()
    const { disconnect } = useDisconnect()
    if (!isConnected) return <></>
    if (isLoading || !user) return <LoadingSpinner />
    const handleClick = () => {
        disconnect()
        router.push('/')
    }
    return (
        <>
            <span>
                <DropDown title={user.address}>
                    <DropDownMenu />
                </DropDown>
            </span>
        </>
    )
}

export default UserBox
