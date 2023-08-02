import clsx from "clsx"
import './style.scss'
import { useState } from "react"



export const Carousel = () => {


    const [slide, setSlide] = useState<number>(1)

    const plusSlides = (n : number) => {
        console.log(slide)
        return slide + n < 5 && slide + n > 0 ? setSlide(slide + n) : 
            slide >= 4 ? setSlide(1) : setSlide(4)
    }
    
    return (
        <>
            <div className='buttons-images__carousel'>
                <div className="slideshow-container">

                    <div className={clsx('mySlides', 'fade', {'block': slide === 1})}>
                        <img className={clsx('image-carousel', {'active': slide === 1})} src="/images/pictures/OldStreet.jpg" />
                    </div>

                    <div className={clsx('mySlides', 'fade', {'block': slide === 2})}>
                        <img className={clsx('image-carousel', {'active': slide === 2})} src="/images/pictures/Venezia.jpg" />
                    </div>

                    <div className={clsx('mySlides', 'fade', {'block': slide === 3})}>
                        <img className={clsx('image-carousel', {'active': slide === 3})} src="/images/pictures/Bridge.jpg" />
                    </div>

                    <div className={clsx('mySlides', 'fade', {'block': slide === 4})}>
                        <img className={clsx('image-carousel', {'active': slide === 4})} src="/images/pictures/View.jpg" />
                    </div>
                    <div className='prev-next-container'>
                        <a className="prev" onClick={() => plusSlides(-1)}>&#10094;</a>
                        <a className="next" onClick={() => plusSlides(1)}>&#10095;</a>
                    </div>
                </div>
            </div>
        </>
    )
}