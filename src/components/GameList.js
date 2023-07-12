import React from 'react';

const GameList = ({ filteredData }) => {
  if (filteredData.length === 0) {
    return <p className='err1'>Nenhum jogo encontrado</p>;
  }

  return (
    <ul className="list-game">
      {filteredData.map((game) => (
        <li className="game-item" key={game.id}>
          <h2 className="title">{game.title}</h2>
          <img src={game.thumbnail} alt={game.title} />
          <p>{game.short_description}</p>
          <p id='genre-in-card'>{game.genre}</p>
        </li>
      ))}
    </ul>
  );
};

export default GameList;
