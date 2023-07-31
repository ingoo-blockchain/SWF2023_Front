import Card from '@/src/components/card'

interface ReviewSlotProps extends StyledProps {
    title: String
}
const ReviewSlot: React.FC<ReviewSlotProps> = ({ title }) => {
    return (
        <Card
            content={
                <>
                    <div className={`flex justify-between pb-10`}>
                        <h3 className="w-full">
                            <span className={`bg-red-700 text-white text-4xl font-semibold`}>Q.</span>
                            <span className={`text-4xl text-black font-semibold`}>{title}</span>
                        </h3>
                        <div className={`w-1/3`}>
                            <span className={`text-2xl`}>{'0.00001 ETH'}</span>
                            <span className={`text-xs text-gray-300`}>{`(약 100,000원)`}</span>
                        </div>
                    </div>
                    <div id="content" className={`flex justify-between `}>
                        {`블록체인 공부 어떻게 하냐고 1000번쨰 질문했다.`}
                    </div>
                </>
            }
        />
    )
}

export default ReviewSlot
