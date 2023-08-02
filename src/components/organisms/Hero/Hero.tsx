import './style.scss'
import { ProfileImage } from '../../atoms/ProfileImage/ProfileImage'
import { Text } from "../../atoms/Text/Text"


export const Hero = () => {

    return (
        <section className="hero"> 
            <div className="hero__image">
                <ProfileImage />
            </div>
            <div className="hero__empty-container"></div>
            <div className='hero__body'>
                <div className='spacer'>
                    <Text tag='h1' color='light-grey'>
                        I’m Robin Williams. A product designer 
                        <Text tag='span' spanType="h2-like" tagXl='xl-h1' color='middle-grey'> based in Italy.</Text>
                    </Text>
                    <Text tag='p' pType='body1' color='text'>
                        I’m probably the most passionate designer you will ever get to work with. If
                        you have a great project that needs some amazing skills, I’m your guy.
                    </Text>
                    </div>
                </div>
        </section>
    )
}