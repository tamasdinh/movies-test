const API_KEY = 'f033c108e832c39fe7a4a8722ea80a52'

export class TmdbHandler {

    static async getPopular(page = 1) {
        const url = 'https://api.themoviedb.org/3/movie/popular'
        const response = await fetch(`${url}?api_key=${API_KEY}&page=${page}`)
        return await response.json()
    }

    static async getDetails(id) {
        const url = `https://api.themoviedb.org/3/movie/${id}`
        const response = await fetch(`${url}?api_key=${API_KEY}`)
        return response.json()
    }

}