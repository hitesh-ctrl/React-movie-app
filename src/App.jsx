import MovieCard from "./components/MovieCard"
import Home from "./pages/Home"
import Favourites from "./pages/Favorites"
import Navbar from "./components/Navbar"
import {Route,Routes} from 'react-router-dom'
import './../src/css/index.css'
import { MovieProvider } from "./context/MovieContext"
function App() {
  

  return (
    <MovieProvider>
    <Navbar/>
    <br />
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/favourites" element={<Favourites/>}/>
    </Routes>
    </MovieProvider>
  )
}

export default App
