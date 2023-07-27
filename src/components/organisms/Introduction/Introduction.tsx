import { TitleParagraphWrapper } from "../../molecules/TItleParagraphWrapper/TitleParagraphWrapper"
import './style.scss'
import '../../../style/style.scss'

export const Introduction = () => {

    return (
        <section className="introduction padding-y-48">
            <TitleParagraphWrapper gap='gap-16'>
                <h1 className='heading1 light-grey'>
                    I’m Robin Williams. A product designer based in Italy.
                </h1>
                <p className='body1 text'>
                    I’m probably the most passionate designer you will ever get to work with. If
                    you have a great project that needs some amazing skills, I’m your guy.
                </p>
            </TitleParagraphWrapper>
        </section>
    )
}