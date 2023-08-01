/* import { Text } from "../Text/Text" */
import clsx from 'clsx'
import './style.scss'

type ButtonProps = {
    children: React.ReactNode
    size?: 'small' | 'medium'
    type?: 'submit'
}

export const Button = ({children, size, type}: ButtonProps) => {

    return (
        <a className={clsx('button', {'button-small' : size === 'small', 'submit' : type === 'submit'})}>{children}</a>
    )

}