import { LinkUnderline } from "../../atoms/LinkUnderline/LinkUnderline"
import { TitleTextWrapper } from "../../molecules/TitleTextWrapper/TitleTextWrapper"
import './style.scss'


export const CentralImage = () => {

    return (
        <div className='central-image-container'>
            <div className='central-image-container-elements'>
                <div className='central-image-container-elements__titles'>
                    <TitleTextWrapper
                        title='MyDribbble'
                        text='Each dribbble shot is made with love and care. Do check out my work on Dribbble. Likes and comments are appreciated.'
                    >
                        <LinkUnderline text='Follow me on Dribbble' color='text'/>
                    </TitleTextWrapper>
                </div>
                <div className='central-image-container-elements__image-container'>
                    <div className='markers-container'>
                        <img className='markers-container__markers' src='/images/icons/Markers.svg' />
                    </div>
                    <div className='central-image' />
                </div>
            </div>
        </div>
    )

}