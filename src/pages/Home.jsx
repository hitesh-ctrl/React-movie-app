import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import { fetchPopularMovie,searchMovie } from "../services/api";
import './../css/Home.css'
const Home = () =>{
    const [searchQuery,setSearchQuery] = useState("")
    const [movies,setMovies] = useState([])
    const [error,setError] = useState("")
    const [loading,setLoading] = useState(true)
    useEffect(()=>{
        const loadingMovies = async() =>{
            try {const popularMovies = await fetchPopularMovie()
            setMovies(popularMovies)
        }catch(err){
            console.log(err)
            setError("Failed to load movies....")
        }
        finally{
            setLoading(false)
        }

    }
    loadingMovies()
    },[])
    


    const handleSearch = async(e) =>{
        e.preventDefault()
        if(!searchQuery.trim()) return
        if(loading) return
        try{
            const searchResult = await searchMovie(searchQuery)
            setMovies(searchResult)
            setError(null)
        }catch(err){
            console.log(err)
            setError("Failed to search movies....")
        }
        finally{
            setLoading(false)
        }
    }
   
    return(
        <div className="home">
            <form  className="search-form" onSubmit={handleSearch}>
                <input  type="text" placeholder="Search for movies.." className="search-input"  onChange={(e) =>{setSearchQuery(e.target.value)}} />
                <button type="submit"  className="search-button">Search</button>
                
            </form>
            {error&&<div>{error}</div>}
            {loading?(<div className="error-message">Loading...</div>):(<div className="movies-grid">
                {movies
  .filter(movie => movie.title.toLowerCase().startsWith(searchQuery.toLowerCase()))
  .map(movie => (
    <MovieCard movie={movie} key={movie.id} />
))}
            </div>)}
            
        </div>
    )
}

export default Home;