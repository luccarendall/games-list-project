import { useEffect, useState } from 'react';
import axios from 'axios';

const FetchComponent = () => {
  const [apiData, setApiData] = useState(); // remover quando fizer o merge em casa
  const [errMsg, setErrMsg] = useState('');

  useEffect(() => {
    let apiDataSuccessfully =  true; // Vou usar para verificar se a API retornou os dados com sucesso

    const fetchAPI = async () => {
      try {
        const url = 'https://games-test-api-81e9fb0d564a.herokuapp.com/api/data'
        const headers = {
          'dev-email-address': 'luccarendall2@gmail.com'
        };

        const timeout = setTimeout(() => { // timeout de 5 segundos para mostrar mensagem c/ alerta de erro
          const msg = "O servidor demorou para responder, tente mais tarde";
          console.error(msg);
          setErrMsg(msg);
          if (apiDataSuccessfully === true);
          window.location.reload(); // Atualiza a página em caso de erro
        }, 5000);

        const response = await axios.get(url, { headers });
        clearTimeout(timeout); // Cancela o timeout
        const data = response.data;
        if (apiDataSuccessfully === true) {
          setApiData(data);
        }
      } catch (error) {
        console.error(error);
        if (apiDataSuccessfully === true);
      }
    };

    fetchAPI();
    //  Garante que a requisição seja cancelada caso o componente seja desmontado ou reexecutado
    return () => {
      apiDataSuccessfully = false;
    };
  }, []);
  

  if (errMsg) {
    return <span>{errMsg}</span>
  }

  return ( // return provisório. Chegar em casa e mudar para o definitivo com a renderização dos cards 
  <div>
      <ul>
        {apiData !== undefined && apiData.length > 0 ? (
          apiData.map((game) => (
            <li key={game.id}>{game.title}</li>
          ))
        ) : (
          <p>Carregando...</p>
        )}
      </ul>
    </div>
  );
}

export default FetchComponent;