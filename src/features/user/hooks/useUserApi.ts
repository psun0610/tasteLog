import { useMutation } from '@tanstack/react-query'
import signUp from '../apis/signUp'
import { logOut } from '../apis/logout'
import logIn from '../apis/login'

const useUserApi = {
    signUp: ({ onSuccess, onError }: { onSuccess: (res: unknown) => void; onError: (err: unknown) => void }) =>
        useMutation({
            mutationFn: signUp,
            onSuccess,
            onError,
        }),
    signIn: ({ onSuccess, onError }: { onSuccess: (res: unknown) => void; onError: (err: unknown) => void }) =>
        useMutation({
            mutationFn: logIn,
            onSuccess,
            onError,
        }),
    signOut: ({ onSuccess, onError }: { onSuccess: (res: unknown) => void; onError: (err: unknown) => void }) =>
        useMutation({
            mutationFn: logOut,
            onSuccess,
            onError,
        }),
}

export default useUserApi
