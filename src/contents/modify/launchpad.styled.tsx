import tw from 'tailwind-styled-components'

export const LaunchPadWrapper = tw.div`
    bg-white dark:bg-gray-800 relative shadow-md rounded-lg w-5/6 md:w-5/6 lg:w-4/6 xl:w-3/6 mx-auto mt-16 p-10
`

export const FormContainer = tw.form`
    space-y-3
`

export const SectionTitle = tw.h3`
    mb-4 text-xl font-medium text-gray-900 dark:text-white text-center 
`

export const Label = tw.label`
    block text-md font-medium text-gray-900 dark:text-white pt-3 pl-1
`
