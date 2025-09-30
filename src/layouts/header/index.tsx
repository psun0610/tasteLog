import { FiArrowLeft } from 'react-icons/fi'
import { useNavigate } from 'react-router-dom'
import './styles.scss'

const Header = () => {
    const navigate = useNavigate()
    return (
        <header id="header-layout">
            <FiArrowLeft onClick={() => navigate(-1)} />
        </header>
    )
}

export default Header
