import { Form } from "../../form/Form"
import { Text } from "../../atoms/Text/Text"
import './style.scss'

export const TitleForm = () => {

    return(
        <div className="title-form">
            <div className='title-form__titles'>
                <Text tag='h1' color='text' tagXl='xl-h3'>Let's talk business</Text>
                <Text tag='p' pType='body1' color='grey-label'>Now that you know a lot about me, let me know if you are interested to work with me.</Text>
            </div>
            <div className='title-form__form'>
                <Form/>
            </div>
        </div>
    )
}