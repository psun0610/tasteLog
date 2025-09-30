import { FiArrowLeft } from 'react-icons/fi'
import { useNavigate } from 'react-router-dom'
import './styles.scss'

const Header = ({ title }: { title?: string }) => {
    const navigate = useNavigate()
    return (
        <header id="header-layout">
            <FiArrowLeft onClick={() => navigate(-1)} />
            {title && <p>{title}</p>}
        </header>
    )
}

export default Header
