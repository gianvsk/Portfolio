import { Container } from '../../atoms/Container/Container'
import './style.scss'

export const BrandWrapper = () => {

    return (
        <Container backgroundColor='bg-base'>
            <div className='brand-wrapper'>
                <img className='brand-wrapper__image' src='/images/logos/Brand1.svg' />
                <img className='brand-wrapper__image' src='/images/logos/Brand2.svg' />
                <img className='brand-wrapper__image' src='/images/logos/Brand3.svg' />
                <img className='brand-wrapper__image' src='/images/logos/Brand4.svg' />
                <img className='brand-wrapper__image' src='/images/logos/Brand5.svg' />
                <img className='brand-wrapper__image' src='/images/logos/Brand6.svg' />
            </div>
            <div className='brand-wrapper-secondary'>
                <div className='brand-wrapper-secondary__image'>
                    <img className='brand-image' src='/images/logos/CBRE.svg' />
                </div>
                <div className='brand-wrapper-secondary__image'>
                    <img className='brand-image' src='/images/logos/EPIQ.svg' />
                </div>
                <div className='brand-wrapper-secondary__image'>
                    <img className='brand-image' src='/images/logos/F.svg' />
                </div>
                <div className='brand-wrapper-secondary__image'>
                    <img className='brand-image' src='/images/logos/FRESH.svg' />
                </div>
                <div className='brand-wrapper-secondary__image'>
                    <img className='brand-image' src='/images/logos/Brand5.svg' />
                </div>
                <div className='brand-wrapper-secondary__image'>
                    <img className='brand-image' src='/images/logos/Brand6.svg' />
                </div>
            </div>
        </Container>
    )

}