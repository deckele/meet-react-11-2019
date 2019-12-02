import { API_KEY } from "../constants";
import { Movie } from "../contracts";

export class MoviesAPI {
    getTopMoviesByPage = (page: number): Promise<Movie[]> => {
        return fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=${page}`)
            .then(res => res.json())
            .then(json => json.results)
    }
}