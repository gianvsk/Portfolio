import './style.scss'
import '../../../style/style.scss'
import { Text } from '../Text/Text'
import clsx from 'clsx'

type LinkProps = {
    text? : string
    activated?: boolean
}

export const Link = ({text, activated} : LinkProps) => {
    
    return (
        <a className={clsx('link', {'activated' : activated})}>
            <Text tag='p' pType='body2' color='text'>{text}</Text>
        </a>
    )
}