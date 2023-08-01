import Card from '@/src/components/card'
import UserProfile from '../profile'
import { Icon } from '@iconify/react/dist/iconify.js'
import { useEffect, useState } from 'react'

interface FundCardProps {
    info: FundSlotList
    // title: string
    // content: string
}
const FundCard: React.FC<FundCardProps> = ({ info }) => {
    const [animate, setAnimate] = useState<string>('')
    const [clicked, setClicked] = useState<string | null>(null)
    const onVote = (type: string) => {
        if (!clicked) {
            setClicked(type)
            setAnimate('animate-tada')
        }
    }

    useEffect(() => {
        if (clicked)
            setTimeout(() => {
                setAnimate('')
            }, 500)
    }, [clicked])

    return (
        <Card>
            <>
                <div className={`w-full flex flex-col min-h-fit p-5`}>
                    <div className={`flex justify-between pb-10`}>
                        <h3 className="w-full">
                            {/* <span className={`bg-red-700 text-white text-4xl font-semibold mr-3 p-1`}>Q.</span> */}
                            <span className={`text-4xl text-black font-semibold`}>{info.title}</span>
                        </h3>
                        <div className={`w-1/3 text-right`}>
                            <span className={`text-2xl`}>{'0.00001 ETH'}</span>
                            <span className={`text-xs text-gray-300`}>{`(약 100,000원)`}</span>
                        </div>
                    </div>
                    <div id="content" className={`flex justify-between `}>
                        {info.content}
                    </div>
                </div>
                <div className="w-full content-end">
                    <UserProfile
                        id="djWJrn@web7722"
                        name="adlkfa"
                        direction="t"
                        reverse
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
                                <span className={`text-${clicked === 'y' ? 'red' : 'gray'}-500 text-xl font-semibold`}>0</span>
                                <Icon
                                    icon={`bx${clicked === 'n' ? 's' : ''}:downvote`}
                                    className={`text-${clicked === 'n' ? 'red' : 'gray'}-500 w-10 h-10 m-2 ${
                                        clicked === 'n' && animate
                                    }`}
                                    onClick={() => onVote('n')}
                                />
                                <span className={`text-${clicked === 'n' ? 'red' : 'gray'}-500 text-xl font-semibold`}>0</span>
                            </div>
                        }
                    />
                </div>
            </>
        </Card>
    )
}

export default FundCard
