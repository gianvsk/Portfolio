import './style.scss'
import '../../../style/style.scss'
import { LinkUnderline } from '../../atoms/LinkUnderline/LinkUnderline'
import { ImageContainer } from '../../atoms/ImageContainer/ImageContainer'

export const Philosophy = () => {

    return (
        <>
        <section className="philosophy">
            <div className='philosophy__container'>
                <h1 className='heading1 level1'>Philosophy and values</h1>
                <p className='body1 darkest-grey'>
                    I think everyone wants the same thing - relationship with humanity, peace with the metaphysical,
                    and experience with the universe. I try to grasp these things with my values: authenticity, creativity,
                    & hospitality.
                </p>
            </div>
            <LinkUnderline text='More about me' />
        </section>
        <ImageContainer source='/images/pictures/Sphere.jpg'/>
        </>
    )

}