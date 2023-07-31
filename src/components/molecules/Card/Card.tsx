import { Text } from '../../atoms/Text/Text'
import './style.scss'
import { Container } from '../../atoms/Container/Container'
import clsx from 'clsx'

type CardProps = {
    source: string
    sourceHeight?: 'height-360'
    title?: string
    paragraph: string
    bodyPadding?: 'padding-xs'
    color: 'grey-label' | 'text'
    tag2: 'p' | 'h5'
    gap?: 'gap-large' | 'gap-64'
    children?: React.ReactNode
}

export const Card = ({source, sourceHeight, title,paragraph,color,tag2, bodyPadding, gap, children}: CardProps) => {

    return (

        <article className='card'>
            <img className={clsx('card__image', sourceHeight)} src={source} />
            <div className='card__body'>
                <Container flex='flex-column-start' gap={gap} padding={bodyPadding}>
                    {title && <Text tag='h3' color='text'>{title}</Text>}
                    <Text tag={tag2} pType='body1' color={color}>{paragraph}</Text>
                    {children}
                </Container>
            </div>
        </article>

    )

}