import DropDown from '@/src/components/dropdown'

import LoadingSpinner from '@/src/components/loading/LoadingSpinner'
import DropDownMenu from './DropDownMenu'

interface UserBoxProps {
    isConnected: boolean
    isLoading: boolean
    user: User | null
}

const UserBox: React.FC<UserBoxProps> = ({ isConnected, isLoading, user }) => {
    if (!isConnected) return <></>
    if (isLoading || !user) return <LoadingSpinner />

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
