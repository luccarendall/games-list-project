import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './style/cardGame.css'

const FetchComponent = () => {
  const [gameData, setGameData] = useState([]);
  useEffect(() => {
    const fetchAPI = async () => {
      try {
        const url = 'https://games-test-api-81e9fb0d564a.herokuapp.com/api/data'
        const headers = {
          'dev-email-address': 'luccarendall2@gmail.com'
        };

        const response = await axios.get(url, { headers });
        const data = response.data;
        console.log(data);
        setGameData(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchAPI();
  }, []);
  return (
    <div className="card-game">
      {gameData.map((game) => (
        <div className="game-item" key={game.id}>
          <h2>{game.title}</h2>
          <img src={game.thumbnail} alt={game.title} />
          <p>{game.short_description}</p>
        </div>
      ))}
    </div>
  );
};

export default FetchComponent;