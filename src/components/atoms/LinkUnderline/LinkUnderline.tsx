import { Text } from '../Text/Text'
import './style.scss'

type LinkUnderlineProps = {
    text: string
    color: 'text' | 'base'
    margin?: 'margin-top-40'
}

export const LinkUnderline = ({text, color, margin} : LinkUnderlineProps) => {

    return (
        <>
        <Text tag='a' color={color} margin={margin} >
            {text}
        </Text>
        </>
    )

}