export interface IAlert {
    message: string
    isOpen: boolean
}

export interface IAlertStore {
    alert: IAlert
    action: {
        setAlert: (alert: IAlert) => void
    }
}
