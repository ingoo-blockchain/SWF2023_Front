import LoadingSpinner from './LoadingSpinner'

interface WithLoadingProps {
    isLoading: boolean
}

const withLoading =
    <P extends object>(Component: React.ComponentType<P>): React.FC<P & WithLoadingProps> =>
    ({ isLoading, ...props }: WithLoadingProps) =>
        isLoading ? <LoadingSpinner /> : <Component {...(props as P)} />

export default withLoading
