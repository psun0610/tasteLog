import classNames from 'classnames'
import './styles.scss'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label: string
    id: string
    type: string
    children: React.ReactNode
}

const Input = ({ label, id, type, children, ...props }: InputProps) => {
    return (
        <div className="input-container">
            <label htmlFor={id} className={classNames({ required: props.required })}>
                {label}
            </label>
            <input type={type} id={id} {...props} />
            {children}
        </div>
    )
}

export default Input
