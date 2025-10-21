import { useMutation } from '@tanstack/react-query'
import signUp from '../apis/signUp'

export const useSignUpApi = ({ onSuccess }: { onSuccess: (res: unknown) => void }) => {
    return useMutation({
        mutationFn: signUp,
        onSuccess: (res) => onSuccess(res),
    })
}
