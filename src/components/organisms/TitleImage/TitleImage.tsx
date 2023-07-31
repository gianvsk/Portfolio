import './style.scss'
import '../../../style/style.scss'
import { LinkUnderline } from '../../atoms/LinkUnderline/LinkUnderline'
import { Container } from '../../atoms/Container/Container'
import { Text } from '../../atoms/Text/Text'
import clsx from 'clsx'

type TitleImageProps = {
    source?: string
    padding?: 'padding-xl'
    title: string
    text:string
    buttonText: string
    titleColor: 'base' | 'text' | 'level1'
    textColor: 'grey-label' | 'darkest-grey'
    buttonColor: 'text' | 'base'
    flex?: 'flex-row-between-center' | 'flex-column-start' | 'flex-column-start-around'
    flexX?: 'xs-flex-column-around-start'
    bgColor: 'bg-peach' | 'bg-violet' | 'bg-base'
    image?: 'first' | 'second' | 'third'
    marginText?: 'margin-top-24'
    marginButton?: 'margin-top-40'
    biggerTitle?: true | false
    swapColor?: 'xl-bg-violet'
    height?: 'height-450-600'
}

export const TitleImage = ({title,text, flex, flexX, buttonText,bgColor,image, biggerTitle,titleColor, padding, height,
                            textColor, buttonColor, swapColor, marginText, marginButton} : TitleImageProps) => {

    return (
        <>
            <Container flex={flex}
                flexX={flexX}
                height={height}
                backgroundColor={bgColor}
                padding={padding}
                >
                <div className={clsx('philosophy', {'bigger-title-width' : biggerTitle}, swapColor)}>
                    <div className='philosophy__container'>
                        <Text tag='h2' color={titleColor}>{title}</Text>
                        <Text tag='p' pType='body1' color={textColor} margin={marginText}>
                            {text}
                        </Text>
                    </div>
                    <LinkUnderline color={buttonColor!} text={buttonText} margin={marginButton}/>
                </div>
                {image === 'first' && <div className='background-image first-image'/>}
                {image === 'second' && <div className='background-image second-image'/>}
                {image === 'third' &&
                <>
                <div className='indicator'>
                    <div className='indicator__single-indicator'>
                        <div className='markers-container'>
                            <img src='/images/icons/Markers.svg'></img>
                        </div>
                    </div>
                    <div className='third-image'/>
                </div> 
                </>}
            </Container>
        </>
    )

}