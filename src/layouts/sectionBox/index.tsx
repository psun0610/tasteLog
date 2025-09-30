import { FiChevronRight } from 'react-icons/fi'
import './styles.scss'

interface SectionBoxProps {
    title: string
    children: React.ReactNode
    titleClick: () => void
}

const SectionBox = ({ title, children, titleClick }: SectionBoxProps) => {
    return (
        <section id="section-box">
            <header onClick={titleClick}>
                <h1>{title}</h1>
                <FiChevronRight />
            </header>
            <div className="content">{children}</div>
        </section>
    )
}

export default SectionBox
