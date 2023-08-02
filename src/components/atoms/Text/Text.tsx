import { useMemo } from 'react'
import './style.scss'
import clsx from 'clsx'

type TextProps = {
    tag: 'label' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'span' | 'p' | 'a'
    aType?: 'simple'
    tagXl?: 'xl-h3' | 'xl-h1'
    pType?: 'body1' | 'body2'
    spanType?: 'overline' | 'button' | 'h3-like' | 'h2-like' | 'p-like'
    color?: 'text' | 'base' | 'light-grey' | 'green-accent' | 'light-primary' | 'pink-accent' | 'level1' | 'darkest-grey' |
            'middle-grey' | 'grey-label'
    modifier?: 'uppercase' | 'text-align-left'
    margin?: 'margin-top-16' | 'margin-top-24' | 'margin-top-40'
            | 'margin-0'
    colorHover?: 'hover-base' | 'hover-text'
    children: React.ReactNode
}

export const Text = ({tag, tagXl, aType, spanType, pType, color, modifier, margin, children}: TextProps) => {

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
                switch(spanType) {
                    case 'button':
                        return 'button'
                    case 'h3-like':
                        return 'h3-like'
                    case 'overline' : 
                        return 'overline'
                    case 'p-like':
                        return 'p-like'
                    default:
                        return ''
                }
            case 'p':
                return pType === 'body1' ? 'body1' : 'body2'
            case 'a':
                return aType === 'simple' ? 'simple' : 'a'
                
        }
    }, [tag, spanType, pType, aType])

    return(
        <Tag className={clsx(tagStyle, tagXl, color, modifier, margin)}>
            {children}
        </Tag>
    )

}
