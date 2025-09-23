import Button from '@/components/button'
import FloatingButtonGroup, {
    IFloatingButton,
} from '@/components/floatingButtonGroup'
import KakaoMap from '@/components/kakaoMap'
import FriendsToggle from '@/features/friends/components/friendsToggle'
import { useState } from 'react'
import { FiPlus, FiUserCheck } from 'react-icons/fi'
import { LuPenLine } from 'react-icons/lu'

const Home = () => {
    const [isFriendsToggleOpen, setIsFriendsToggleOpen] = useState(false)

    /** 플로팅 버튼 리스트 */
    const floatingButtons: IFloatingButton[] = [
        {
            icon: <LuPenLine />,
            onClick: () => {
                console.log('리뷰작성')
            },
        },
        {
            icon: <FiUserCheck />,
            onClick: () => {
                setIsFriendsToggleOpen(true)
            },
        },
    ]

    return (
        <div id="home">
            <KakaoMap />
            {!isFriendsToggleOpen && (
                <FloatingButtonGroup
                    mainIcon={<FiPlus />}
                    buttons={floatingButtons}
                />
            )}
            <FriendsToggle
                isOpen={isFriendsToggleOpen}
                onClose={() => setIsFriendsToggleOpen(false)}
            />
        </div>
    )
}

export default Home
