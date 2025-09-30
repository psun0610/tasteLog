import { FiChevronRight } from 'react-icons/fi'
import './styles.scss'

const SectionBox = ({ title, children }: { title: string; children: React.ReactNode }) => {
    return (
        <section id="section-box">
            <header>
                <h1>{title}</h1>
                <FiChevronRight />
            </header>
            <div className="content">{children}</div>
        </section>
    )
}

export default SectionBox
