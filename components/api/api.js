export const api_call = {
    getTopsRatedMoviesAPI: async (page = 1) => {
        try {
            let res = await fetch(`${process.env.BASE_API}/movie/top_rated?api_key=${process.env.TMDB_API_KEY}&language=fr&page=${page}`)
            return res.json()
        } catch (error) {
            console.log(`CALL API : Error occured when getting popular movies`)
            console.log(`${error}`)
        }
    },
    getPopularMoviesAPI: async (page = 1) => {
        try {
            let res = await fetch(`${process.env.BASE_API}/movie/popular?api_key=${process.env.TMDB_API_KEY}&language=fr&page=${page}`)
            return res.json()
        } catch (error) {
            console.log(`CALL API : Error occured when getting top rated movies`)
            console.log(`${error}`)
        }
    },
    searchMovie: async (title) => {
        try {
            let res = await fetch(`${process.env.BASE_API}/search/movie?api_key=${process.env.TMDB_API_KEY}&language=fr&query=${title}`)
            return res.json()
        } catch (error) {
            console.log(`CALL API : Error occured when searching for movie with th name : ${title}`)
            console.log(`${error}`)
        }
    },

    getMovie: async (id) => {
        try {
            let res = await fetch(`${process.env.BASE_API}/movie/${id}?api_key=${process.env.TMDB_API_KEY}&language=fr`)
            return res.json()
        } catch (error) {
            console.log(`CALL API : Error occured when getting detail movie with id : ${id}`)
            console.log(`${error}`)
        }
    }
}