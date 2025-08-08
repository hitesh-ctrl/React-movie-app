import './../css/Navbar.css'

import { Link } from "react-router-dom"
const Navbar =()=>{
    return(<nav>
        <div>

            <Link to="/">Movie aPP</Link>
        </div>
        <div >
            <Link to="/">Home</Link>
            <Link to="/Favourites">Favourites</Link>
        </div>
    </nav>)
}

export default Navbar;