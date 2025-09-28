import { useState } from 'react'
import './styles.scss'

interface ToggleProps {
    initial?: boolean
    onChange?: (value: boolean) => void
}

const Toggle = ({ initial = false, onChange }: ToggleProps) => {
    const [isOn, setIsOn] = useState(initial)

    const handleToggle = () => {
        const newValue = !isOn
        setIsOn(newValue)
        onChange && onChange(newValue)
    }

    return (
        <div className={`toggle ${isOn ? 'on' : 'off'}`} onClick={handleToggle}>
            <div className="toggle-thumb"></div>
        </div>
    )
}

export default Toggle
