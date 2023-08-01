import { SetStateAction } from 'react'
import WalletConnectButton from './WalletConnectButton'
import styled from 'styled-components'
import UserBox from './UserBox'
import { LinkType } from '@/src/utils/LinkType'

interface HeaderProps {
    isConnected: boolean
    isLoading: boolean
    user: User | null
    setIsOpenModal: React.Dispatch<React.SetStateAction<boolean>>
}

const Title = styled.h1`
    font-size: 32px;
    font-weight: bold;
    margin-top: 13px;
    margin-bottom: 13px;
    margin-left: 20px;
    line-height: 32px;
`
const Menu = styled.ul`
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    & > li {
        margin: 20px;
        font-size: 14px;
        font-weight: bold;
    }
`

const MenuUser = styled.ul`
    display: flex;
    justify-content: center;
    align-items: center;
    & > .user-box-warp {
        padding: 11px 33px;
        height: 40px;
        background-color: #ca2828;
        border-radius: 6px;
        font-size: 15px;
        color: white;
        font-weight: bold;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-right: 20px;
    }
`

const Header: React.FC<HeaderProps> = ({ isConnected, isLoading, user, setIsOpenModal }) => {
    return (
        <>
            <div className="relative flex flex-row justify-between">
                <Title>LTL</Title>
                <Menu>
                    <li>
                        <LinkType to="/" children={'Posting'}></LinkType>
                    </li>
                    <li>
                        <LinkType to="/dao" children={'DAO'}></LinkType>
                    </li>
                </Menu>
                <MenuUser>
                    <li className="user-box-warp">
                        <WalletConnectButton isConnected={isConnected} setIsOpenModal={setIsOpenModal} />
                        <UserBox isConnected={isConnected} isLoading={isLoading} user={user} />
                    </li>
                </MenuUser>
            </div>
            <div className="w-full h-6 bg-gray-200"></div>
        </>
    )
}

export default Header
