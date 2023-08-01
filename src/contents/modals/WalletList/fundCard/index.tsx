import Card from '@/src/components/card'
import UserProfile from '../profile'
import { Icon } from '@iconify/react/dist/iconify.js'
import { useEffect, useState } from 'react'
import { useContract } from '@/src/hooks/ethers'
import request from '@/src/utils/request'
interface FundCardProps {
    info: FundSlotList
    // title: string
    // content: string
}

const FundCard: React.FC<FundCardProps> = ({ info }) => {
    const [animate, setAnimate] = useState<string>('')
    const [clicked, setClicked] = useState<string | null>(null)
    const onVote = async (type: string) => {
        const { governor } = useContract()
        if (!clicked) {
            setClicked(type)
            setAnimate('animate-tada')
            await request.get('/')
        }
    }

    useEffect(() => {
        if (clicked)
            setTimeout(() => {
                setAnimate('')
            }, 500)
    }, [clicked])

    return (
        <Card className="relative h-full mb-0">
            <>
                <div className={`w-full flex flex-col p-5 h-1/10 `}>
                    {/* <div className='bg-gray-200 flex-1'>

                    </div> */}
                    <div className={`flex justify-between h-fit `}>
                        <h3 className="w-2/3 h-4/5">
                            <span className={`text-3xl text-black font-semibold`}>{info.title}</span>
                        </h3>
                        <div className={`w-1/3 text-right h-full`}>
                            <span className={`text-2xl`}>{'0.00001 ETH'}</span>
                            <span className={`text-xs text-gray-300`}>{`(약 100,000원)`}</span>
                        </div>
                    </div>
                </div>
                <div id="content" className={`w-full grow overflow-auto-y p-5 h-4/5`}>
                    <div className="h-full overflow-y-auto  scrollbar-hide">{info.content}</div>
                </div>
                {/* <div className="w-full content-end"> */}
                <div className="w-full content-end  bottom-0 absolute bg-white border-t h-1/10">
                    <UserProfile
                        id="djWJrn@web7722"
                        name="adlkfa"
                        direction="none"
                        reverse
                        imgPath={info.thumbnail}
                        children={
                            <div className="w-fit flex items-center">
                                {/* <Icon icon="bx:upvote" className={`text-gray-500 w-10 h-10 m-2`} /> */}
                                <Icon
                                    icon={`bx${clicked === 'y' ? 's' : ''}:upvote`}
                                    className={`text-${clicked === 'y' ? 'red' : 'gray'}-500 w-10 h-10 m-2 ${
                                        clicked === 'y' && animate
                                    }`}
                                    onClick={() => onVote('y')}
                                />
                                <span className={`text-${clicked === 'y' ? 'red' : 'gray'}-500 text-xl font-semibold`}>
                                    0
                                </span>
                                <Icon
                                    icon={`bx${clicked === 'n' ? 's' : ''}:downvote`}
                                    className={`text-${clicked === 'n' ? 'red' : 'gray'}-500 w-10 h-10 m-2 ${
                                        clicked === 'n' && animate
                                    }`}
                                    onClick={() => onVote('n')}
                                />
                                <span className={`text-${clicked === 'n' ? 'red' : 'gray'}-500 text-xl font-semibold`}>
                                    0
                                </span>
                            </div>
                        }
                    />
                </div>
            </>
        </Card>
    )
}

export default FundCard
