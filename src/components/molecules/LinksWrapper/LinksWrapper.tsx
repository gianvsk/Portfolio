import { Link } from "../../atoms/Link/Link"
import './style.scss'

export const LinksWrapper = () => {

    return (
        <div className="links-wrapper">
            <Link text={'Experience'}/>
            <Link text={'Work'}/>
            <Link text={'Photograpy'}/>
            <Link text={'Contact'}/>
        </div>
    )

}