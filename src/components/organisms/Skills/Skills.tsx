import '../../../style/style.scss'
import { TitleParagraphWrapper } from '../../molecules/TItleParagraphWrapper/TitleParagraphWrapper'
import './style.scss'

export const Skills = () => {

    return (

        <section className='skills padding-y-64'>
            <TitleParagraphWrapper gap='gap-16'>
                <h1 className='heading1 text'>Skillset</h1>
                <p className='body1 light-grey'>
                    With skills in over 4 different fields of design, I am the perfect person to hire when it comes to a
                    full fledged project. Whatever your needs are, I can pretty much take on any challenge.
                </p>
            </TitleParagraphWrapper>
            <div className='skills__container'>
                <img className='icon' src='/images/icons/Squares.svg'/>
                <TitleParagraphWrapper gap='gap-16'>
                    <h1 className='heading1 text'>Product Design</h1>
                    <p className='body1 light-grey'>
                        Working at Facebook has taught me a lot about how to understand users, solve problems and build great products.
                    </p>
                </TitleParagraphWrapper>
            </div>
            <div className='skills__container'>
                <div className='bg-icon-pen'>
                    <img className='icon-diagonal' src='/images/icons/DiagonalLine.svg'/>
                </div>
                <TitleParagraphWrapper gap='gap-16'>
                    <h1 className='heading1 text'>Visual Design</h1>
                    <p className='body1 light-grey'>
                        My experience at dribbble has helped me learn to develop the eye for design. Colors, typography,
                        layout and the whole package.
                    </p>
                </TitleParagraphWrapper>
            </div>
            <div className='skills__container'>
                <div className='bg-icon-circle'/>
                <TitleParagraphWrapper gap='gap-16'>
                    <h1 className='heading1 text'>Motion Design</h1>
                    <p className='body1 light-grey'>
                        I started my design journey with motion design in my college days.
                        Motion is something that really fascinates me because of the flexibility of story telling.
                    </p>
                </TitleParagraphWrapper>
            </div>
            <div className='skills__container'>
                <img className='icon' src='/images/icons/Camera.svg'/>
                <TitleParagraphWrapper gap='gap-16'>
                    <h1 className='heading1 text'>Photography</h1>
                    <p className='body1 light-grey'>
                        Clicking pictures really brings out the creative in me.
                        Phtography really makes you look and percieve things in a different way.
                    </p>
                </TitleParagraphWrapper>
            </div>
        </section>
    )

}