import classNames from 'classnames'
import './styles.scss'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label: string
    id: string
    type: string
}

const Input = ({ label, id, type, ...props }: InputProps) => {
    return (
        <div className="input-container">
            <label htmlFor={id} className={classNames({ required: props.required })}>
                {label}
            </label>
            <input type={type} id={id} {...props} />
        </div>
    )
}

export default Input
