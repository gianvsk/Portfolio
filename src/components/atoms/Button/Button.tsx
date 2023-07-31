/* import { Text } from "../Text/Text" */
import './style.scss'

type ButtonProps = {
    children: React.ReactNode
}

export const Button = ({children}: ButtonProps) => {

    return (
        <a className='button'>{children}</a>
    )

}