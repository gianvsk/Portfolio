import clsx from 'clsx'
import './style.scss'

type ImageContainerProps = {
    source: string
    type: 'image' | 'icon'
}

export const ImageContainer = ({source, type} : ImageContainerProps) => {

    return (
            <img className={clsx(type)} src={source} />
    )
}