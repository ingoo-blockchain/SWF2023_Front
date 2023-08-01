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
import PostItem from '@/pages/post/PostCard'
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })
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
    const [activeTab, setActiveTab] = useState('myWrite')
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
                                    // src={user ? `${user?.userImg}` : '/static/images/1.jpg'}
                                    src={'/static/images/1.jpg'}
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
                                    activeTab === 'myWrite' ? 'bg-red-500 dark:bg-gray-600 text-white' : ''
                                }`}
                                onClick={() => handleTabClick('myWrite')}
                            >
                                내가 쓴 글
                            </div>
                            <div
                                className={`text-gray-500 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white rounded-t-lg transition duration-150 ease-in font-medium text-sm text-center w-full py-3 cursor-pointer ${
                                    activeTab === 'myDonation' ? 'bg-red-500 dark:bg-gray-600 text-white ' : ''
                                }`}
                                onClick={() => handleTabClick('myDonation')}
                            >
                                내가 후원한 사람
                            </div>
                        </div>
                    </div>
                    <div className="relative mx-auto ml-6 mr-6 border-t-2 rounded-b-lg shadow dark:bg-gray-600 dark:border-t-2 dark:border-gray-900">
                        {activeTab === 'myWrite' && (
                            <section className="text-gray-600 body-font">
                                <div className="flex flex-wrap -m-4">
                                    <div className="p-4 lg:w-1/3">
                                        <div className="relative h-full px-8 pt-16 pb-24 overflow-hidden text-center bg-gray-100 bg-opacity-75 rounded-lg">
                                            <h2 className="mb-1 text-xs font-medium tracking-widest text-gray-400 title-font">
                                                CATEGORY
                                            </h2>
                                            <h1 className="mb-3 text-xl font-medium text-gray-900 title-font sm:text-2xl">
                                                Raclette Blueberry Nextious Level
                                            </h1>
                                            <p className="mb-3 leading-relaxed">
                                                Photo booth fam kinfolk cold-pressed sriracha leggings jianbing
                                                microdosing tousled waistcoat.
                                            </p>
                                            <a className="inline-flex items-center text-indigo-500">
                                                Learn More
                                                <svg
                                                    className="w-4 h-4 ml-2"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                    stroke-width="2"
                                                    fill="none"
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                >
                                                    <path d="M5 12h14"></path>
                                                    <path d="M12 5l7 7-7 7"></path>
                                                </svg>
                                            </a>
                                            <div className="absolute bottom-0 left-0 flex justify-center w-full py-4 mt-2 leading-none text-center">
                                                <span className="inline-flex items-center py-1 pr-3 mr-3 text-sm leading-none text-gray-400 border-r-2 border-gray-200">
                                                    <svg
                                                        className="w-4 h-4 mr-1"
                                                        stroke="currentColor"
                                                        stroke-width="2"
                                                        fill="none"
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                        viewBox="0 0 24 24"
                                                    >
                                                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                                        <circle cx="12" cy="12" r="3"></circle>
                                                    </svg>
                                                    1.2K
                                                </span>
                                                <span className="inline-flex items-center text-sm leading-none text-gray-400">
                                                    <svg
                                                        className="w-4 h-4 mr-1"
                                                        stroke="currentColor"
                                                        stroke-width="2"
                                                        fill="none"
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                        viewBox="0 0 24 24"
                                                    >
                                                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                                                    </svg>
                                                    6
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="p-4 lg:w-1/3">
                                        <div className="relative h-full px-8 pt-16 pb-24 overflow-hidden text-center bg-gray-100 bg-opacity-75 rounded-lg">
                                            <h2 className="mb-1 text-xs font-medium tracking-widest text-gray-400 title-font">
                                                CATEGORY
                                            </h2>
                                            <h1 className="mb-3 text-xl font-medium text-gray-900 title-font sm:text-2xl">
                                                Ennui Snackwave Thundercats
                                            </h1>
                                            <p className="mb-3 leading-relaxed">
                                                Photo booth fam kinfolk cold-pressed sriracha leggings jianbing
                                                microdosing tousled waistcoat.
                                            </p>
                                            <a className="inline-flex items-center text-indigo-500">
                                                Learn More
                                                <svg
                                                    className="w-4 h-4 ml-2"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                    stroke-width="2"
                                                    fill="none"
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                >
                                                    <path d="M5 12h14"></path>
                                                    <path d="M12 5l7 7-7 7"></path>
                                                </svg>
                                            </a>
                                            <div className="absolute bottom-0 left-0 flex justify-center w-full py-4 mt-2 leading-none text-center">
                                                <span className="inline-flex items-center py-1 pr-3 mr-3 text-sm leading-none text-gray-400 border-r-2 border-gray-200">
                                                    <svg
                                                        className="w-4 h-4 mr-1"
                                                        stroke="currentColor"
                                                        stroke-width="2"
                                                        fill="none"
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                        viewBox="0 0 24 24"
                                                    >
                                                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                                        <circle cx="12" cy="12" r="3"></circle>
                                                    </svg>
                                                    1.2K
                                                </span>
                                                <span className="inline-flex items-center text-sm leading-none text-gray-400">
                                                    <svg
                                                        className="w-4 h-4 mr-1"
                                                        stroke="currentColor"
                                                        stroke-width="2"
                                                        fill="none"
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                        viewBox="0 0 24 24"
                                                    >
                                                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                                                    </svg>
                                                    6
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="p-4 lg:w-1/3">
                                        <div className="relative h-full px-8 pt-16 pb-24 overflow-hidden text-center bg-gray-100 bg-opacity-75 rounded-lg">
                                            <h2 className="mb-1 text-xs font-medium tracking-widest text-gray-400 title-font">
                                                CATEGORY
                                            </h2>
                                            <h1 className="mb-3 text-xl font-medium text-gray-900 title-font sm:text-2xl">
                                                Selvage Poke Waistcoat Godard
                                            </h1>
                                            <p className="mb-3 leading-relaxed">
                                                Photo booth fam kinfolk cold-pressed sriracha leggings jianbing
                                                microdosing tousled waistcoat.
                                            </p>
                                            <a className="inline-flex items-center text-indigo-500">
                                                Learn More
                                                <svg
                                                    className="w-4 h-4 ml-2"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                    stroke-width="2"
                                                    fill="none"
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                >
                                                    <path d="M5 12h14"></path>
                                                    <path d="M12 5l7 7-7 7"></path>
                                                </svg>
                                            </a>
                                            <div className="absolute bottom-0 left-0 flex justify-center w-full py-4 mt-2 leading-none text-center">
                                                <span className="inline-flex items-center py-1 pr-3 mr-3 text-sm leading-none text-gray-400 border-r-2 border-gray-200">
                                                    <svg
                                                        className="w-4 h-4 mr-1"
                                                        stroke="currentColor"
                                                        stroke-width="2"
                                                        fill="none"
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                        viewBox="0 0 24 24"
                                                    >
                                                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                                        <circle cx="12" cy="12" r="3"></circle>
                                                    </svg>
                                                    1.2K
                                                </span>
                                                <span className="inline-flex items-center text-sm leading-none text-gray-400">
                                                    <svg
                                                        className="w-4 h-4 mr-1"
                                                        stroke="currentColor"
                                                        stroke-width="2"
                                                        fill="none"
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                        viewBox="0 0 24 24"
                                                    >
                                                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                                                    </svg>
                                                    6
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        )}
                        {activeTab === 'myDonation' && (
                            <>
                                <div className="relative flex flex-col mx-auto overflow-y-auto bg-white divide-y shadow-lg dark:highlight-white/5 h-72 rounded-xl ring-1 ring-black/5 dark:divide-slate-200/5 dark:bg-slate-800">
                                    <div className="flex items-center gap-4 p-4">
                                        <img className="w-12 h-12 rounded-full" src="/static/images/1.jpg" />
                                        <div className="flex flex-col">
                                            <strong className="text-sm font-medium text-slate-900 dark:text-slate-200">
                                                이순현
                                            </strong>
                                            <span className="text-sm font-medium text-slate-500 dark:text-slate-400">
                                                경일 게임 아카데미
                                            </span>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4 p-4">
                                        <img className="w-12 h-12 rounded-full" src="/static/images/2.jpg" />
                                        <div className="flex flex-col">
                                            <strong className="text-sm font-medium text-slate-900 dark:text-slate-200">
                                                장재원
                                            </strong>
                                            <span className="text-sm font-medium text-slate-500 dark:text-slate-400">
                                                경일 게임 아카데미
                                            </span>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4 p-4">
                                        <img className="w-12 h-12 rounded-full" src="/static/images/3.jpg" />
                                        <div className="flex flex-col">
                                            <strong className="text-sm font-medium text-slate-900 dark:text-slate-200">
                                                황진후
                                            </strong>
                                            <span className="text-sm font-medium text-slate-500 dark:text-slate-400">
                                                네이버
                                            </span>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4 p-4">
                                        <img className="w-12 h-12 rounded-full" src="/static/images/4.jpg" />
                                        <div className="flex flex-col">
                                            <strong className="text-sm font-medium text-slate-900 dark:text-slate-200">
                                                김순현
                                            </strong>
                                            <span className="text-sm font-medium text-slate-500 dark:text-slate-400">
                                                당근마켓
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </>
                        )}
                        {/* {activeTab === 'favorites' && <Favorites collectionData={collectionData} />} */}
                    </div>
                </ProfileCardWrap>
            )}

            <Alert isOpenAlert={isOpenAlert} setIsOpenAlert={setIsOpenAlert} color="green">
                지갑 주소가 복사되었습니다
            </Alert>
        </>
    )
}
