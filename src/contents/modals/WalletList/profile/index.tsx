interface Classes {
    id: string
    name: string
}

interface UserProfileProps {
    name: string
    id: string
    direction: 't' | 'b' | 'none'
    src?: string
    classes?: Classes
}

const UserProfile: React.FC<UserProfileProps> = ({ name, id, direction = 'b', classes }) => {
    return (
        <div className={`flex justify-end items-center p-3 ${direction === 'none' ? '' : `border-${direction}`}`}>
            <img className={'bg-gray-500 rounded-full w-9 h-9 mr-2'}></img>
            <div>
                <p className={`text-xs text-gray-300 ${classes?.id}`}>{id}</p>
                <p className={`text-xs text-gray-300 ${classes?.name}`}>{name}</p>
            </div>
        </div>
    )
}

export default UserProfile
