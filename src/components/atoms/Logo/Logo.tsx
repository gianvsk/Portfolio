import clsx from "clsx"
import './style.scss'

export type LogoProps = {
    marginAuto? : true | false
}

export const Logo = ({marginAuto} : LogoProps) => {

    return (
        <img src='/images/logos/Logo.png' className={clsx({'margin-auto': marginAuto})} />
    )
}