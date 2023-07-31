interface UserProfileProps {
    name: string
    id: string
    direction: 't' | 'b'
    src?: string
}

const UserProfile: React.FC<UserProfileProps> = ({ name, id, direction = 'b' }) => {
    return (
        <>
            <div className={`flex justify-end items-center border-${direction} p-3`}>
                <img className={'bg-gray-500 rounded-full w-9 h-9 mr-2'}></img>
                <div>
                    <p className={`text-xs text-gray-300`}>{id}</p>
                    <p className={`text-xs text-gray-300`}>{name}</p>
                </div>
            </div>
        </>
    )
}

export default UserProfile
