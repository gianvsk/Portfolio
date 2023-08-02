import clsx from "clsx"
/* import { useMemo } from "react" */
import './style.scss'

type ContainerProps = {
    
    padding?: 'padding-xl' | 'lg-padding-right-48'
    backgroundColor?: 'bg-base' | 'bg-level1' | 'bg-peach' | 'bg-violet'
    children: React.ReactNode

}

export const Container = ({padding, backgroundColor, children}: ContainerProps) => {

    return (
        <section className={clsx('container', padding, backgroundColor)}>
            {children}
        </section>
    )
    
}