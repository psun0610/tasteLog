import classNames from 'classnames'
import { useLocation, useNavigate } from 'react-router-dom'
import './styles.scss'
import { navItems } from './navItems'

const NavBar = () => {
    const location = useLocation()
    const navigate = useNavigate()

    return (
        <nav className="nav-bar">
            <ul>
                {navItems.map((item) => (
                    <li
                        key={item.path}
                        className={classNames({
                            active: item.activePaths.includes(location.pathname),
                        })}
                        onClick={() => navigate(item.path)}
                    >
                        {item.icon}
                        <p>{item.label}</p>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default NavBar
