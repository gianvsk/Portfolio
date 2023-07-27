import { Card } from "../../molecules/Card/Card"
import { TitleParagraphWrapper } from "../../molecules/TItleParagraphWrapper/TitleParagraphWrapper"
import './style.scss'

export const Projects = () => {

    return (

        <section className='projects padding-y-64'>
            <TitleParagraphWrapper gap='gap-12'>
                <h1 className='heading1 darkest-grey'>MY PROJECTS</h1>
                <h1 className='heading1 text'>Work that I’ve done for the past 8 years</h1>
            </TitleParagraphWrapper>
            <Card 
                source='/images/pictures/Laptop.jpg' 
                title='Restaurant Website Design'
                paragraph='I worked with the guys at CBRE to redesign their entire website and mobile app fro both Android and iOS.
                 This project lasted for 4 months and was a very challenging one.'
                />
            <Card 
                source='/images/pictures/Phone.jpg'
                title='Mobile Dashboard'
                paragraph='I worked with the guys at CBRE to redesign their entire website and mobile app fro both Android and iOS. 
                This project lasted for 4 months and was a very challenging one.'
                />
            <Card 
                source='/images/pictures/CoinView.jpg'
                title='CoinView Mobile App Design'
                paragraph='I worked with the guys at CBRE to redesign their entire website and mobile app fro both Android and iOS.
                 This project lasted for 4 months and was a very challenging one.'
                />
            <Card 
                source='/images/pictures/T-box.jpg'
                title='T-Box Mobile Design'
                paragraph='I worked with the guys at CBRE to redesign their entire website and mobile app fro both Android and iOS. 
                This project lasted for 4 months and was a very challenging one.'
                />
        </section>

    )

}