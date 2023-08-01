import { Button } from '@/src/components/common/button/'
import { useState } from 'react'
import { CheckBox } from '@/src/components/common/checkbox/'
import LoadingSpinner from '@/src/components/loading/LoadingSpinner'
import { InputBox } from '@/src/components/common/input'
import { FileInputBox } from '@/src/components/common/input/fileinputbox'
import { TextArea } from '@/src/components/common/input/textarea'
import { InputCheck } from '@/src/components/common/input/inputcheck'
import { LaunchPadWrapper, FormContainer, SectionTitle, Label } from './launchpad.styled'
import { useInput } from '@/src/hooks/useInput'
import request from '@/src/utils/request'
import { Alert } from '@/src/components/common/alert'
import { toast } from 'react-toastify'
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })
export const Modify = () => {
    // const [creatorFee, setCreatorFee] = useState('0%')
    // const [isDuplicated, setIsDuplicated] = useState(false)
    // const [isFocused, setIsFocused] = useState('')

    // const handleCheckBox = (option: string) => {
    //     setCreatorFee(option)
    // }

    const success = () => toast.success('Collection creation completed !')

    const [collectionLogo, setCollectionLogo] = useState('')

    const [isLoading, setIsLoading] = useState(false)
    const [isOpenAlert, setIsOpenAlert] = useState(false)

    const userName = useInput('')
    const userPassword = useInput('')
    const collectionDescription = useInput('')

    // const handleInputChange = async (e: React.ChangeEvent<HTMLInputElement>) => {

    // }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        try {
            // 성공 했을 때 토스트 모달 나타나는 값
            success()
            // }
        } catch (e) {
            alert(e)
        }
    }

    return (
        <>
            <LaunchPadWrapper>
                <FormContainer onSubmit={handleSubmit}>
                    <SectionTitle>회원수정</SectionTitle>
                    <Label htmlFor="name">유저 이름</Label>
                    <InputBox
                        value={userName.value}
                        onChange={userName.onChange}
                        // onInput={handleInputChange}
                        name="name"
                        icon="mdi:collection"
                    />
                    <Label htmlFor="url">유저 베스퉈드</Label>
                    <InputBox
                        value={userPassword.value}
                        onChange={userPassword.onChange}
                        // onInput={handleInputChange}
                        name="url"
                        icon="mdi:web"
                    />
                    <Label htmlFor="description">나를 꾸며보세요</Label>
                    <TextArea
                        value={collectionDescription.value}
                        onChange={collectionDescription.onChange}
                        id="description"
                    />

                    {isLoading ? (
                        <Button type="submit" color="blue" disabled>
                            <LoadingSpinner /> uploading...
                        </Button>
                    ) : (
                        <Button type="submit" color="blue">
                            수정하기
                        </Button>
                    )}
                </FormContainer>
            </LaunchPadWrapper>
            <Alert isOpenAlert={isOpenAlert} setIsOpenAlert={setIsOpenAlert} color="green">
                수정되었습니다.
            </Alert>
        </>
    )
}
