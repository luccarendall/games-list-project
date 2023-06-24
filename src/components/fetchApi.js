import { useEffect } from 'react';
import axios from 'axios';

const FetchComponent = () => {
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
      } catch (error) {
        console.error(error);
      }
    };

    fetchAPI();
  }, []);
}

export default FetchComponent;