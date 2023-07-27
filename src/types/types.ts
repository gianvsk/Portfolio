
export type TextProps = {
    tag: 'label' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'p' | 'span'
    size?: 'f-size-16' | 'f-size-18'
    theme?: 'light' | 'dark'
    h1Type?: 'label'
    spanType?: 'overline' | 'button'
    color?: 'base' | 'level1' | 'light-grey' | 'dark-grey' | 'text' | 'primary' | 'green-accent' | 'pink-accent' | 'peach-accent'
            | 'violet-accent'
    spacing?: 'padding-top-40'
    children: React.ReactNode
}