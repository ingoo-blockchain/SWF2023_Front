export const htmlToText = (html: string) => {
    const elem = document.createElement('div')
    elem.innerHTML = html

    const paragraphs = Array.from(elem.getElementsByTagName('p'))

    return paragraphs
        .map((paragraph) => {
            const lines = Array.from(paragraph.childNodes)
                .map((node) => {
                    if (node.nodeType === Node.TEXT_NODE) {
                        return node.textContent
                    }
                })
                .filter((line) => line !== undefined && line !== null)

            return lines.join('\n')
        })
        .join('\n\n')
}
