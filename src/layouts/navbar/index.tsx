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
            text: '홈',
        },
        {
            icon: <FiMap />,
            path: '/map',
            text: '지도',
        },
        {
            icon: <FiSearch />,
            path: '/discover',
            text: '탐색',
        },
        {
            icon: <FiBell />,
            path: '/noti',
            text: '알림',
        },
        {
            icon: <FiUser />,
            path: '/myPage',
            text: '마이',
        },
    ]

    // TODO: active 조건 수정
    return (
        <nav className="nav-bar">
            <ul>
                {navItems.map((item) => (
                    <li
                        key={item.path}
                        className={classNames({
                            active: location.pathname === item.path,
                        })}
                        onClick={() => navigate(item.path)}
                    >
                        {item.icon}
                        <p>{item.text}</p>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default NavBar
