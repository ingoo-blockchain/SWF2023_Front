import Card from '@/src/components/card'
import UserProfile from '../profile'
import FundInput from '../fundInput'

interface AnswerCardProps {
    // title: string
    // content: string
    // eth: string
    // price: string | number
}

const AnswerCard: React.FC<AnswerCardProps> = ({ }) => {
    return (
        <Card>
            <>
                <UserProfile id="djWJrn@web7722" name="adlkfa" direction="b" />
                <div className={`w-full flex flex-col min-h-fit p-5`}>
                    <div className={`flex justify-between pb-10`}></div>
                </div>
                <FundInput />
            </>
        </Card>
    )
}

export default AnswerCard
