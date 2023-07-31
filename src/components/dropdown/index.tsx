import { ReactNode, useEffect, useRef, useState } from 'react'
import DownArrow from '../icons/DownArrow'
import { MenuContainer, MenuItem, TopMenu } from './dropdown.styled'

interface DropDownMenuProps {
    isOpen: boolean
    close: () => void
    Component: ReactNode
}

interface DropDownProps {
    title: string
    children: ReactNode
}

const DropDownMenu: React.FC<DropDownMenuProps> = ({ isOpen, close, Component }) => {
    const ref = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const handleClose = (e: MouseEvent) => {
            if (ref.current && !ref.current.contains(e.target as HTMLElement)) close()
        }
        document.addEventListener('mousedown', handleClose)
        return () => {
            document.removeEventListener('mousedown', handleClose)
        }
    }, [])

    return (
        <div
            className={`${
                isOpen ? 'block' : 'hidden'
            } absolute w-52 translate-y-[4%] translate-x-[-20%] bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-800 dark:divide-gray-600`}
        >
            {Component}
        </div>
    )
}

const DropDown: React.FC<DropDownProps> = ({ title, children }) => {
    const [isOpenMenu, setIsOpenMenu] = useState<boolean>(false)

    return (
        <div className="relative z-10">
            <button
                onClick={() => setIsOpenMenu((prev) => !prev)}
                className=" flex items-center text-sm font-medium text-white rounded-full hover:text-green-600 dark:hover:text-green-300 dark:text-white hover:dark:bg-gray-700 py-1.5 px-1 transition duration-150"
            >
                {/* <img className="w-8 h-8 mr-2 ml-1 rounded-full" src={} /> */}
                {title}
                <DownArrow />
            </button>
            <DropDownMenu isOpen={isOpenMenu} close={() => setIsOpenMenu(false)} Component={children} />
        </div>
    )
}

export default DropDown
