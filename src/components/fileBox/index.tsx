import './styles.scss'
import '@/components/input/styles.scss'
import { FiImage } from 'react-icons/fi'
const FileBox = ({
    label,
    text = '이미지 추가하기',
    onChange,
}: {
    label: string
    text: string
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}) => {
    return (
        <div className="input-container">
            <label htmlFor="file-input">{label}</label>
            <div className="file-input-box">
                <FiImage />
                <p className="file-input-box-text">{text}</p>
                <input type="file" onChange={onChange} accept="image/*" />
            </div>
        </div>
    )
}

export default FileBox
