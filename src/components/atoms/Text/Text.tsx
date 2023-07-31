import { useMemo } from 'react'
import './style.scss'
import clsx from 'clsx'

type TextProps = {
    tag: 'label' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'span' | 'p' | 'a'
    tagXl?: 'xl-h3' | 'xl-h1'
    pType?: 'body1' | 'body2'
    spanType?: 'overline' | 'button' | 'h3-like' | 'h2-like'
    color?: 'text' | 'base' | 'light-grey' | 'green-accent' | 'light-primary' | 'pink-accent' | 'level1' | 'darkest-grey' |
            'middle-grey' | 'grey-label'
    modifier?: 'uppercase' | 'text-align-left'
    margin? : 'margin-top-12' | 'margin-bottom-16' | 'margin-top-16' | 'margin-top-24' | 'margin-bottom-12' | 'margin-top-40'
            | 'margin-0'
    marginLg? : 'lg-margin-bottom-32'
    children: React.ReactNode
}

export const Text = ({tag, tagXl, spanType, pType, color, modifier, margin, marginLg, children}: TextProps) => {

    const Tag = tag

    const tagStyle = useMemo(() => {
        switch(tag) {
            case 'label':
                return 'label'
            case 'h1':
                return 'heading1'
            case 'h2':
                return 'heading2'
            case 'h3':
                return 'heading3'
            case 'h4':
                return 'heading4'
            case 'h5':
                return 'heading5'
            case 'span':
                return spanType === 'overline' ? 'overline' 
                : spanType === 'h3-like' ? 'heading3' 
                : spanType === 'h2-like' ? 'h2-like' : 'button'
            case 'p':
                return pType === 'body1' ? 'body1' : 'body2'
            case 'a':
                return 'a'
                
        }
    }, [tag, spanType, pType])

    return(
        <Tag className={clsx(tagStyle, tagXl, color, modifier, margin, marginLg)}>
            {children}
        </Tag>
    )

}
