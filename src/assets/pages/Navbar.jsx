import { Link } from "react-router-dom";

export function Navbar(){
    return(
        <nav className="bg-orange-950 h-20 w-[100%] px-12 rounded-2xl text-white place-content-center">
            <Link to="/" className="text-2xl font-bold text-white text-center pl-60">Principal   </Link>
            <Link className="text-2xl font-bold text-white text-center">   Peliculas</Link>
        </nav>
    )
}