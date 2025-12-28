import classNames from 'classnames'
import './styles.scss'
import { forwardRef } from 'react'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string
    id?: string
    type?: string
    line?: boolean
    children?: React.ReactNode
}

const Input = forwardRef<HTMLInputElement, InputProps>(
    ({ label, id, type = 'text', line = false, children, ...props }, ref) => {
        return (
            <div className={classNames('input-container', { line })}>
                {label && (
                    <label htmlFor={id} className={classNames({ required: props.required })}>
                        {label}
                    </label>
                )}
                <input ref={ref} type={type} id={id} {...props} />
                {children}
            </div>
        )
    }
)

export default Input
