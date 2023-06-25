import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

const App = () => {
  const [apiData, setApiData] = useState();
  const [errMsg, setErrMsg] = useState('');
  const [titleFilter, setTitleFilter] = useState('');
  const [filteredData, setFilteredData] = useState([]);
  const [genreFilter, setGenreFilter] = useState('');
  const [genresList, setGenresList] = useState([]);

  useEffect(() => {
    let apiDataSuccessfully =  true; // Vou usar para verificar se a API retornou os dados com sucesso
    const fetchAPI = async () => {
      try {
        const url = 'https://games-test-api-81e9fb0d564a.herokuapp.com/api/data'
        const headers = {
          'dev-email-address': 'luccarendall2@gmail.com'
        };

        const timeout = setTimeout(() => { // timeout de 5 segundos para mostrar mensagem c/ alerta de erro
          const msg = "O servidor demorou para responder, tente mais tarde...";
          console.error(msg);
          setErrMsg(msg);
          if (apiDataSuccessfully === true);
          // window.location.reload(); // Atualiza a página em caso de erro
        }, 5001);

        const response = await axios.get(url, { headers });
        clearTimeout(timeout); // Cancela o timeout
        const data = response.data;
        if (apiDataSuccessfully === true) {
          setApiData(data);
          // https://stackoverflow.com/questions/63928416/how-does-new-setarray-work-in-javascript
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
    //  Garante que a requisição seja cancelada caso o componente seja desmontado ou reexecutado
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

  // pegar valor do input
  const handleTitleFilter = ({ target }) => {
   setTitleFilter(target.value.toLowerCase());
  //  console.log(target.value)
  }

  const handleGenreFilter = (genre) => {
    setGenreFilter(genre);
  };

  // Cria genres apenas c/ valores únicos dos gêneros encontrados nos dados retornados da API. Mesma lógica do filtro do titulo
  useEffect(() => {
    const filteredGames = apiData && apiData.filter(
      (game) => game.genre.toLowerCase().includes(genreFilter.toLowerCase())
    );

    setFilteredData(filteredGames || []);
  }, [genreFilter, apiData]);

  // lá no estado inicial setamos a mensagem de erro como strig vazia e ela só é preenchida caso dê algum problema e se isso acontecer essa mensagem é exibida em forma de span
  if (errMsg) {
    return <span className='err1'>{errMsg}</span>
  }

  const clearBtn = () => {
    setGenreFilter('')
    setTitleFilter('')

  }

 return (
  <div>
    {apiData !== undefined && apiData.length > 0 ? (
      <>
        <form>
          <input type="search" onChange={handleTitleFilter} placeholder="Pesquisar" />
          <button type="button" onClick={ clearBtn } className='clearBtn'>Limpar filtros</button>
        </form>

       <div className="genres">
            {genresList.map((genre) => (
              <label key={genre}>
                <input
                  type="checkbox"
                  name="genre"
                  value={genre}
                  checked={genreFilter === genre}
                  onChange={() => handleGenreFilter(genre)}
                />
                {genre}
              </label>
            ))}
          </div>

        <ul className="list-game">
          {filteredData !== undefined && filteredData.length > 0 ? (
            filteredData.map((game) => (
              <li className="game-item" key={game.id}>
                <h2 className="title">{game.title}</h2>
                <img src={game.thumbnail} alt={game.title} />
                <p>{game.short_description}</p>
                <p id='genre'>{game.genre}</p>
              </li>
            ))
          ) : (
            <p className='err1'>Nenhum jogo encontrado</p>
          )}
        </ul>
      </>
    ) : (
      <p className="loading"></p>
    )}
  </div>
);

}

export default App;