
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
    
    <div className="grid grid-cols-4 grid-rows-4 gap-4 mx-96">
                <div className="col-span-4 bg-amber-900 text-center font-bold underline text-6xl h-20">CINEMATECA BOLIVIANA</div>
                <div className="col-span-4 row-start-2 h-20 w-[100%]"><Navbar/></div>
                <div className="col-span-4 row-start-3 bg-amber-900" ><Cartilla/></div>
                <div className="col-span-2 row-start-4 bg-amber-900 text-center pt-10">Elias Benjamin Vargas Valdivia</div>
                <div className="col-span-2 col-start-3 row-start-4 bg-amber-900 text-center pt-10">Programacion Web 2</div>
            </div>


    
    
    

  )
}

export default App
