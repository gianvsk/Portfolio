import { TitleParagraphWrapper } from "../../molecules/TItleParagraphWrapper/TitleParagraphWrapper"
import { Text } from "../../atoms/Text/Text"
import './style.scss'
import '../../../style/style.scss'
import { Container } from "../../atoms/Container/Container"

export const TitleNumberParagraph = () => {

    return (
        <Container padding='padding-xl' backgroundColor='bg-base'>
            <div className='title-number-paragraph'>
                <div className='title-number-paragraph__titles'>
                <Text tag='span' spanType='overline' color='light-grey'>WORK EXPERIENCE</Text>
                <Text tag='h1' color='text'>
                    Companies I have worked for in the past.
                </Text>
            </div>
            <div className='experiences'>
                <div className="experiences__container">
                    <TitleParagraphWrapper
                        spanText='Google, '
                        label='01'
                        text1='Interaction Designer'
                        text2='I currently am the lead designer on the interaction design team for Google Play.'
                        colorSpan='green-accent'
                    />
                </div>
                <div className="experiences__container">
                    <TitleParagraphWrapper
                        spanText='Facebook, '
                        label='02'
                        text1='Product Designer'
                        text2='I’ve worked on a wide variety of internal tools for facebook over the past 6 years.'
                        colorSpan='light-primary'
                    />
                </div>
                <div className="experiences__container">
                    <TitleParagraphWrapper
                        spanText='Dribbble, '
                        label='03'
                        text1='Graphic Designer'
                        text2='I started my design career with Dribbble. I was incharge of creating illustrations for the platform.'
                        colorSpan='pink-accent'
                    />
                </div>
            </div>
            </div>
        </Container>
    )
}