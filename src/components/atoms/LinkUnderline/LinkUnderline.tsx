import './style.scss'

type LinkUnderlineProps = {
    text: string
}

export const LinkUnderline = ({text} : LinkUnderlineProps) => {

    return (
        <>
        <a className='body2 base link-underline'>
            {text}
        </a>
        </>
    )

}