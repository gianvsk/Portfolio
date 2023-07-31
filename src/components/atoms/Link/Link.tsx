import './style.scss'
import '../../../style/style.scss'
import { Text } from '../Text/Text'

type LinkProps = {
    text? : string
}

export const Link = ({text} : LinkProps) => {
    
    return (
        <a className='link'>
            <Text tag='p' pType='body2' color='text'>{text}</Text>
        </a>
    )
}