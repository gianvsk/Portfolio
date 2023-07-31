import './style.scss'

type ImageContainerProps = {
    source: string
}

export const ImageContainer = ({source} : ImageContainerProps) => {

    return (
            <img className="image" src={source} />
    )
}