import FloatingButtonGroup from '@/components/floatingButtonGroup'
import { FiPlus } from 'react-icons/fi'
import { LuPenLine } from 'react-icons/lu'

const HomeFloatingButton = () => {
    const mainIcon = <FiPlus />

    const buttonList = [
        {
            icon: <LuPenLine />,
            onClick: () => console.log('리뷰작성'),
        },
    ]
    return <FloatingButtonGroup mainIcon={mainIcon} buttons={buttonList} />
}

export default HomeFloatingButton
