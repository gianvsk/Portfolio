import { BurgherMenu } from "../../atoms/BurgherMenu/BurgherMenu"
import { LinksWrapper } from "../../molecules/LinksWrapper/LinksWrapper"
import './style.scss'

export const Navbar = () => {

    return (
        <nav className="navbar">
            <img className='navbar__logo' src='/images/logos/Logo.png'/>
            <LinksWrapper/>
            <BurgherMenu/>
        </nav> 
    )

}