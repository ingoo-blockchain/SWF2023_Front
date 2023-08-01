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
    const handleMypage = () => {
        router.push('/mypage')
    }

    const handleUserLogin = () => {
        router.push('/login')
    }
    const handleUserModify = () => {
        router.push('/modify')
    }
    return (
        <>
            <TopMenu>Account</TopMenu>
            <MenuContainer>
                <MenuItem>
                    <button className="flex item-center" onClick={handleMypage}>
                        <Icon icon="icon-park-outline:people" className="mr-2 text-lg" />
                        MyPage
                    </button>
                </MenuItem>
                <MenuItem>
                    <button className="flex item-center" onClick={handleUserLogin}>
                        <Icon icon="material-symbols:login" className="mr-2 text-lg" />
                        로그인
                    </button>
                </MenuItem>
                <MenuItem>
                    <button className="flex item-center" onClick={handleUserModify}>
                        <Icon icon="clarity:plus-line" className="mr-2 text-lg" />
                        회원수정
                    </button>
                </MenuItem>
                <MenuItem>
                    <button className="flex item-center" onClick={handleLogout}>
                        <Icon icon="akar-icons:link-chain" className="mr-2 text-lg" />
                        Disconnect
                    </button>
                </MenuItem>
            </MenuContainer>
        </>
    )
}

export default DropDownMenu
