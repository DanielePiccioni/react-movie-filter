import { movies } from "./MovieData";
import React, { useState } from "react";

export default function MovieFilter() {
    const [selectedGenre, setSelectedGenre] = useState('')

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
        </div>
    )
}