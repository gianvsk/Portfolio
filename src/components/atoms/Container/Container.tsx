import clsx from "clsx"
/* import { useMemo } from "react" */
import './style.scss'

type ContainerProps = {
    
    padding?: 'xs' | 'small' | 'medium' | 'large' | 'xl' | 'padding-xs' | 'padding-60-72' | 'lg-padding-small-title-paragraph'
            | 'lg-padding-medium-title-paragraph' | 'padding-xl-half' | 'padding-xl' | 'lg-padding-right-48'
            | 'padding-0-72'
    flex? : 'flex-column-start-around' | 'flex-row-between-center' | 'title-paragraph-wrapper' | 'flex-column-start'
    flexX?: 'xs-flex-column-around-start' | 'lg-flex-column-start-start'
    backgroundColor?: 'bg-base' | 'bg-level1' | 'bg-peach' | 'bg-violet'
    direction?: 'row' | 'column' | 'adapt-row' | 'adapt-column'
    gap?: 'gap-small' | 'gap-medium' | 'gap-large' | 'gap-16' | 'lg-gap-32' | 'gap-24' | 'gap-64'
    gapX?: 'xs-gap-medium' | 'lg-gap-32' | 'lg-gap-18'
    marginTop? : 'margin-top-medium' | 'margin-top-40' | 'lg-margin-top-0'
    grid?: 'grid-2-col' | 'grid-3-col' | 'grid-row-col'
    wrap?: true | false
    height?: 'height-450-600'
    children: React.ReactNode

}

export const Container = ({padding, flex, flexX, backgroundColor, children, direction
    ,marginTop, gap, gapX, grid, wrap, height}: ContainerProps) => {

/*     const paddingText = useMemo(() => {
        switch(padding) {
            case 'xs':
                return 'padding-xs'
            case 'small':
                return 'padding-small'
            case 'medium':
                return 'padding-medium'
            case 'large':
                return 'padding-large'
            case 'xl':
                return 'padding-xl'
        }
    }, [padding]) */

    return (
        <section className={clsx('container', padding, flex, flexX, backgroundColor, direction,
                                 marginTop, gap, gapX, grid, height, {'wrap' : wrap})}>
            {children}
        </section>
    )
    
}