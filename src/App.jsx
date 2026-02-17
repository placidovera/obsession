
import './App.css'
import BannerPrincipal from './componetes/BannerPrincipal/BannerPrincipal'
import Footer from './componetes/Footer/Footer'
import LeftRightWrapper from './componetes/LefRightWrapper/LeftRightWrapper'
import Left from './componetes/Left/Left'
import Logo from './componetes/Logo/Logo'
import ContainerFoto from './componetes/NavBar/ContainerFoto/ContainerFoto'
import NavBar from './componetes/NavBar/Navbar'
import Right from './componetes/Right/Right'
import Spoty from './componetes/Spoty/Spoty'

function App() {


  return (
    <>
<NavBar/>

<BannerPrincipal/>

<LeftRightWrapper/>
<Spoty/>

<ContainerFoto/>
<Logo/>
<Footer/>
    </>
  )
}

export default App
