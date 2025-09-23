import { createPortal } from 'react-dom'
import './styles.scss'

const Modal = ({ isOpen, onClose, children }: any) => {
    if (!isOpen) return null

    return createPortal(
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                {children}
            </div>
        </div>,
        document.getElementById('main-layout')!
    )
}

export default Modal
