/* import { Text } from "../Text/Text" */
import clsx from 'clsx'
import './style.scss'

type ButtonProps = {
    children: React.ReactNode
    size?: 'small' | 'medium'
    type?: 'submit'
    activated?: 'active'
    onClick?: () => void
}

export const Button = ({children, size, type, activated, onClick}: ButtonProps) => {

    return (
        <a className={clsx('button', {'button-small' : size === 'small', 'submit' : type === 'submit', 'activated' : activated})} onClick={onClick}>{children}</a>
    )

}