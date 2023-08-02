import { Text } from "../../atoms/Text/Text"
import './style.scss'

type TitleTextWrapperProps = {
    title: string
    text: string
    children?: React.ReactNode
}

export const  TitleTextWrapper = ({title, text, children}: TitleTextWrapperProps) => {

    return (
        <div className='title-text-wrapper'>
            <Text tag='h1' color='text' tagXl='xl-h3'>{title}</Text>
            <div className="title-text-wrapper__paragraph">
                <Text tag='p' pType='body2' color='grey-label'>{text}</Text>
            </div>
            {children && <div className='title-text-wrapper__link'>
                {children}
            </div> }
        </div>
    )
}