import { useState } from 'react'
import './styles.scss'
import classNames from 'classnames'

export interface IFloatingButton {
    icon: React.ReactNode
    onClick: () => void
}

interface FloatingButtonGroupProps {
    mainIcon: React.ReactNode
    buttons: IFloatingButton[]
}

const FloatingButtonGroup = ({ mainIcon, buttons }: FloatingButtonGroupProps) => {
    const [isOpen, setIsOpen] = useState(false)

    const toggleButtons = () => setIsOpen(!isOpen)
    const closeButtons = () => setIsOpen(false)

    const BUTTON_HEIGHT = 5.5
    const GAP = 2

    const calcBottom = (index: number) => {
        return (BUTTON_HEIGHT + GAP) * (index + 1)
    }

    const handleClick = (onClick: () => void) => {
        onClick()
        closeButtons()
    }

    return (
        <>
            <div
                className={classNames('floating-button-overlay', {
                    open: isOpen,
                })}
                onClick={closeButtons}
            ></div>
            <div
                className={classNames('floating-button-group', {
                    open: isOpen,
                })}
            >
                {buttons.map((btn, index) => (
                    <div
                        className={'fab-item-container'}
                        key={index}
                        style={{
                            bottom: `${calcBottom(index)}rem`,
                        }}
                    >
                        <button onClick={() => handleClick(btn.onClick)}>{btn.icon}</button>
                    </div>
                ))}

                <button className="fab-main" onClick={toggleButtons}>
                    {mainIcon}
                </button>
            </div>
        </>
    )
}

export default FloatingButtonGroup
