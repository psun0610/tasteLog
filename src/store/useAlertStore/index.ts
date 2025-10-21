import { create } from 'zustand'
import { IAlert, IAlertStore } from './types'
import { immer } from 'zustand/middleware/immer'

const useAlertStore = create<IAlertStore>()(
    immer((set) => ({
        alert: {
            message: '',
            isOpen: false,
        },
        action: {
            setAlert: (alert: IAlert) => set({ alert }),
        },
    }))
)

export default useAlertStore
