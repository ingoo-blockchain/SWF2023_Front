import Card from '@/src/components/card'
import UserProfile from '../profile'

interface FundCardProps {
    info: FundSlotList
    // title: string
    // content: string
}
const FundCard: React.FC<FundCardProps> = ({ info }) => {
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
                    <UserProfile id="djWJrn@web7722" name="adlkfa" direction="t" reverse />
                </div>
            </>
        </Card>
    )
}

export default FundCard
