import { Button } from '../../atoms/Button/Button'
import { Container } from '../../atoms/Container/Container'
import { TitleTextWrapper } from '../../molecules/TitleTextWrapper/TitleTextWrapper'
import { Carousel } from '../Carousel/Carousel'
import './style.scss'

export const ButtonsImages = () => {

    return (
        <Container padding='padding-xl' backgroundColor='bg-base'>
        <div className='buttons-images'>
            <TitleTextWrapper
                title='Photography'
                text='Here is a collection of my best travel pictures that I took while travelling places all around the world.'
            />
            <div className='buttons-images__buttons'>
                <Button size='small' activated='active'>ITALY</Button>
                <Button size='small'>AUSTRALIA</Button>
                <Button size='small'>INDIA</Button>
                <Button size='small'>BRAZIL</Button>
            </div>
            <div className='buttons-images__images'>
                <img className='image-from-carousel' src="/images/pictures/OldStreet.jpg" />
                <img className='image-from-carousel' src="/images/pictures/Venezia.jpg" />
                <img className='image-from-carousel' src="/images/pictures/Bridge.jpg" />
                <img className='image-from-carousel' src="/images/pictures/View.jpg" />
            </div>
            <Carousel/>
        </div>
        </Container>
    )

}