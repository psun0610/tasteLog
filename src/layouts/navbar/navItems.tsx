import { FiHome, FiMap, FiSearch, FiUser, FiBell } from 'react-icons/fi'

export interface NavItem {
    icon: React.ReactNode
    path: string
    label: string
    activePaths: string[]
}

/** 네비게이션 아이템 */
export const navItems: NavItem[] = [
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
        activePaths: ['/myPage', '/createReview'],
    },
]
