import { Cartilla } from "../components/Cartilla";
import { Modal } from "../components/Modal";
import { Navbar } from "../components/Navbar";

export function Home1(){
    return(
        <div className="grid grid-cols-4 grid-rows-5 gap-4 mx-96 ">
            <div className="col-span-4 text-center text-4xl font-bold underline bg-amber-300">CINEMATECA BOLIVIANA</div>
            <div className="col-span-4 row-start-2 bg-amber-300"><Navbar/></div>
            <div className="col-span-4 row-start-3 bg-amber-300"><Cartilla/></div>
            <div className="col-span-4 row-start-4 bg-amber-300 place-content-center "></div>
            <div className="col-span-2 row-start-5 bg-amber-300 place-content-center">ELIAS BENJAMIN VARGAS VALDIVIA</div>
            <div className="col-span-2 col-start-3 bg-amber-300 row-start-5 place-content-center">PROGRAMACION WEB 2 1-2025</div>
        </div>
    )
}