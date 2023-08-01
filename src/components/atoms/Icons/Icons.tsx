import { ImageContainer } from '../ImageContainer/ImageContainer'
import './style.scss'

export const Icons = () => {

    return (
    <div className="icons-container">
        <ImageContainer type='icon' source='/images/icons/Twitter.svg'/>
        <ImageContainer type='icon' source='/images/icons/Dribbble.svg'/>
        <ImageContainer type='icon' source='/images/icons/Linkedin.svg'/>
    </div>
    )

}