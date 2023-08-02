import './style.scss'
import '../../../style/style.scss'
import { LinkUnderline } from '../../atoms/LinkUnderline/LinkUnderline'
import { Container } from '../../atoms/Container/Container'
import { Text } from '../../atoms/Text/Text'
import clsx from 'clsx'

type TitleImageProps = {
    title: string
    text: string
    buttonText: string
    image?: 'first' | 'second' | 'third'
    biggerTitle?: boolean
}

export const TitleImage = ({ title, text, buttonText, image, biggerTitle }: TitleImageProps) => {

    return (
        <>
            <Container backgroundColor='bg-peach'>
                <div className='title-image'>
                    <div className={clsx('philosophy', { 'bigger-title-width': biggerTitle, 'xl-bg-violet': image === 'second' })}>
                        <div className='philosophy__container'>
                            <Text tag='h2' color='base'>{title}</Text>
                            <Text tag='p' pType='body1' color={'darkest-grey'} /* margin={marginText} */>
                                {text}
                            </Text>
                        </div>
                        <LinkUnderline color='base' text={buttonText} /* margin={marginButton} */ />
                    </div>
                    {image === 'first' && <div className='background-image first-image' />}
                    {image === 'second' && <div className='background-image second-image' />}
                    {image === 'third' &&
                        <>
                            <div className='indicator'>
                                <div className='indicator__single-indicator'>
                                    <div className='markers-container'>
                                        <img src='/images/icons/Markers.svg'></img>
                                    </div>
                                </div>
                                <div className='third-image' />
                            </div>
                        </>}
                </div>
            </Container>
        </>
    )

}