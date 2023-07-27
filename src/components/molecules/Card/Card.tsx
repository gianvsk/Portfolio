import { TitleParagraphWrapper } from '../TItleParagraphWrapper/TitleParagraphWrapper'
import './style.scss'

type CardProps = {
    source: string
    title: string
    paragraph: string
}

export const Card = ({source,title,paragraph}: CardProps) => {

    return (

        <article className='card'>
            <img className='card__image' src={source} />
            <div className='card__body'>
                <TitleParagraphWrapper gap='gap-16'>
                    <h3 className='heading3 text'>{title}</h3>
                    <p className='body1 light-grey'>{paragraph}</p>
                </TitleParagraphWrapper>
            </div>
        </article>

    )

}