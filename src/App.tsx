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
import { TitleForm } from './components/organisms/TitleForm/TitleForm'
import { Footer } from './components/organisms/Footer/Footer'

function App() {

  return (
    <>
      <Navbar />
      <Hero />
      <TitleNumberParagraph />
      <TitleImage
        title='Philosophy & values'
        text='I think everyone wants the same thing - relationship with humanity, peace with the metaphysical, 
      and experience with the universe. I try to grasp these things with my values: authenticity, creativity, & hospitality.'
        buttonText='More about me'
        image='first'
      />
      <TitleList />
      <BrandWrapper />
      <CardWrapper />
      <TitleImage
        title='Instagram'
        text='If you area a person who enjoys photography, then I highly recommend that you check out my Instagram. 
        I’m an avid traveller and I capture the best moments that I would love to cherish with the world'
        buttonText='Follow me on IG'
        image='second'
        biggerTitle={true}
      />
      <CentralImage/>
      <CardColumnContainer/>
      <ButtonsImages/>
      <TitleForm/>
      <Footer/>
    </>
  )
}

export default App
