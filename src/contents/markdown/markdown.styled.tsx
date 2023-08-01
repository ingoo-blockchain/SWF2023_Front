import styled from 'styled-components'
interface MarkDownWrapProps {
    children?: React.ReactNode
    width?: string
    height?: string
    margin?: string
}
export const MarkDownWrapStyled = styled.div<MarkDownWrapProps>`
    padding: 10px;
    min-height: 100vh;
    margin-right: auto;
    padding: 0 40px;
`
