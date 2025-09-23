import classNames from 'classnames'
import './styles.scss'

interface ButtonProps {
    text?: string
    children?: React.ReactNode
    color?: 'primary' | 'green' | 'red' | 'gray' | 'blue'
    border?: boolean
    className?: string
    props?: React.ButtonHTMLAttributes<HTMLButtonElement>
}

const Button = ({
    color = 'primary',
    border = false,
    className,
    text,
    children,
    ...props
}: ButtonProps) => {
    return (
        <button
            className={classNames(color, {
                border: border,
                className: className,
            })}
            {...props}
        >
            {children && children}
            {text}
        </button>
    )
}

export default Button
