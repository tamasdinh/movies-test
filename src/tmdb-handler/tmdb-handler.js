export class TmdbHandler {

    static async getPopular(page = 1) {
        const url = 'https://api.themoviedb.org/3/movie/popular'
        const response = await fetch(`${url}?api_key=${process.env.REACT_APP_API_KEY}&page=${page}`)
        return await response.json()
    }

    static async getDetails(id) {
        const url = `https://api.themoviedb.org/3/movie/${id}`
        const response = await fetch(`${url}?api_key=${process.env.REACT_APP_API_KEY}`)
        return response.json()
    }

}