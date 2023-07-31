import Card from '@/src/components/card'
import UserProfile from '../profile'
import { useEffect, useState } from 'react'

const FundSlot: React.FC<FundSlotList> = ({ title, content, answered }) => {
    const [isAnswered, setIsAnswered] = useState<boolean>(false)

    useEffect(() => {
        // setIsAnswered((prev) => answered)
    }, [answered])
    return (
        <>
            {isAnswered && (
                <Card>
                    <section className="flex p-5 shadow-xl">
                        <div className={`w-2/3`}>
                            <h3 className="w-full pb-2 font-bold">
                                {isAnswered ? <span className="mr-2 text-purple-700">{'[답변완료]'}</span> : <></>}
                                <span className="text-lg">{title}</span>
                            </h3>
                            <div
                                className={`w-full text-gray-600 font-semibold  text-ellipsis whitespace-nowrap overflow-hidden`}
                            >
                                {content}
                            </div>
                        </div>
                        <div className={`flex-1`}>
                            <UserProfile id="dsadkf" name="name" direction="none" />
                        </div>
                    </section>
                </Card>
            )}
        </>
    )
}

export default FundSlot
