import BaseLayout from '@/src/layout/BaseLayout'
import { FormEvent, ReactElement } from 'react'
import { Editor } from '@tinymce/tinymce-react'
import { styled } from 'styled-components'
import { InputType } from '@/src/utils/InputType'

const EditorWarp = styled.div`
    width: 100%;
    padding: 100px;
    & > .btn-warp {
        display: flex;
        margin: 20px 0;
        justify-content: flex-end;
        & > button {
            font-size: 20px;
            background-color: #ca2828;
            color: #fff;
            border-radius: 8px;
            padding: 6px 12px;
        }
    }
`

interface DaoWriteProps {
    title: HTMLInputElement
    content: HTMLInputElement
}

const Dao = () => {
    const writeHandler = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const {
            title: { value: title },
            content: { value: content },
        } = e.target as unknown as DaoWriteProps

        console.log(title, content)
    }
    return (
        <>
            <form onSubmit={writeHandler}>
                <EditorWarp>
                    <label className="text-4xl font-bold">title</label>
                    <InputType name="title"></InputType>
                    <label className="block mb-6 text-4xl font-bold">content</label>
                    <Editor textareaName="content"></Editor>
                    <div className="btn-warp">
                        <button type="submit">등록</button>
                    </div>
                </EditorWarp>
            </form>
        </>
    )
}
Dao.getLayout = (page: ReactElement) => <BaseLayout>{page}</BaseLayout>

export default Dao
