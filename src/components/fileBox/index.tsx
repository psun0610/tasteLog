import './styles.scss'
import '@/components/input/styles.scss'
import { useState, useRef, useEffect } from 'react'
import classNames from 'classnames'

import { FiCamera } from 'react-icons/fi'
import { FaUserLarge } from 'react-icons/fa6'

const FileBox = ({
    label,
    text = '이미지 추가하기',
    onChange,
    type = 'default',
}: {
    label?: string
    text?: string
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    type?: 'circle' | 'default'
}) => {
    const [file, setFile] = useState<File | null>(null)
    const fileInputRef = useRef<HTMLInputElement>(null)

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0]
        if (file) {
            setFile(file)
        }
        onChange(e)
    }

    const handleIconClick = () => {
        fileInputRef.current?.click()
    }

    useEffect(() => {
        return () => {
            URL.revokeObjectURL(file?.name)
        }
    }, [])

    return (
        <div className="input-container">
            <label htmlFor="file-input">{label}</label>
            <div className={classNames('file-input-box', { circle: type === 'circle' })} onClick={handleIconClick}>
                {file ? <img src={URL.createObjectURL(file)} alt="file" /> : type === 'circle' && <FaUserLarge />}
                {type === 'default' && (
                    <>
                        <FiCamera />
                        <p className="file-input-box-text">{text}</p>
                    </>
                )}
                <input
                    ref={fileInputRef}
                    type="file"
                    onChange={handleFileChange}
                    accept="image/*"
                    style={{ display: 'none' }}
                />
                {type === 'circle' && (
                    <div className="file-edit-icon">
                        <FiCamera />
                    </div>
                )}
            </div>
        </div>
    )
}

export default FileBox
