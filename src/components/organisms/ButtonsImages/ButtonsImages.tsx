import { useState } from 'react'
import { Button } from '../../atoms/Button/Button'
import { TitleParagraphWrapper } from '../../molecules/TItleParagraphWrapper/TitleParagraphWrapper'
import './style.scss'

export const ButtonsImages = () => {

    const [slide, setSlide] = useState(1)

    const plusSlides = (n: number) => {
        slide + n < 5 ? setSlide(slide + 1) :
            slide + n > 1 ? setSlide(slide + 1) : setSlide(4)
    }

    const checkSlide = (n: number) => {
        slide === n ? setSlide(n) : slide
    }

    return (
        <div className='buttons-images'>
            <TitleParagraphWrapper
                text1='Photography'
                text2='Here is a collection of my best travel pictures that I took while travelling places all around the world.'
            />
            <div className='buttons-images__buttons'>
                <Button size='small'>ITALY</Button>
                <Button size='small'>AUSTRALIA</Button>
                <Button size='small'>INDIA</Button>
                <Button size='small'>BRAZIL</Button>
            </div>
            <div className='buttons-images__carousel'>
                <div className="slideshow-container">

                    <div className="mySlides fade">
                        <div className="numbertext">1 / 3</div>
                        <img src="/images/pictures/OldStreet.jpg" />
                        <div className="text">Caption Text</div>
                    </div>

                    <div className="mySlides fade">
                        <div className="numbertext">2 / 3</div>
                        <img src="/images/pictures/Venezia.jpg" />
                        <div className="text">Caption Two</div>
                    </div>

                    <div className="mySlides fade">
                        <div className="numbertext">3 / 3</div>
                        <img src="/images/pictures/Bridge.jpg" />
                        <div className="text">Caption Three</div>
                    </div>

                    <div className="mySlides fade">
                        <div className="numbertext">4 / 4</div>
                        <img src="/images/pictures/View.jpg" />
                        <div className="text">Caption Three</div>
                    </div>

                    <a className="prev" onClick={() => plusSlides(-1)}>&#10094;</a>
                    <a className="next" onClick={() => plusSlides(1)}>&#10095;</a>
                </div>

                <div className='dots'>
                    <span className="dot" onClick={() => checkSlide(1)}></span>
                    <span className="dot" onClick={() => checkSlide(2)}></span>
                    <span className="dot" onClick={() => checkSlide(3)}></span>
                    <span className="dot" onClick={() => checkSlide(4)}></span>
                </div>
            </div>
            <div className='buttons-images__images'>
                <img className='image-from-carousel' src="/images/pictures/OldStreet.jpg" />
                <img className='image-from-carousel' src="/images/pictures/Venezia.jpg" />
                <img className='image-from-carousel' src="/images/pictures/Bridge.jpg" />
                <img className='image-from-carousel' src="/images/pictures/View.jpg" />
            </div>
        </div>
    )

}