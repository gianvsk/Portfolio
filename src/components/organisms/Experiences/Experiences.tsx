import { TitleParagraphWrapper } from "../../molecules/TItleParagraphWrapper/TitleParagraphWrapper"
import './style.scss'
import '../../../style/style.scss'
import { Label } from "../../atoms/Label/Label"

export const Experiences = () => {

    return (
        <section className="experiences padding-y-64">
            <TitleParagraphWrapper gap='gap-8'>
                <span className='overline light-grey'>WORK EXPERIENCE</span>
                <h1 className='heading1 text' >
                    Companies I have worked for in the past.
                </h1>
            </TitleParagraphWrapper>
            <div className="experiences__container padding-top-40">
                <Label num='01'/>
                <TitleParagraphWrapper gap='gap-8'>
                    <h3 className='heading3 text'><span className='green-accent'>Google</span>, Interaction Designer</h3>
                    <p className='body2 text'>
                        I currently am the lead designer on the interaction design team for Google Play.
                    </p>
                </TitleParagraphWrapper>
            </div>
            <div className="experiences__container padding-top-40">
                <Label num='02'/>
                <TitleParagraphWrapper gap='gap-8'>
                    <h3 className='heading3 text'><span className='light-primary'>Facebook</span>, Product Designer</h3>
                    <p className='body2 text'>
                        I’ve worked on a wide variety of internal tools for facebook over the past 6 years.
                    </p>
                </TitleParagraphWrapper>
            </div>
            <div className="experiences__container padding-top-40">
                <Label num='03'/>
                <TitleParagraphWrapper gap='gap-8'>
                    <h3 className='heading3 text'><span className='pink-accent'>Dribbble</span>, Graphic Designer</h3>
                    <p className='body2 text'>
                        I started my design career with Dribbble. I was incharge of creating illustrations for the platform.
                    </p>
                </TitleParagraphWrapper>
            </div>

        </section>
    )
}