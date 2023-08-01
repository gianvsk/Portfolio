import { Text } from '../../atoms/Text/Text'
import './style.scss'
import clsx from 'clsx'

type CardProps = {
    source: string
    title?: string
    paragraph: string
    children?: React.ReactNode
}

export const Card = ({ source, title, paragraph, children }: CardProps) => {

    return (
        <>

            <article className={clsx('card--primary',{'card--secondary' : children})}>
                <img className={clsx('card--primary__image', {'card--secondary__image' : children})} src={source} />
                <div className={clsx('card--primary__body',{'card--secondary__body' : children})}>
                    {title && <Text tag='h3' color='text'>{title}</Text>}
                    <Text tag='p' pType='body1' color={ children ? 'text' : 'grey-label'}>{paragraph}</Text>
                    {children}
                </div>
            </article>
        </>

    )

}