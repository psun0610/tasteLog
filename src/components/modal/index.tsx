import { createPortal } from 'react-dom'
import './styles.scss'
import Button from '../button'
import useFadeOut from '@/hooks/useFadeOut'

interface ModalProps {
    isOpen: boolean
    onClose: () => void
    children: React.ReactNode
    buttonRender?: () => React.ReactNode
    hasCloseButton?: boolean
}

const Modal = ({ isOpen, onClose, children, buttonRender, hasCloseButton = false }: ModalProps) => {
    const { shouldRender, isFadingOut } = useFadeOut(isOpen)
    if (!shouldRender) return null

    return createPortal(
        <div id="modal" onClick={onClose} className={isFadingOut ? 'fading-out' : ''}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <div className="modal-body">{children}</div>
                <div className="modal-footer">
                    {buttonRender && buttonRender()}
                    {hasCloseButton && <Button text="닫기" color="gray" onClick={onClose} />}
                </div>
            </div>
        </div>,
        document.getElementById('main-layout')!
    )
}

export default Modal
