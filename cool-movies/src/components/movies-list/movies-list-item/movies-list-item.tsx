import React, { FC } from 'react';
import { Movie } from '../../../contracts';
import './movies-list-item.scss';
import { PICS_BASE_URL } from '../../../constants';
interface MoviesListItemProps {
    movie: Movie;
}
export const MoviesListItem: FC<MoviesListItemProps> = ({ movie }) => {
    return (
        <li className="movies-list-item">
            <img src={PICS_BASE_URL + movie.poster_path} alt=""/>
            <label 
                className="movies-item-title" 
                htmlFor="movies-item-description">
                {movie.title}
            </label>
            <p id="movies-item-description">
                {movie.overview}
            </p>
        </li>
    );
}