import { BurgherMenu } from "../../atoms/BurgherMenu/BurgherMenu"
import { Logo } from "../../atoms/Logo/Logo"
import { LinksWrapper } from "../../molecules/LinksWrapper/LinksWrapper"
import './style.scss'

export const Navbar = () => {

    return (
        <nav className="navbar">
            <Logo marginAuto={true}/>
            <LinksWrapper/>
            <BurgherMenu/>
        </nav> 
    )

}