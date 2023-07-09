import { useEffect, useState } from 'react';
import axios from 'axios';
import FilterForm from './Components/FilterForm';
import GenreFilter from './Components/GenreFilter';
import GameList from './Components/GameList';
import ErrorMessage from './Components/ErrorMessage';
import './App.css';

const App = () => {
  const [apiData, setApiData] = useState();
  const [errMsg, setErrMsg] = useState('');
  const [titleFilter, setTitleFilter] = useState('');
  const [filteredData, setFilteredData] = useState([]);
  const [genreFilter, setGenreFilter] = useState('');
  const [genresList, setGenresList] = useState([]);

  useEffect(() => {
    let apiDataSuccessfully = true;

    const fetchAPI = async () => {
      try {
        const url = 'https://games-test-api-81e9fb0d564a.herokuapp.com/api/data';
        const headers = {
          'dev-email-address': 'luccarendall2@gmail.com'
        };

        const timeout = setTimeout(() => {
          const msg = "O servidor demorou para responder, tente mais tarde...";
          console.error(msg);
          setErrMsg(msg);
          if (apiDataSuccessfully === true);
          // window.location.reload();
        }, 5001);

        const response = await axios.get(url, { headers });
        clearTimeout(timeout);
        const data = response.data;
        if (apiDataSuccessfully === true) {
          setApiData(data);
          const genres = [...new Set(data.map((game) => game.genre))];
          setGenresList(genres);
        }
      } catch (error) {
        console.error(error);
        if (apiDataSuccessfully === true) {
          const status = error.response?.status;
          switch (status) {
            case 500:
            case 502:
            case 503:
            case 504:
            case 507:
            case 508:
            case 509:
              setErrMsg("O servidor falhou em responder. Tente recarregar a página.");
              break;
            default:
              setErrMsg("O servidor não conseguiu responder por agora. Tente novamente mais tarde.");
          }
        }
      }
    };

    fetchAPI();

    return () => {
      apiDataSuccessfully = false;
    };
  }, []);

  useEffect(() => {
    const filteredGames = apiData && apiData.filter(
      (game) => game.title.toLowerCase().includes(titleFilter.toLowerCase())
    );
    setFilteredData(filteredGames || []);
  }, [titleFilter, apiData]);

  const handleTitleFilter = ({ target }) => {
    setTitleFilter(target.value.toLowerCase());
  };

  const handleGenreFilter = (genre) => {
    setGenreFilter(genre);
  };

  useEffect(() => {
    const filteredGames = apiData && apiData.filter(
      (game) => game.genre.toLowerCase().includes(genreFilter.toLowerCase())
    );

    setFilteredData(filteredGames || []);
  }, [genreFilter, apiData]);

  const clearBtn = () => {
    setGenreFilter('');
    setTitleFilter('');
  };

  if (errMsg) {
    return <ErrorMessage errMsg={errMsg} />;
  }

  return (
    <div>
      {apiData !== undefined && apiData.length > 0 ? (
        <>
          <FilterForm handleTitleFilter={handleTitleFilter} clearBtn={clearBtn} />
          <GenreFilter genresList={genresList} genreFilter={genreFilter} handleGenreFilter={handleGenreFilter} />
          <GameList filteredData={filteredData} />
        </>
      ) : (
        <div className='main-loading'>
          <p className="loading"></p>
        </div>
      )}
    </div>
  );
};

export default App;
