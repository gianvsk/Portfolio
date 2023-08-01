import '../../../style/style.scss'
import { Text } from '../../atoms/Text/Text'
import { Container } from '../../atoms/Container/Container'
import './style.scss'
import { TitleParagraphWrapper } from '../../molecules/TItleParagraphWrapper/TitleParagraphWrapper'

export const TitleList = () => {

    return (

        <Container padding='padding-xl' backgroundColor='bg-base'>
            <div className='title-list'>
            <div className='title-list__title'>
                <Text tag='h1' color='text' tagXl='xl-h3'>Skillset</Text>
                <Text tag='p' pType='body1' color='grey-label'>
                    With skills in over 4 different fields of design, I am the perfect person to hire when it comes to a
                    full fledged project. Whatever your needs are, I can pretty much take on any challenge.
                </Text>
            </div>
            <ul className='list'>
                <div className='list__container'>
                    <TitleParagraphWrapper
                        text1='Product Design'
                        text2='Working at Facebook has taught me a lot about how to understand users, solve problems and build great products.'

                    >
                        <img className='bg-icon-square icon-spacing' src='/images/icons/Squares.svg' />
                    </TitleParagraphWrapper>
                </div>
                <div className='list__container'>
                    <Container flex='title-paragraph-wrapper'>
                        <TitleParagraphWrapper
                            text1='Visual Design'
                            text2='My experience at dribbble has helped me learn to develop the eye for design. Colors, typography,
                            layout and the whole package.'
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
                        text2='I started my design journey with motion design in my college days.
                        Motion is something that really fascinates me because of the flexibility of story telling.'
                    >
                        <div className='bg-icon-circle icon-spacing' />
                    </TitleParagraphWrapper>
                </div>
                <div className='list__container'>
                    <TitleParagraphWrapper
                        text1='Photography Design'
                        text2='Clicking pictures really brings out the creative in me.
                        Phtography really makes you look and percieve things in a different way.'
                    >
                        <img className='icon-size icon-spacing' src='/images/icons/Camera.svg' />
                    </TitleParagraphWrapper>
                </div>
            </ul>
            </div>
        </Container>
    )

}