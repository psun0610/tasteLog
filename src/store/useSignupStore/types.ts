import { ISignUpInput } from '@/features/user/types/signUp'

export interface ISignupStore {
    input: ISignUpInput
    action: {
        setInput: (key: string, value: string | boolean) => void
        setProfileImg: (e: React.ChangeEvent<HTMLInputElement>) => void
    }
}
