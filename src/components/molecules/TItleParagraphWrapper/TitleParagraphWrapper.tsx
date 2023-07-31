import './style.scss'
/* import { Label } from "../../atoms/Label/Label" */
import { Text } from "../../atoms/Text/Text"
import { Container } from "../../atoms/Container/Container"
import { Label } from '../../atoms/Label/Label'
/* import { useMemo } from 'react' */

type TitleParagraphWrapperProps = {
    label?: string
    text1: string
    text2: string
    spanText?: string
    colorSpan?: 'pink-accent' | 'green-accent' | 'light-primary'
    color2?: 'text' | 'grey-label'
    marginContainer?: 'margin-top-40'
    margin1?: 'margin-top-24'
    margin2?: 'margin-top-16' | 'margin-top-12'
    children?: React.ReactNode
}

export const TitleParagraphWrapper = ({ label, text1, spanText, text2, colorSpan, color2,
                                        marginContainer, margin1, margin2, children}: TitleParagraphWrapperProps) => {
    
    return (
        <Container flex='title-paragraph-wrapper' marginTop={marginContainer} padding='lg-padding-right-48'>
            {label && <Label num={label}/>}
            {children}
            <Text tag='h3' color='text'>
                {spanText && <Text tag='span' spanType='h3-like' margin={margin1} color={colorSpan}>{spanText}</Text>}
                {text1}</Text>
            <Text tag='p' pType='body2' margin={margin2} color={color2}>
                {text2}
            </Text>
        </Container>
    )
}