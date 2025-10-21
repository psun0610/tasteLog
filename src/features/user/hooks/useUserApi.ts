import { useMutation } from '@tanstack/react-query'
import signUp from '../apis/signUp'
import signIn from '../apis/login'

const useUserApi = {
    signUp: ({ onSuccess, onError }: { onSuccess: (res: unknown) => void; onError: (err: unknown) => void }) =>
        useMutation({
            mutationFn: signUp,
            onSuccess,
            onError,
        }),
    signIn: ({ onSuccess, onError }: { onSuccess: (res: unknown) => void; onError: (err: unknown) => void }) =>
        useMutation({
            mutationFn: signIn,
            onSuccess,
            onError,
        }),
}

export default useUserApi
