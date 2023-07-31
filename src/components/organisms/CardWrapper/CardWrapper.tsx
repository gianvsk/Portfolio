import { Button } from "../../atoms/Button/Button"
import { Container } from "../../atoms/Container/Container"
import { Text } from "../../atoms/Text/Text"
import { Card } from "../../molecules/Card/Card"
import './style.scss'

export const CardWrapper = () => {

    return (
        <Container backgroundColor='bg-base' padding='padding-0-72'>
            <div className='card-wrapper'>
                <div className='card-wrapper__container'>
                    <Container flex='flex-column-start' gap='gap-medium'>
                        <Text tag='h5' color='darkest-grey'>MY PROJECTS</Text>
                        <Text tag='h1' tagXl="xl-h3" color='text'>Work that I’ve done for the past 8 years</Text>
                    </Container>
                </div>
                <div className='card-wrapper__container'>
                    <Card
                        source='/images/pictures/Laptop.jpg'
                        title='Restaurant Website Design'
                        tag2='p'
                        paragraph='I worked with the guys at CBRE to redesign their entire website and mobile app fro both Android and iOS.
                 This project lasted for 4 months and was a very challenging one.'
                        color='grey-label'
                    />
                </div>
                <div className='card-wrapper__container'>
                    <Card
                        source='/images/pictures/Phone.jpg'
                        title='Mobile Dashboard'
                        tag2='p'
                        paragraph='I worked with the guys at CBRE to redesign their entire website and mobile app fro both Android and iOS. 
                This project lasted for 4 months and was a very challenging one.'
                        color='grey-label'
                    />
                </div>
                <div className='card-wrapper__container'>
                    <Card
                        source='/images/pictures/CoinView.jpg'
                        title='CoinView Mobile App Design'
                        tag2='p'
                        paragraph='I worked with the guys at CBRE to redesign their entire website and mobile app fro both Android and iOS.
                 This project lasted for 4 months and was a very challenging one.'
                        color='grey-label'
                    />
                </div>
                <div className='card-wrapper__container'>
                    <Card
                        source='/images/pictures/T-box.jpg'
                        title='T-Box Mobile Design'
                        tag2='p'
                        paragraph='I worked with the guys at CBRE to redesign their entire website and mobile app fro both Android and iOS. 
                This project lasted for 4 months and was a very challenging one.'
                        color='grey-label'
                    />
                </div>
                <div className='card-wrapper__container'>
                    <Button>view all projects</Button>
                </div>
            </div>
        </Container>

    )

}