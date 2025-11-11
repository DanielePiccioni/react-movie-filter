import { movies } from "./MovieData";
import React, { useState, useEffect } from "react";

export default function MovieFilter() {
    const [selectedGenre, setSelectedGenre] = useState('')
    const [filteredMovies, setFilteredMovies] = useState(movies)

    useEffect(() => {
        if (selectedGenre === '') {
            setFilteredMovies(movies);
        } else {
            setFilteredMovies(movies.filter(movie => movie.genre === selectedGenre));
        }
    }, [selectedGenre])


    return (
        <div>
            <h2>Genere Filmeow</h2>

            <label>Scegli un genere: </label>
            <select
                id="genreSelect" value={selectedGenre} onChange={(e) => setSelectedGenre(e.target.value)}>
                <option value="">Tutti i generi</option>
                <option value="Fantascienza">Fantascienza</option>
                <option value="Thriller">Thriller</option>
                <option value="Romantico">Romantico</option>
                <option value="Azione">Azione</option>
            </select>

            <p>Genere selezionato: {selectedGenre ? selectedGenre : 'Tutti'}</p>
            <p>Film totali: {filteredMovies.length}</p>
            <ul>
                {filteredMovies.map((movie, index) => (
                    <li key={index}>
                        {movie.title} - <em>{movie.genre}</em>
                    </li>
                ))}
            </ul>
        </div>
    )
}