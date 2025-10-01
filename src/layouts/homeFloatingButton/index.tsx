import FloatingButtonGroup from '@/components/floatingButtonGroup'
import { FiPlus } from 'react-icons/fi'
import { LuPenLine } from 'react-icons/lu'
import { useNavigate } from 'react-router-dom'

const HomeFloatingButton = () => {
    const navigate = useNavigate()
    const mainIcon = <FiPlus />

    const buttonList = [
        {
            icon: <LuPenLine />,
            onClick: () => navigate('/createReview'),
        },
    ]
    return <FloatingButtonGroup mainIcon={mainIcon} buttons={buttonList} />
}

export default HomeFloatingButton
