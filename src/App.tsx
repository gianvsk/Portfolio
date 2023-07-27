import './App.css'
import { BrandWrapper } from './components/molecules/BrandWrapper/BrandWrapper'
import { Experiences } from './components/organisms/Experiences/Experiences'
import { Introduction } from './components/organisms/Introduction/Introduction'
import { Navbar } from './components/organisms/Navbar/Navbar'
import { Philosophy } from './components/organisms/Philosophy/Philosophy'
import { ProfileImage } from './components/organisms/ProfileImage/ProfileImage'
import { Projects } from './components/organisms/Projects/Projects'
import { Skills } from './components/organisms/Skills/Skills'

function App() {

  return (
    <> 
    <Navbar/>
    <ProfileImage/>
    <Introduction/>
    <Experiences/>
    <Philosophy/>
    <Skills/>
    <BrandWrapper/>
    <Projects/>
      </>
  )
}

export default App
