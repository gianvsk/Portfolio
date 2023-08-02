import './style.scss'
/* import { Label } from "../../atoms/Label/Label" */
import { Text } from "../../atoms/Text/Text"
import { Container } from "../../atoms/Container/Container"
import { Label } from '../../atoms/Label/Label'
import clsx from 'clsx'

type TitleParagraphWrapperProps = {
    label?: string
    text1: string
    text2: string
    spanText?: string
    colorSpan?: 'pink-accent' | 'green-accent' | 'light-primary'
    children?: React.ReactNode
}

export const TitleParagraphWrapper = ({ label, text1, spanText, text2, colorSpan, children }: TitleParagraphWrapperProps) => {

    return (
        <Container padding='lg-padding-right-48'>
            <div className='title-paragraph-wrapper'>
                {label && <Label num={label} />}
                {children}
                <div className={clsx('title-paragraph-wrapper__title--secondary',{ 'title-paragraph-wrapper__title--primary': label })}>
                    <Text tag='h3' color='text'>
                        {spanText && <Text tag='span' spanType='h3-like' color={colorSpan}>{spanText}</Text>}
                        {text1}</Text>
                </div>
                <div className={clsx('title-paragraph-wrapper__paragraph--secondary', { 'title-paragraph-wrapper__paragraph--primary': label })}>
                    <Text tag='p' pType='body2' color={label ? 'text' : 'grey-label'}>
                        {text2}
                    </Text>
                </div>
            </div>
        </Container>
    )
}