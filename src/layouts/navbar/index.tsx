import classNames from 'classnames'
import {
    FiHome,
    FiMap,
    FiStar,
    FiServer,
    FiHeart,
    FiSettings,
    FiUsers,
} from 'react-icons/fi'
import { useLocation } from 'react-router-dom'
import './styles.scss'

const NavBar = () => {
    const location = useLocation()
    const navItems = [
        {
            icon: <FiServer />,
            path: '/list',
            text: '목록',
        },
        {
            icon: <FiHeart />,
            path: '/star',
            text: '즐겨찾기',
        },
        {
            icon: <FiHome />,
            // icon: <FiMap />,
            path: '/',
            text: '홈',
        },
        {
            icon: <FiUsers />,
            path: '/friend',
            text: '친구목록',
        },
        {
            icon: <FiSettings />,
            path: '/settings',
            text: '설정',
        },
    ]

    // TODO: active 조건 수정
    return (
        <nav className="navbar">
            <ul>
                {navItems.map((item) => (
                    <li
                        key={item.path}
                        className={classNames({
                            active: location.pathname === item.path,
                        })}
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
