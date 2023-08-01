import Card from '@/src/components/card'
import UserProfile from '../profile'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

const FundSlot: React.FC<FundSlotList> = ({ title, content, answered, user_id, hash }) => {
    const [isAnswered, setIsAnswered] = useState<boolean>(false)
    const route = useRouter()
    useEffect(() => {
        setIsAnswered(!!answered)
    }, [answered])

    const onOpenView = (hash: string | undefined) => () => {
        route.push(`/fund/view/${hash}`)
    }

    return (
        <>
            <Card className="hover:bg-gray-100 mb-5">
                <section className="flex p-5 shadow-xl justify-between" onClick={onOpenView(hash)}>
                    <div className={`w-2/3`}>
                        <h3 className="w-full pb-2 font-bold">
                            {isAnswered ? <span className="mr-2 text-red-700">{'[Published]'}</span> : <></>}
                            <span className="text-lg">{title}</span>
                        </h3>
                        <div
                            className={`w-full text-gray-600 font-semibold  text-ellipsis whitespace-nowrap overflow-hidden `}
                        >
                            {content}
                        </div>
                    </div>
                    <div className={`w-fit`}>
                        <UserProfile
                            id={`@${user_id}`}
                            name={`Silver`}
                            direction="none"
                            reverse
                            classes={{ id: '', name: 'font-bold text-black text-lg' }}
                        />
                    </div>
                </section>
            </Card>
        </>
    )
}

export default FundSlot
