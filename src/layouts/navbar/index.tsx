import classNames from 'classnames'
import { FiHome, FiMap, FiSearch, FiUser, FiBell } from 'react-icons/fi'
import { useLocation, useNavigate } from 'react-router-dom'
import './styles.scss'

const NavBar = () => {
    const location = useLocation()
    const navigate = useNavigate()
    const navItems = [
        {
            icon: <FiHome />,
            path: '/',
            label: '홈',
            activePaths: ['/', '/reviewFeed'],
        },
        {
            icon: <FiMap />,
            path: '/map',
            label: '지도',
            activePaths: ['/map'],
        },
        {
            icon: <FiSearch />,
            path: '/discover',
            label: '탐색',
            activePaths: ['/discover'],
        },
        {
            icon: <FiBell />,
            path: '/noti',
            label: '알림',
            activePaths: ['/noti'],
        },
        {
            icon: <FiUser />,
            path: '/myPage',
            label: '마이',
            activePaths: ['/myPage'],
        },
    ]

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
