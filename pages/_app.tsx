import '../styles/globals.css'
import { NextPage } from 'next'
import { SessionProvider } from 'next-auth/react'
import { ThemeProvider } from 'next-themes'
import type { AppProps } from 'next/app'
import { ReactElement, ReactNode } from 'react'
import { WagmiConfig } from 'wagmi'
import { config } from '../wagmi-config'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ToastContainer } from 'react-toastify'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

type NextPageWithLayout = NextPage & {
    getLayout?: (page: ReactElement) => ReactNode
}

interface ReviewAppProps extends AppProps {}

const App: React.FC<ReviewAppProps> = ({ Component, pageProps }) => {
    const queryClient = new QueryClient()
    const getLayout = (Component as unknown as NextPageWithLayout).getLayout ?? ((page) => page)

    return (
        <ThemeProvider attribute="class">
            <WagmiConfig config={config}>
                <QueryClientProvider client={queryClient}>
                    <ToastContainer
                        position="top-left"
                        autoClose={4000}
                        hideProgressBar={false}
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover
                        theme="light"
                    />
                    {getLayout(<Component {...pageProps} />)}
                    <ReactQueryDevtools initialIsOpen={false} />
                </QueryClientProvider>
            </WagmiConfig>
        </ThemeProvider>
    )
}

export default App
