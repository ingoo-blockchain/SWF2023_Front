interface WalletConnectButtonProps {
    isConnected: boolean
    setIsOpenModal: React.Dispatch<React.SetStateAction<boolean>>
}

const WalletConnectButton: React.FC<WalletConnectButtonProps> = ({ isConnected, setIsOpenModal }) => {
    if (isConnected) return <></>
    return <button onClick={() => setIsOpenModal(true)}>Connect</button>
}

export default WalletConnectButton
