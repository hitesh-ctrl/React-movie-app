import './../css/Favorites.css'
import { useMovieContext } from '../context/MovieContext';
import  MovieCard  from './../components/MovieCard'

const Favourites = () =>{
    const {favorites} = useMovieContext()
    if(favorites){

    
    return(<div>
        <h2>Your favourites</h2>
       <div className="movies-grid">
                {favorites.map(movie => (
                            <MovieCard movie={movie} key={movie.id} />
                        ))}
            </div>
    </div>
    )


}}

export default Favourites;