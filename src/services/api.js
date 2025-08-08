const API_KEY = "c2a1f7286ba10d783a7f04e50900df36"
const BASE_URL = "https://api.themoviedb.org/3"

export const fetchPopularMovie = async () => {
    const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`)
    const resJson = await response.json()
    return resJson.results
}
export const searchMovie = async (query) => {
    const response = await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`)
    const resJson = await response.json()
    return resJson.results
}
