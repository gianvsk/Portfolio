import '../../../style/style.scss'
import { Text } from '../../atoms/Text/Text'
import { Container } from '../../atoms/Container/Container'
import './style.scss'
import { TitleParagraphWrapper } from '../../molecules/TItleParagraphWrapper/TitleParagraphWrapper'

export const TitleList = () => {

    return (

        <Container padding='padding-xl' backgroundColor='bg-base' direction='column' gapX='xs-gap-medium' grid='grid-3-col'>
            <Container flex='title-paragraph-wrapper'>
                <Text tag='h1' color='text' tagXl='xl-h3'>Skillset</Text>
                <Text tag='p' pType='body1' color='grey-label'>
                    With skills in over 4 different fields of design, I am the perfect person to hire when it comes to a
                    full fledged project. Whatever your needs are, I can pretty much take on any challenge.
                </Text>
            </Container>
            <ul className='list'>
                <div className='list__container'>
                    <TitleParagraphWrapper
                        text1='Product Design'
                        margin1='margin-top-24'
                        text2='Working at Facebook has taught me a lot about how to understand users, solve problems and build great products.'
                        color2='grey-label'
                        margin2='margin-top-12'
                    >
                        <img className='bg-icon-square icon-spacing' src='/images/icons/Squares.svg' />
                    </TitleParagraphWrapper>
                </div>
                <div className='list__container'>
                    <Container flex='title-paragraph-wrapper'>
                        <TitleParagraphWrapper
                            text1='Visual Design'
                            margin1='margin-top-24'
                            text2='My experience at dribbble has helped me learn to develop the eye for design. Colors, typography,
                        layout and the whole package.'
                            color2='grey-label'
                            margin2='margin-top-12'
                        >
                            <div className='bg-icon-pen icon-spacing'>
                                <img className='icon-diagonal' src='/images/icons/DiagonalLine.svg' />
                            </div>
                        </TitleParagraphWrapper>
                    </Container>
                </div>
                <div className='list__container'>
                    <TitleParagraphWrapper
                        text1='Motion Design'
                        margin1='margin-top-24'
                        text2='I started my design journey with motion design in my college days.
                        Motion is something that really fascinates me because of the flexibility of story telling.'
                        color2='grey-label'
                        margin2='margin-top-12'
                    >
                        <div className='bg-icon-circle icon-spacing' />
                    </TitleParagraphWrapper>
                </div>
                <div className='list__container'>
                    <TitleParagraphWrapper
                        text1='Photography Design'
                        margin1='margin-top-24'
                        text2='Clicking pictures really brings out the creative in me.
                            Phtography really makes you look and percieve things in a different way.'
                        color2='grey-label'
                        margin2='margin-top-12'
                    >
                        <img className='icon-size icon-spacing' src='/images/icons/Camera.svg' />
                    </TitleParagraphWrapper>
                </div>
            </ul>
        </Container>
    )

}