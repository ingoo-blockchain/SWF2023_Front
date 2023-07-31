import UserProfile from '@/src/contents/modals/WalletList/profile'
import { ReactNode } from 'react'

interface CardProps {
    content: ReactNode
}

const Card: React.FC<CardProps> = ({ content }) => {
    return (
        <section className={`w-full bg-white flex flex-col rounded-sm border min-h-fit`}>
            <div className={`w-full flex flex-col min-h-fit p-5`}>{content}</div>
            <UserProfile id="djWJrn@web7722" name="adlkfa" direction="t" />
        </section>
    )
}

export default Card
