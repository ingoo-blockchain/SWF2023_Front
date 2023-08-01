import { ReactNode } from 'react'
interface Classes {
    id: string
    name: string
}

interface UserProfileProps {
    name: string
    id: string
    direction: 't' | 'b' | 'none'
    children?: ReactNode
    src?: string
    classes?: Classes
    reverse?: boolean
}

const UserProfile: React.FC<UserProfileProps> = ({ name, id, direction = 'b', classes, children, reverse = false }) => {
    let dir = direction !== 'none' ? `border-${direction}` : ''
    let rev = !reverse ? '' : 'flex-row-reverse'
    return (
        <div className={`flex justify-between items-center p-3 ${dir} ${rev}`}>
            <div className={`flex ${!reverse ? '' : 'flex-row-reverse'}`}>
                <img className={'bg-gray-500 rounded-full mr-2 h-profile w-profile'}></img>
                <div className={`pl-2 pr-2 ${!reverse ? '' : 'text-right'} flex flex-col justify-center`}>
                    <p className={classes?.id || ` text-xs text-gray-300 `}>{id}</p>
                    <p className={classes?.name || `text-xs text-gray-300 `}>{name}</p>
                </div>
            </div>
            {children}
        </div>
    )
}

export default UserProfile
