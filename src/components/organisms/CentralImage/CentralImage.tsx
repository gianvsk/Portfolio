import { LinkUnderline } from "../../atoms/LinkUnderline/LinkUnderline"
import { Text } from "../../atoms/Text/Text"
import './style.scss'


export const CentralImage = () => {

    return (
        <div className='central-image-container'>
            <div className='central-image-container-elements'>
                <div className='central-image-container-elements__titles'>
                <Text tag='h2' color='text'>
                    MyDribbble
                </Text>
                <Text tag='p' pType='body1' color='grey-label' margin='margin-top-24'>
                    Each dribbble shot is made with love and care. Do check out my work on Dribbble. Likes and comments are appreciated.
                </Text>
                <LinkUnderline text='Follow me on Dribbble' color='text' margin='margin-top-40' />
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