import { Button } from '@/src/components/common/button/'
import { useState } from 'react'
import LoadingSpinner from '@/src/components/loading/LoadingSpinner'
import { InputBox } from '@/src/components/common/input'
import { LaunchPadWrapper, FormContainer, SectionTitle, Label } from './launchpad.styled'
import { useInput } from '@/src/hooks/useInput'
import request from '@/src/utils/request'
import { Alert } from '@/src/components/common/alert'
import { toast } from 'react-toastify'
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })
export const Login = () => {
    const success = () => toast.success('userLogin Complete !')
    const [isLoading, setIsLoading] = useState(false)
    const [isOpenAlert, setIsOpenAlert] = useState(false)
    const userName = useInput('')
    const userPassword = useInput('')

    // const handleInputChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    // }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        try {
            success()
        } catch (e) {
            alert(e)
        }
    }

    return (
        <>
            <LaunchPadWrapper>
                <FormContainer onSubmit={handleSubmit}>
                    <SectionTitle>로그인</SectionTitle>
                    <Label htmlFor="name">유저 이름</Label>
                    <InputBox
                        value={userName.value}
                        onChange={userName.onChange}
                        // onInput={handleInputChange}
                        name="name"
                        // icon="mdi:collection"
                    />
                    <Label htmlFor="password">비밀번호</Label>
                    <InputBox
                        value={userName.value}
                        onChange={userName.onChange}
                        // onInput={handleInputChange}
                        name="password"
                        type="password"
                        // icon="mdi:collection"
                    />
                    <Label htmlFor="url">유저 이름</Label>
                    <InputBox
                        value={userPassword.value}
                        onChange={userPassword.onChange}
                        // onInput={handleInputChange}
                        name="url"
                        // icon="mdi:web"
                    />
                    {isLoading ? (
                        <Button type="submit" color="blue" disabled>
                            <LoadingSpinner /> uploading...
                        </Button>
                    ) : (
                        <Button type="submit" color="blue">
                            로그인허기
                        </Button>
                    )}
                </FormContainer>
            </LaunchPadWrapper>
            <Alert isOpenAlert={isOpenAlert} setIsOpenAlert={setIsOpenAlert} color="green">
                로그인되었습니다.
            </Alert>
        </>
    )
}
