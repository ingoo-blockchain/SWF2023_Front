import Link from 'next/link'
import { styled } from 'styled-components'

interface LinkProps {
    to: string
    children?: React.ReactNode
}

const LinkTypeWarp = styled.div`
    color: black;
`

export const LinkType = ({ to, children }: LinkProps) => {
    return (
        <LinkTypeWarp>
            <Link href={to}>{children}</Link>
        </LinkTypeWarp>
    )
}
