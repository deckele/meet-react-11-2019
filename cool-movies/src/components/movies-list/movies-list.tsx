import React, { FC, useState, useEffect } from 'react';
import { Movie } from '../../contracts';
import { useMovies } from '../../services/movies-api';
import './movies-list.scss';
import { MoviesListItem } from './movies-list-item/movies-list-item';

export const MoviesList: FC = () => {
    const { movies, page, setPage } = useMovies();
    function handlePageChanged(e: React.ChangeEvent<HTMLInputElement>) {
        const value = e.target.value;
        setPage(Number.parseInt(value));
    }
    return (
        <>
            <input 
                onChange={handlePageChanged} 
                type="number"
                value={page}
            />
            <ul className="movies-list">
                {movies.map(movie => <MoviesListItem movie={movie} />)}
            </ul>
        </>
    );
}