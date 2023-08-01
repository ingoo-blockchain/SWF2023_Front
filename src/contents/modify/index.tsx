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
    const success = () => toast.success('Collection creation completed !')

    const [collectionLogo, setCollectionLogo] = useState('')
    const [creatorFee, setCreatorFee] = useState('0%')
    const [isDuplicated, setIsDuplicated] = useState(false)
    const [isFocused, setIsFocused] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const [isOpenAlert, setIsOpenAlert] = useState(false)

    const collectionName = useInput('')
    const collectionUrl = useInput('')
    const collectionDescription = useInput('')

    const handleCheckBox = (option: string) => {
        setCreatorFee(option)
    }

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
                        value={collectionName.value}
                        // onChange={collectionName.onChange}
                        // onInput={handleInputChange}
                        name="name"
                        icon="mdi:collection"
                        placeholder="이름을 정해주세요"
                    />

                    <InputCheck id="symbol" isFocused={isFocused} isDuplicated={isDuplicated} />
                    <Label htmlFor="description">유저 설명</Label>
                    <TextArea
                        value={collectionDescription.value}
                        onChange={collectionDescription.onChange}
                        id="description"
                        placeholder="당신을 소개해 주세요"
                    />
                    <Label htmlFor="url">Collection URL</Label>
                    <InputBox
                        value={collectionUrl.value}
                        onChange={collectionUrl.onChange}
                        // onInput={handleInputChange}
                        name="url"
                        icon="mdi:web"
                        placeholder="URL에는 소문자, 숫자, 하이픈(-)만 사용할 수 있습니다"
                    />
                    <InputCheck id="url" isFocused={isFocused} isDuplicated={isDuplicated} />
                    <Label htmlFor="creatorFee">Creator Royalty</Label>
                    <CheckBox options={['0%', '2.5%', '5%']} onChange={handleCheckBox} selectedOption={creatorFee} />
                    <Label htmlFor="logo">Thumbnail</Label>

                    <FileInputBox state={collectionLogo} setState={setCollectionLogo} />
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
