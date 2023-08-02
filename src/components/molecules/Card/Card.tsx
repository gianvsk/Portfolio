import { Text } from '../../atoms/Text/Text'
import './style.scss'
import clsx from 'clsx'

type CardProps = {
    source: string
    title?: string
    paragraph: string
    children?: React.ReactNode
    big?: boolean
}

export const Card = ({ source, title, paragraph, big, children }: CardProps) => {

    return (
        <>

            <article className={clsx('card')}>
                <img className={clsx('card__image', {'card__image--big' : big})} src={source} />
                <div className={clsx('card__body',{'card__body--big' : big})}>
                    {title && <Text tag='h3' color='text'>{title}</Text>}
                    <Text tag='p' pType='body1' color={ big ? 'text' : 'grey-label'}>{paragraph}</Text>
                    {children}
                </div>
            </article>
        </>

    )

}