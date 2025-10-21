import { BrowserRouter } from 'react-router-dom'
import Router from './router'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import useAuthRedirect from '@/hooks/useAuthRedirect'

const AuthRedirectWrapper = () => {
    useAuthRedirect()
    return null
}

export const App = () => {
    const queryClient = new QueryClient()

    return (
        <QueryClientProvider client={queryClient}>
            <BrowserRouter>
                <AuthRedirectWrapper />
                <Router />
            </BrowserRouter>
        </QueryClientProvider>
    )
}

export default App
