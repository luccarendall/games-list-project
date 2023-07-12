import React from 'react';
import { useNavigate } from 'react-router-dom';

const GenreFilter = ({ genresList, genreFilter, handleGenreFilter, clearBtn }) => {
  const navigate = useNavigate();

  const handleFav = ({ target }) => { // tranformar em uma função que filtra com base no estado de fav. P isso ela vai preciasr ser criada lá no Home provavelmente
    console.log('fui pros favs');
    navigate('/favorites');
  };

  return (
    <div className='header-container'>
      <select className='header-button' value={genreFilter} onChange={(e) => handleGenreFilter(e.target.value)}>
        <option value="">Todos os gêneros</option>
        {genresList.map((genre) => (
          <option key={genre} value={genre}>
        {genre}
        </option>
        ))}
      </select>
        <button type="button" onClick={clearBtn} className='header-button'>Limpar filtros</button>
        <button type="button" onClick={handleFav} className='header-button'>Favoritos</button>
    </div>
  );
};

export default GenreFilter;
