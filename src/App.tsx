import './App.css'
import { BrandWrapper } from './components/molecules/BrandWrapper/BrandWrapper'
import { TitleNumberParagraph } from './components/organisms/TitleNumberParagraph/TitleNumberParagraph'
import { Hero } from './components/organisms/Hero/Hero'
import { Navbar } from './components/organisms/Navbar/Navbar'
import { TitleImage } from './components/organisms/TitleImage/TitleImage'
import { CardWrapper } from './components/organisms/CardWrapper/CardWrapper'
import { TitleList } from './components/organisms/TitleList/TitleList'
import { CentralImage } from './components/organisms/CentralImage/CentralImage'
import { CardColumnContainer } from './components/organisms/CardColumnContainer/CardColumnContainer'
import { ButtonsImages } from './components/organisms/ButtonsImages/ButtonsImages'

function App() {

  return (
    <>
      <Navbar />
      <Hero />
      <TitleNumberParagraph />
      <TitleImage
        height='height-450-600'
        source='/images/pictures/Sphere.jpg'
        flex='flex-row-between-center'
        flexX='xs-flex-column-around-start'
        title='Philosophy & values'
        titleColor='base'
        text='I think everyone wants the same thing - relationship with humanity, peace with the metaphysical, 
      and experience with the universe. I try to grasp these things with my values: authenticity, creativity, & hospitality.'
        textColor='darkest-grey'
        buttonText='More about me'
        buttonColor='base'
        bgColor='bg-peach'
        image='first'
      />
      <TitleList />
      <BrandWrapper />
      <CardWrapper />
      <TitleImage
        height='height-450-600'
        source='/images/pictures/Plane.jpg'
        flex='flex-row-between-center'
        flexX='xs-flex-column-around-start'
        title='Instagram'
        titleColor='base'
        text='If you area a person who enjoys photography, then I highly recommend that you check out my Instagram. 
        I’m an avid traveller and I capture the best moments that I would love to cherish with the world'
        textColor='darkest-grey'
        buttonText='Follow me on IG'
        buttonColor='base'
        bgColor='bg-peach'
        image='second'
        biggerTitle={true}
        swapColor='xl-bg-violet'
      />
      <CentralImage/>
      <CardColumnContainer/>
      <ButtonsImages/>
    </>
  )
}

export default App
