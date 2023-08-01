import Card from '@/src/components/card'
import { Button } from '@/src/components/common/button'
import { useEffect, useState } from 'react'
import FundInput from '../fundArea'
import UserProfile from '../profile'

interface AnswerCardProps {}

const AnswerCard: React.FC<AnswerCardProps> = ({}) => {
    const [isWriteMode, setIsWriteMode] = useState<boolean>(false)
    const [direction, setDirection] = useState<'none' | 'b'>('none')

    useEffect(() => {
        setDirection(isWriteMode ? 'b' : 'none')
    }, [isWriteMode])

    return (
        <Card>
            <>
                <div className="flex justify-between">
                    <div className="w-full">
                        <UserProfile
                            id="djWJrn@web7722"
                            name="adlkfa"
                            direction={direction}
                            children={
                                <Button
                                    color="red"
                                    size="w-fit"
                                    style="pr-5 pl-5 pt-2 pb-2"
                                    fontSize="sm"
                                    onClick={() => {
                                        setIsWriteMode((prev: boolean) => !prev)
                                    }}
                                >
                                    {!isWriteMode ? 'Write' : 'Save'}
                                </Button>
                            }
                        />
                    </div>
                    {/* <div className="pt-3 pb-3"></div> */}
                </div>
                {isWriteMode && (
                    <div className="p-5">
                        <FundInput />
                    </div>
                )}
            </>
        </Card>
    )
}

export default AnswerCard
