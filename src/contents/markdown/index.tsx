import React, { useEffect, useState } from 'react'
import ReactMarkdown from 'react-markdown'
import gfm from 'remark-gfm'
import styles from '../../../styles/Common.module.css'
import { MarkDownWrapStyled } from './markdown.styled'
import rehypeRaw from 'rehype-raw'
import styled from 'styled-components'

const Mardownwrapper = styled.div`
    padding: 27px;
`

interface MarkdownProps {
    source: string
    type?: string
}

const MarkdownPreview: React.FC<MarkdownProps> = ({ source }) => {
    return (
        <ReactMarkdown
            rehypePlugins={[rehypeRaw, gfm]}
            children={source}
            className={styles.preview}
            skipHtml={false}
            components={{
                h1: ({ children }: any) => <h1 className="tabs">{children}</h1>,
                h2: ({ children }: any) => {
                    try {
                        const id = (children as any)[0].replaceAll(' ', '')
                        return (
                            <h2 className="tabs" id={id}>
                                {children}
                            </h2>
                        )
                    } catch (e) {
                        return <h2 className="tabs">{children}</h2>
                    }
                },
                h3: ({ children }: any) => <h3 className="tabs">{children}</h3>,
                details: ({ children }: any) => <details className="tabs">{children}</details>,
            }}
        ></ReactMarkdown>
    )
}

export const MarkDown: React.FC<MarkdownProps> = ({ source, type = 'default' }) => {
    useEffect(() => {
        //document.querySelector("")
    }, [])

    if (type !== 'default')
        return (
            <Mardownwrapper>
                <MarkdownPreview source={source} />
            </Mardownwrapper>
        )
    return (
        <MarkDownWrapStyled>
            <MarkdownPreview source={source} />
        </MarkDownWrapStyled>
    )
}
