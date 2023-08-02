import { Button } from "../../atoms/Button/Button"
import { Container } from "../../atoms/Container/Container"
import { Text } from "../../atoms/Text/Text"
import { Card } from "../../molecules/Card/Card"
import './style.scss'

export const CardWrapper = () => {

    return (
        <Container backgroundColor='bg-base' padding='padding-xl'>
            <div className='card-wrapper'>
                <div className='card-wrapper__container'>
                    <div className='card-wrapper-title'>
                        <Text tag='h5' color='darkest-grey'>MY PROJECTS</Text>
                        <Text tag='h1' tagXl="xl-h3" color='text'>Work that I’ve done for the past 8 years</Text>
                    </div>
                </div>
                <div className='card-wrapper__container--1'>
                    <Card
                        source='/images/pictures/CoinView.jpg'
                        title='Restaurant Website Design'
                        paragraph='I worked with the guys at CBRE to redesign their entire website and mobile app fro both Android and iOS.
                 This project lasted for 4 months and was a very challenging one.'
                    />
                </div>
                <div className='card-wrapper__container--2'>
                    <Card
                        source='/images/pictures/Laptop.jpg'
                        title='Mobile Dashboard'
                        paragraph='I worked with the guys at CBRE to redesign their entire website and mobile app fro both Android and iOS. 
                This project lasted for 4 months and was a very challenging one.'
                    />
                    <img className='card-wrapper-icon' src='/images/icons/Arrow.svg'></img>
                </div>
                <div className='card-wrapper__container--3'>
                    <Card
                        source='/images/pictures/T-box.jpg'
                        title='CoinView Mobile App Design'
                        paragraph='I worked with the guys at CBRE to redesign their entire website and mobile app fro both Android and iOS.
                 This project lasted for 4 months and was a very challenging one.'
                    />
                </div>
                <div className='card-wrapper__container--4'>
                    <Card
                        source='/images/pictures/Phone.jpg'
                        title='T-Box Mobile Design'
                        paragraph='I worked with the guys at CBRE to redesign their entire website and mobile app fro both Android and iOS. 
                This project lasted for 4 months and was a very challenging one.'
                    />
                </div>
                <div className='card-wrapper__button'>
                    <Button>view all projects</Button>
                </div>
            </div>
        </Container>

    )

}