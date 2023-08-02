import { Icons } from '../../atoms/Icons/Icons'
import { Text } from '../../atoms/Text/Text'
import './style.scss'

export const Footer = () => {

    return (
        <div className="footer">
            <div className='logo-list-container'>
            <div className='logo-list-container__logo-icons'>
                <img className='footer-image' src='/images/logos/Logo.png' />
                <Icons />
            </div>
            <ul className="footer-list">
                    <li className='footer-list__link'><Text tag='a' aType='simple'>Home</Text></li>
                    <li className='footer-list__link'><Text tag='a' aType='simple'>Store</Text></li>
                    <li className='footer-list__link'><Text tag='a' aType='simple'>About</Text></li>
                    <li className='footer-list__link'><Text tag='a' aType='simple'>Blog</Text></li>
                    <li className='footer-list__link'><Text tag='a' aType='simple'>Work</Text></li>
                    <li className='footer-list__link'><Text tag='a' aType='simple'>Reading list</Text></li>
                    <li className='footer-list__link'><Text tag='a' aType='simple'>Process</Text></li>
            </ul>
            </div>
            <div className='footer_paragraph'>
                <Text tag='p' pType='body2' color='grey-label'>Not Copyright 2020 • Robin Williams. Webflow cloneable</Text>
            </div>
        </div>
    )

}