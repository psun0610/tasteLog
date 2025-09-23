import Button from '@/components/button'
import FloatingButtonGroup, {
    IFloatingButton,
} from '@/components/floatingButtonGroup'
import KakaoMap from '@/components/kakaoMap'
import { FiPlus, FiUserCheck } from 'react-icons/fi'
import { LuPenLine } from 'react-icons/lu'

const Home = () => {
    /** 플로팅 버튼 리스트 */
    const floatingButtons: IFloatingButton[] = [
        {
            icon: <LuPenLine />,
            onClick: () => {
                console.log('친구의 리뷰')
            },
        },
        {
            icon: <FiUserCheck />,
            onClick: () => {
                console.log('리뷰 작성')
            },
        },
    ]

    return (
        <div id="home">
            <KakaoMap />
            <FloatingButtonGroup
                mainIcon={<FiPlus />}
                buttons={floatingButtons}
            />
        </div>
    )
}

export default Home
