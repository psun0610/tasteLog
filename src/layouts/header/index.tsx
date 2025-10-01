import { FiArrowLeft } from 'react-icons/fi'
import { useNavigate } from 'react-router-dom'
import './styles.scss'

interface HeaderProps {
    title?: string
    onClick?: () => void
}

const Header = ({ title, onClick }: HeaderProps) => {
    const navigate = useNavigate()
    return (
        <header id="header-layout">
            <FiArrowLeft onClick={() => (onClick ? onClick() : navigate(-1))} />
            {title && <p>{title}</p>}
        </header>
    )
}

export default Header
