import './../css/MovieCard.css'
import { useMovieContext } from '../context/MovieContext'
const MovieCard = ({movie})=>{
    const {favorites,addToFavorites,removeFromFavorites,isFavorite} =useMovieContext()
    const fav = isFavorite(movie.id)
    const onFavBtnClick = (e) =>{
        e.preventDefault()
        if(fav){
            removeFromFavorites(movie.id)
        } 
        else addToFavorites(movie)
    }
    return(
        <div className = "movie-card">
            <div className="movie-poster">
                <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
            
                <div className="movie-overlay">
                    <button className={`favorite-btn ${fav?"active":""} `} onClick={onFavBtnClick}>🤍</button>
                </div>
            </div>
            <div className="movie-info">
                <h3>{movie.title}</h3>
                <h3>{movie.release_date?.split("-")[0]}</h3>
            </div>
        </div>
    )
}

export default MovieCard;