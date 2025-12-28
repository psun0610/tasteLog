import classNames from 'classnames'
import './styles.scss'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string
    id?: string
    type?: string
    line?: boolean
    children?: React.ReactNode
}

const Input = ({ label, id, type = 'text', line = false, children, ...props }: InputProps) => {
    return (
        <div className={classNames('input-container', { line })}>
            {label && (
                <label htmlFor={id} className={classNames({ required: props.required })}>
                    {label}
                </label>
            )}
            <input type={type} id={id} {...props} />
            {children}
        </div>
    )
}

export default Input
