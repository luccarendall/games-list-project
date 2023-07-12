import { useState } from 'react';

const GameList = ({ filteredData }) => {
  const [favorites, setFavorites] = useState({});

  if (filteredData.length === 0) {
    return <p className='err1'>Nenhum jogo encontrado</p>;
  }

  const handleFavButton = (gameId) => {
    setFavorites((prevFavorites) => {
      const updatedFavorites = { ...prevFavorites };
      updatedFavorites[gameId] = !updatedFavorites[gameId];
      return updatedFavorites;
    });
  };

  return (
    <ul className="list-game">
      {filteredData.map((game) => {
        const isFavorite = favorites[game.id] || false;

        return (
          <li className="game-item" key={game.id}>
            <button onClick={() => handleFavButton(game.id)}>
              {isFavorite ? 'Desfavoritar' : 'Favoritar'}
            </button>
            <h2 className="title">{game.title}</h2>
            <img src={game.thumbnail} alt={game.title} />
            <p>{game.short_description}</p>
            <p id='genre-in-card'>{game.genre}</p>
          </li>
        );
      })}
    </ul>
  );
};

export default GameList;
