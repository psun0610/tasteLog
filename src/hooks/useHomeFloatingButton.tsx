import { useState } from 'react'
import { LuPenLine } from 'react-icons/lu'
import { FiPlus, FiUserCheck } from 'react-icons/fi'

const useHomeFloatingButton = () => {
    const [isToggleOpen, setIsToggleOpen] = useState(false)

    const mainIcon = <FiPlus />

    const buttonList = [
        {
            icon: <LuPenLine />,
            onClick: () => console.log('리뷰작성'),
        },
        {
            icon: <FiUserCheck />,
            onClick: () => setIsToggleOpen(true),
        },
    ]

    return { buttonList, mainIcon, isToggleOpen, setIsToggleOpen }
}

export default useHomeFloatingButton
