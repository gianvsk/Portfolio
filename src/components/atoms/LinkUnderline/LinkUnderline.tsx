import { Text } from '../Text/Text'
import './style.scss'

type LinkUnderlineProps = {
    text: string
    color: 'text' | 'base'
}

export const LinkUnderline = ({text, color} : LinkUnderlineProps) => {

    return (
        <>
        <Text tag='a' color={color}>
            {text}
        </Text>
        </>
    )

}