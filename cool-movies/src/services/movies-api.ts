import { API_KEY } from "../constants";
import { Movie } from "../contracts";
import { useState, useEffect } from "react";

// // old way using classes:
// export class MoviesAPI {
//     getTopMoviesByPage = (page: number): Promise<Movie[]> => {
//         return fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=${page}`)
//             .then(res => res.json())
//             .then(json => json.results)
//     }
// }

export function useMovies(initialPage: number = 1) {
    const [ movies, setMovies ] = useState<Movie[]>([]);
    const [ page, setPage ] = useState(initialPage);
    useEffect(() => {
        async function getTopMoviesByPage(page: number): Promise<void> {
            const res = await fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=${page}`);
            const json = await res.json();
            setMovies(json.results);
        }
        getTopMoviesByPage(page);
    }, [page]);
    return { movies, page, setPage };
}