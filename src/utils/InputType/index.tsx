import { ChangeEvent, useState } from 'react'
import { styled } from 'styled-components'

const InputWarp = styled.div`
    width: 100%;
    & > input {
        width: 100%;
        border-radius: 8px;
        border: 1px solid #efefef;
        height: 50px;
        padding: 8px 16px;
        margin: 25px 0;
        font-size: 24px;
        font-weight: bold;
        box-shadow: 0 2px 13px -12px;
    }
`
interface InputProps {
    value?: string
    name: string
}

export const InputType = ({ value = '', name }: InputProps) => {
    const [_value, setValue] = useState(value)
    const ChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value)
    }
    return (
        <InputWarp>
            <input name={name} type="text" value={_value} onChange={ChangeHandler} />
        </InputWarp>
    )
}
