import { FiChevronRight } from 'react-icons/fi'
import './styles.scss'
import classNames from 'classnames'

interface SectionBoxProps {
    title: React.ReactNode
    children: React.ReactNode
    titleClick?: () => void
    contentBox?: boolean // 컨텐츠 박스 스타일 적용 여부
}

const SectionBox = ({ title, children, titleClick = null, contentBox = true }: SectionBoxProps) => {
    return (
        <section id="section-box">
            <header onClick={titleClick}>
                <h1>{title}</h1>
                {titleClick && <FiChevronRight />}
            </header>
            <div className={classNames({ content: contentBox })}>{children}</div>
        </section>
    )
}

export default SectionBox
