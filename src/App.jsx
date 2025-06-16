
import { Acordeon } from "./assets/components/Acordeon"
import { Card } from "./assets/components/Card"
import { Carousel } from "./assets/components/Carousel"
import { Cartilla } from "./assets/components/Cartilla"
import { Navbar } from "./assets/pages/Navbar"
import { Home } from "./assets/pages/Home"
import { Modal } from "./assets/components/Modal"
import { Route, Routes } from "react-router-dom"

function App() {

  return (
    
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/navbar" element={<Navbar />} />
      <Route path="/contacto" element={<h1>CONTACTOS</h1>} />
    </Routes>


    
    
    

  )
}

export default App
