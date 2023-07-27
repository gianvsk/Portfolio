import './style.scss'

type ImageContainerProps = {
    source: string
}

export const ImageContainer = ({source} : ImageContainerProps) => {

    return (
        <div className="image-container">
            <img className="image-container__image" src={source} />
        </div>
    )
}