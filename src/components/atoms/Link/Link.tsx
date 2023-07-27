import './style.scss'
import '../../../style/style.scss'

type LinkProps = {
    text? : string
}

export const Link = ({text} : LinkProps) => {
    
    return (
        <a className='link'>
            <p className='body2 text' children={text}/>
        </a>
    )
}