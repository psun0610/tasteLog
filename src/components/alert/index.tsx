import { createPortal } from 'react-dom'
import './styles.scss'
import Button from '../button'
import useFadeOut from '@/hooks/useFadeOut'
import useAlertStore from '@/store/useAlertStore'
import { useShallow } from 'zustand/react/shallow'

const Alert = () => {
    const [alert, setAlert] = useAlertStore(useShallow((state) => [state.alert, state.action.setAlert]))
    const { shouldRender, isFadingOut } = useFadeOut(alert.isOpen)
    if (!shouldRender) return null

    return createPortal(
        <div id="alert" className={isFadingOut ? 'fading-out' : 'fading-in'}>
            <div className="alert-content" onClick={(e) => e.stopPropagation()}>
                <div className="alert-body">{alert.message}</div>
                <div className="alert-footer">
                    <Button text="닫기" color="gray" onClick={() => setAlert({ ...alert, isOpen: false })} />
                </div>
            </div>
        </div>,
        document.getElementById('main-layout')!
    )
}

export default Alert
