import React from 'react';

const GenreFilter = ({ genresList, genreFilter, handleGenreFilter }) => {
  return (
    <div className="genres">
      {genresList.map((genre) => (
        <label key={genre}>
          <input
            type="checkbox"
            className='individual-genre'
            name="genre"
            value={genre}
            checked={genreFilter === genre}
            onChange={() => handleGenreFilter(genre)}
          />
          {genre}
        </label>
      ))}
    </div>
  );
};

export default GenreFilter;
