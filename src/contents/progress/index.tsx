import { Icon } from '@iconify/react/dist/iconify.js'

interface ProgressCircleProps {}
const ProgressCircle: React.FC<ProgressCircleProps> = ({}) => {
    return (
        <article className="absolute h-full w-full top-0 left-0 backdrop-blur-sm flex justify-center items-center z-50 block">
            {/* <svg
                className="w-20 h-20 mr-3 ml-1  text-red-600 animate-spin"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
            >
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
            </svg> */}
            <Icon icon={'fluent-mdl2:progress-ring-dots'} className='animate-spin text-red-500 h-20 w-20'/>
        </article>
    )
}

export default ProgressCircle
