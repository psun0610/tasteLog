import classNames from 'classnames'
import styles from './button.module.scss'

interface ButtonProps {
    text?: string
    children?: React.ReactNode
    color?: 'primary' | 'green' | 'red' | 'gray' | 'blue'
    border?: boolean
    className?: string
    props?: React.ButtonHTMLAttributes<HTMLButtonElement>
    onClick?: () => void
}

const Button = ({ color = 'primary', border = false, className, text, children, onClick, ...props }: ButtonProps) => {
    return (
        <button
            className={classNames(styles[color], {
                border: border,
                className: className,
            })}
            onClick={onClick}
            {...props}
        >
            {children && children}
            {text}
        </button>
    )
}

export default Button
