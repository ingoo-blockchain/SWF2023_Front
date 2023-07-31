import { useEffect, useState } from 'react'
import { useAccount } from 'wagmi'
import request from '../utils/request'
import { OWNER } from '../utils/config'
import { signIn } from 'next-auth/react'

export const useSign = () => {
    const { address, isConnected } = useAccount()
    const [isLoading, setIsLoading] = useState(true)
    const [user, setUser] = useState<User | null>(null)
    const [isOwner, setIsOwner] = useState(false)

    useEffect(() => {
        if (isConnected) {
            const message: User = {
                address: `0x${address}`,
                name: '',
                userImg: '',
                createdAt: '',
                verified: false,
            }

            setUser(message)
        } else {
            setUser(null)
        }
        setIsLoading(false)
    }, [address])

    return { user, isOwner, isConnected, isLoading }
}
