import classNames from 'classnames'
import './styles.scss'

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
            className={classNames(`button ${className}`, color, {
                border: border,
            })}
            onClick={onClick}
            {...props}
        >
            {children && children}
            <p>{text}</p>
        </button>
    )
}

export default Button
