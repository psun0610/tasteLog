import { ISignUpInput } from '@/features/signup/types/signUpInputs'

export interface ISignupStore {
    input: ISignUpInput
    action: {
        setInput: (key: string, value: string | boolean) => void
    }
}
