import { defaultInput } from '@/features/user/components/signUpForm/const'
import { create } from 'zustand'
import { immer } from 'zustand/middleware/immer'
import { ISignupStore } from './types'

const useSignupStore = create<ISignupStore>()(
    immer((set) => ({
        input: defaultInput,
        action: {
            setInput: (key: string, value: string | boolean) => {
                set((state) => {
                    state.input[key] = value as never
                })
            },
            setProfileImg: (e: React.ChangeEvent<HTMLInputElement>) => {
                e.preventDefault()
                set((state) => {
                    state.input.profileImg = e.target.files[0]
                })
            },
        },
    }))
)

export default useSignupStore
