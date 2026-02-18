import './App.css'
import BannerPrincipal from './componetes/BannerPrincipal/BannerPrincipal'
import Fechas from './componetes/Fechas/Fechas'
import Footer from './componetes/Footer/Footer'
import LeftRightWrapper from './componetes/LefRightWrapper/LeftRightWrapper'
import Logo from './componetes/Logo/Logo'
import ContainerFoto from './componetes/NavBar/ContainerFoto/ContainerFoto'
import NavBar from './componetes/NavBar/Navbar'
import Spoty from './componetes/Spoty/Spoty'
import { BrowserRouter, Routes, Route } from "react-router-dom";

function Home() {
  return (
    <>
      <Logo/>
      <BannerPrincipal/>
      <LeftRightWrapper/>
      <Spoty/>
      <ContainerFoto/>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <NavBar/>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/fechas" element={<Fechas />} />
      </Routes>

      <Footer/>
    </BrowserRouter>
  )
}

export default App
