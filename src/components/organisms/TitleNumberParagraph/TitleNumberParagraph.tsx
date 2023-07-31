import { TitleParagraphWrapper } from "../../molecules/TItleParagraphWrapper/TitleParagraphWrapper"
import { Text } from "../../atoms/Text/Text"
import './style.scss'
import '../../../style/style.scss'
import { Container } from "../../atoms/Container/Container"

export const TitleNumberParagraph = () => {

    return (
        <Container padding='padding-xl' backgroundColor='bg-base' direction='column'>
            <Container flex='flex-column-start' gap='gap-small'>
                <Text tag='span' spanType='overline' color='light-grey'>WORK EXPERIENCE</Text>
                <Text tag='h1' color='text'>
                    Companies I have worked for in the past.
                    </Text>
                </Container>
            <Container direction='adapt-column' marginTop='margin-top-medium'>
            <div className="experiences__container">
                <TitleParagraphWrapper 
                    spanText='Google, '
                    label='01' 
                    text1='Interaction Designer' 
                    text2='I currently am the lead designer on the interaction design team for Google Play.'
                    colorSpan='green-accent'
                    marginContainer='margin-top-40'
                    margin2='margin-top-16'
                    />
            </div>
            <div className="experiences__container">
            <TitleParagraphWrapper 
                    spanText='Facebook, '
                    label='02' 
                    text1='Product Designer' 
                    text2='I’ve worked on a wide variety of internal tools for facebook over the past 6 years.'
                    colorSpan='light-primary'
                    marginContainer='margin-top-40'
                    margin2='margin-top-16'
                    />
            </div>
            <div className="experiences__container">
            <TitleParagraphWrapper 
                    spanText='Dribbble, '
                    label='03' 
                    text1='Graphic Designer' 
                    text2='I started my design career with Dribbble. I was incharge of creating illustrations for the platform.'
                    colorSpan='pink-accent'
                    marginContainer='margin-top-40'
                    margin2='margin-top-16'
                    />
            </div>
            </Container>
        </Container>
    )
}