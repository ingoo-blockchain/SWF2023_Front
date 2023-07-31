import Image from 'next/image'
import { UserType } from '@/src/utils/UserType/user.interface'
import { ProfileCardWrap, UserAddress } from './styled/Profile.styled'
import { Icon } from '@iconify/react'
import { Button } from '@/src/components/common/button'
import { useState } from 'react'
import { useInput } from '@/src/hooks/useInput'
import { InputBox } from '@/src/components/common/input'
import { FileInputCircle } from '@/src/components/common/input/fileinputcircle'
import { Alert } from '@/src/components/common/alert'
import { useSign } from '@/src/hooks/useSign'
// import { MyNFT, Activity, Favorites } from './index'

// interface ProfileProps {
//     user: UserType | null
//     tokenData: TokenData[]
//     activity: ActivityData[]
//     collectionData: CollectionData[]
// }

export const ProfileCard = () => {
    const [isOpenAlert, setIsOpenAlert] = useState(false)
    const [modify, setModify] = useState(false)
    const [userImg, setUserImg] = useState<string>('')
    const [activeTab, setActiveTab] = useState('nfts')
    const { user, isLoading, isConnected } = useSign()
    const [days, setDays] = useState<number>(0)
    const [hours, setHours] = useState<number>(0)
    const [minutes, setMinutes] = useState<number>(0)
    const [seconds, setSeconds] = useState<number>(0)

    console.log(user, isLoading, isConnected)

    const handleTabClick = (tab: string) => {
        setActiveTab(tab)
    }

    const handleUpdate = async () => {
        setModify((prevState) => !prevState)

        // if (modify) {
        //     const res = await request.put('auth/update', {
        //         address: user!.address,
        //         name: username.value,
        //         userImg: userImg,
        //     })
        //     if (res.status === 200) {
        //         window.location.reload()
        //     }
        // }
    }

    const handleCopy = () => {
        navigator.clipboard.writeText(user!.address)
        setIsOpenAlert(true)
    }

    if (!user) return <></>
    return (
        <>
            {user && (
                <ProfileCardWrap>
                    <div className="absolute top-5 right-5 w-28">
                        <Button
                            {...(!modify ? { color: 'blue' } : { color: 'green' })}
                            fontSize="sm"
                            onClick={handleUpdate}
                        >
                            <Icon icon="bxs:edit" className="mr-1 text-lg" />
                            {!modify ? 'Edit' : 'Confirm'}
                        </Button>
                    </div>
                    <div className="flex justify-center">
                        <div className="absolute w-32 h-32 mx-auto transition duration-200 transform border-4 border-white rounded-full shadow-md -top-20 hover:scale-110">
                            {!modify ? (
                                <Image
                                    src={user ? `${user?.userImg}` : '/static/images/1.jpg'}
                                    alt="user"
                                    width={200}
                                    height={200}
                                    className="w-full h-full rounded-full"
                                />
                            ) : (
                                <FileInputCircle state={userImg} setState={setUserImg} />
                            )}
                        </div>
                    </div>
                    <div className="mt-16">
                        {!modify ? (
                            <h1 className="text-3xl font-bold text-center">{user?.name}</h1>
                        ) : (
                            <div className="flex items-center justify-center">
                                <InputBox value={user?.name} fontSize="xl" />
                            </div>
                        )}

                        <div className="px-6 my-5">
                            <UserAddress onClick={handleCopy}>
                                {user!.address.slice(0, 6) + '...' + user!.address.slice(-4)}
                                <Icon icon="bxs:copy" className="ml-1" />
                            </UserAddress>
                        </div>
                        <div className="flex items-center justify-between px-6 ">
                            <div
                                className={`text-gray-500 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white rounded-t-lg transition duration-150 ease-in font-medium text-sm text-center w-full py-3 cursor-pointer ${
                                    activeTab === 'nfts' ? 'bg-red-500 dark:bg-gray-600 text-white' : ''
                                }`}
                                onClick={() => handleTabClick('nfts')}
                            >
                                첫 번째 탭
                            </div>
                            <div
                                className={`text-gray-500 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white rounded-t-lg transition duration-150 ease-in font-medium text-sm text-center w-full py-3 cursor-pointer ${
                                    activeTab === 'activity' ? 'bg-red-500 dark:bg-gray-600 text-white ' : ''
                                }`}
                                onClick={() => handleTabClick('activity')}
                            >
                                두 번째 탭
                            </div>
                            <div
                                className={`text-gray-500 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white rounded-t-lg transition duration-150 ease-in font-medium text-sm text-center w-full py-3 cursor-pointer ${
                                    activeTab === 'favorites' ? 'bg-red-500 dark:bg-gray-600 text-white ' : ''
                                }`}
                                onClick={() => handleTabClick('favorites')}
                            >
                                세 번째 탭
                            </div>
                        </div>
                    </div>
                    <div className="mx-auto ml-6 mr-6 border-t-2 rounded-b-lg shadow dark:bg-gray-600 dark:border-t-2 dark:border-gray-900">
                        {/* {activeTab === 'nfts' && <MyNFT tokenData={tokenData} activity={activity} />}
                        {activeTab === 'activity' && <Activity activity={activity} />}
                        {activeTab === 'favorites' && <Favorites collectionData={collectionData} />} */}
                    </div>
                </ProfileCardWrap>
            )}

            <Alert isOpenAlert={isOpenAlert} setIsOpenAlert={setIsOpenAlert} color="green">
                지갑 주소가 복사되었습니다
            </Alert>
        </>
    )
}
