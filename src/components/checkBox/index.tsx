import './styles.scss'

interface CheckBoxProps {
    id: string
    label: string
    checked: boolean
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const CheckBox = ({ id, label, checked, onChange }: CheckBoxProps) => {
    return (
        <div id="check-box">
            <input type="checkbox" checked={checked} onChange={onChange} id={id} />
            <div className="label-box">
                <span aria-hidden="true"></span>
                <label htmlFor={id}>{label}</label>
            </div>
        </div>
    )
}

export default CheckBox
