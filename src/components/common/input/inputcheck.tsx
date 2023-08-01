import { Icon } from '@iconify/react'
import React from 'react'

interface InputCheckProps {
    id: string
    isFocused: string
    isDuplicated: boolean
}

export const InputCheck = ({ id, isFocused, isDuplicated }: InputCheckProps) => {
    return id === isFocused ? (
        isDuplicated ? (
            <div className="flex items-center px-2 text-sm text-green-600 transition duration-300 ease-in-out delay-300 dark:text-green-400">
                <Icon icon="icon-park-solid:check-one" className="mr-1 text-md" />
                사용하실 수 있습니다
            </div>
        ) : (
            <div className="flex items-center px-2 text-sm text-red-500 transition duration-300 ease-in-out delay-300">
                <Icon icon="mdi:warning-circle" className="mr-1 text-md" />
                이미 사용중입니다
            </div>
        )
    ) : (
        <>데이터가 없어유</>
    )
}
