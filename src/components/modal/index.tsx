import { useEffect, useRef } from 'react'
import tw from 'tailwind-styled-components'
import { Icon } from '@iconify/react'

interface ModalProps extends StyledProps {
    isOpenModal: boolean
    setIsOpenModal: React.Dispatch<React.SetStateAction<boolean>>
}

export const ModalWrapper = tw.div`fixed z-40 top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50`
export const ModalContent = tw.div<StyledProps>`relative rounded-lg shadow bg-white dark:bg-gray-700 p-3 max-h-9/10 overflow-y-scrol`

const Modal: React.FC<ModalProps> = ({ isOpenModal, setIsOpenModal, children, width, height }) => {
    const ref = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const handleClose = (e: MouseEvent) => {
            if (ref.current && !ref.current.contains(e.target as HTMLElement)) {
                setIsOpenModal(false)
            }
        }
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.keyCode === 27) {
                setIsOpenModal(false)
            }
        }

        document.addEventListener('mousedown', handleClose)
        document.addEventListener('keydown', handleKeyDown)

        return () => {
            document.removeEventListener('mousedown', handleClose)
            document.removeEventListener('keydown', handleKeyDown)
        }
    }, [])

    return (
        <ModalWrapper className={`${isOpenModal ? '' : 'hidden'}`}>
            <ModalContent ref={ref} width={width} height={height}>
                <Icon icon="ph:x" onClick={() => setIsOpenModal(false)} className="ml-auto text-xl cursor-pointer" />
                {children}
            </ModalContent>
        </ModalWrapper>
    )
}

export default Modal
