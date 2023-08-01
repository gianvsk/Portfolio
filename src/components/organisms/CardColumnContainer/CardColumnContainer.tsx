import { LinkUnderline } from "../../atoms/LinkUnderline/LinkUnderline"
import { Text } from "../../atoms/Text/Text"
import { Card } from "../../molecules/Card/Card"
import './style.scss'

export const CardColumnContainer = () => {

    return (
        <div className="card-column-container">
            <div className='card-column-container__titles'>
                <Text tag='h2' color='text'>This is what people say about me</Text>
                <Text tag='p' pType='body2' color='grey-label' margin='margin-top-16'>
                    Here are a few lines from peoplpe who I have worked with over the
                    past 8+ years in my design career.</Text>
                <LinkUnderline text='See all testimonials' color='text' margin='margin-top-40'/>
            </div>
            <div className='card-column-container__cards-container'>
                <Card
                    source='/images/pictures/Desktop.jpg'
                    paragraph='"Robin is one of the best designers I have worked with in my entire life. 
                    He is a designer who is very capable of taking up complex projects and delivers impeccable design."'
                     >
                    <div>
                    <Text tag='h5' color='grey-label'>Richard Owens</Text>
                    <Text tag='p' pType='body2' color='grey-label' margin='margin-0'>CEO, Company 1</Text>
                    </div>
                </Card>
                <Card
                    source='/images/pictures/People.jpg'
                    paragraph='"I think Robin has an incredible gift. It has been an absolute pleasure to work with a designer of this caliber."'
                     >
                    <div>
                    <Text tag='h5' color='grey-label'>Emily Parker</Text>
                    <Text tag='p' pType='body2' color='grey-label' margin='margin-0'>CEO, Company 2</Text>
                    </div>
                </Card>
                <Card
                    source='/images/pictures/Group.jpg'
                    paragraph='"All I can say that, Robin is a phenomenal designer. The wavelength at which he thinks is astoundaing. 
                    I love the focus, passion and attention to detial in the design."'
                     >
                    <div>
                    <Text tag='h5' color='grey-label'>Vincent Rudd</Text>
                    <Text tag='p' pType='body2' color='grey-label' margin='margin-0'>CEO, Company 3</Text>
                    </div>
                </Card>
            </div>
        </div>
    )

}