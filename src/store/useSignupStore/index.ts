import { defaultInput } from '@/features/signup/components/signUpInputs/const'
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
        },
    }))
)

export default useSignupStore
