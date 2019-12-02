import React, { FC, useState } from 'react';
import { Movie } from '../../contracts';
import { MoviesAPI } from '../../services/movies-api';
import './movies-list.scss';

export const MoviesList: FC = () => {
    const moviesApi = new MoviesAPI();
    const [ movies, setMovies ] = useState([]);
    moviesApi
        .getTopMoviesByPage(1)
        .then(res => setMovies(res as any));
    return <div>{JSON.stringify(movies)}</div>;
}