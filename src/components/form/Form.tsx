import { Button } from "../atoms/Button/Button"
import { Text } from "../atoms/Text/Text"
import './style.scss'

export const Form = () => {

    return (
        <div className="form">
            <div className="label-input-container">
            <Text tag='span' spanType='p-like' color='text' modifier='text-align-left'>Name</Text>
            <input className='form__input' type='text'/>
            </div>
            <div className="label-input-container">
            <Text tag='span' spanType='p-like' color='text' modifier='text-align-left'>Email</Text>
            <input className='form__input' type='email'/>
            </div>
            <div className="label-input-container">
            <Text tag='span' spanType='p-like' color='text' modifier='text-align-left'>Message</Text>
            <textarea className='form__textarea' />
            </div>
            <Button type='submit'>Let's get started</Button>
        </div>
    )
}