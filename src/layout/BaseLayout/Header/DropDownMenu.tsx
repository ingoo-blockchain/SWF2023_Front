import { MenuContainer, MenuItem, TopMenu } from '@/src/components/dropdown/dropdown.styled'
import { Icon } from '@iconify/react/dist/iconify.js'
import { useRouter } from 'next/router'
import { useDisconnect } from 'wagmi'

const DropDownMenu: React.FC = () => {
    const { disconnect } = useDisconnect()
    const router = useRouter()
    const handleLogout = () => {
        disconnect()
        router.push('/')
    }
    return (
        <>
            <TopMenu>Account</TopMenu>
            <MenuContainer>
                <MenuItem>마이페이지</MenuItem>
                <MenuItem>
                    <button className="flex item-center" onClick={handleLogout}>
                        <Icon icon="akar-icons:link-chain" className="text-lg mr-2" />
                        Disconnect
                    </button>
                </MenuItem>
            </MenuContainer>
        </>
    )
}

export default DropDownMenu
