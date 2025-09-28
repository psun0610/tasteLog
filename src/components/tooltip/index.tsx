import { useEffect, useRef, useState } from 'react'
import { AiOutlineQuestionCircle } from 'react-icons/ai'
import './styles.scss'

const Tooltip = ({ text }: { text: string }) => {
    const [isOpen, setIsOpen] = useState(false)
    const tooltipRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (tooltipRef.current && !tooltipRef.current.contains(event.target as Node)) {
                setIsOpen(false)
                console.log('click outside')
            }
        }

        if (isOpen) {
            document.addEventListener('click', handleClickOutside, true)
        }

        return () => {
            document.removeEventListener('click', handleClickOutside)
        }
    }, [isOpen])

    return (
        <div id="tooltip" ref={tooltipRef}>
            <AiOutlineQuestionCircle onClick={() => setIsOpen(!isOpen)} />
            {isOpen && <div className="tooltip-content">{text}</div>}
        </div>
    )
}

export default Tooltip
