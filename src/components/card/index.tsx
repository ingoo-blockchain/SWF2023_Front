import UserProfile from '@/src/contents/modals/WalletList/profile'
import { ReactNode } from 'react'

interface CardProps extends StyledProps {
    children: ReactNode,
    className?: string
}

const Card: React.FC<CardProps> = ({ children, className = "" }) => {
    return (
        <section className={`w-full bg-white flex flex-col rounded-sm border min-h-fit select-none ${className}`}>
            {children}
        </section>
    )
}

export default Card
