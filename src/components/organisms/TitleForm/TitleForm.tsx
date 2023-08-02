import { Form } from "../../form/Form"
import './style.scss'
import { TitleTextWrapper } from "../../molecules/TitleTextWrapper/TitleTextWrapper"

export const TitleForm = () => {

    return(
        <div className="title-form">
            <TitleTextWrapper 
                title="Let's talk business"
                text='Now that you know a lot about me, let me know if you are interested to work with me.'
                />
            <div className='title-form__form'>
                <Form/>
            </div>
        </div>
    )
}