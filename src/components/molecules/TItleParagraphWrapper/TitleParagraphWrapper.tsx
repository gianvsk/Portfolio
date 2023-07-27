import clsx from "clsx"
import './style.scss'

type TitleParagraphWrapperProps = {
    gap?: 'gap-8' | 'gap-12' | 'gap-16'
    children: React.ReactNode
}

export const TitleParagraphWrapper = ({gap, children} : TitleParagraphWrapperProps) => {

    return (
        <div className={clsx("title-paragraph-wrapper", gap )}>
            {children}
        </div>
    )
}