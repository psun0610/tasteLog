import './styles.scss'

interface ButtonProps {
    children: React.ReactNode
    classNames?: string
    props?: React.ButtonHTMLAttributes<HTMLButtonElement>
}

const Button = ({ classNames, children, ...props }: ButtonProps) => {
    return (
        <button className={classNames} {...props}>
            {children}
        </button>
    )
}

export default Button
