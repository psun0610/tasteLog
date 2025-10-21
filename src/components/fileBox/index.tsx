import './styles.scss'

const FileBox = ({ onChange }: { onChange: (e: React.ChangeEvent<HTMLInputElement>) => void }) => {
    return (
        <div className="file-input-box">
            <svg viewBox="0 0 24 24">
                <path d="M12 5v14m-7-7h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
            <input type="file" onChange={onChange} />
        </div>
    )
}

export default FileBox
