import { useInput } from '@/src/hooks/useInput'
import { Editor } from '@tinymce/tinymce-react'

interface FundInputProps {
    className?: string
    rows?: undefined | number
}

const FundInput: React.FC<FundInputProps> = ({ className = '', rows }) => {
    return (
        <section className={className}>
            <Editor textareaName="content"></Editor>
        </section>
    )
}

export default FundInput
