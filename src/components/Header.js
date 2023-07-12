import React from 'react';
import { useNavigate } from 'react-router-dom';
import './style/Header.css';


const Header = ({ handleTitleFilter }) => {
  const navigate = useNavigate();

  const handleButton = ({ target }) => {
    console.log('fui pro login');
    navigate('/auth');
  };

  return (
      <form>
          <input type="search" onChange={handleTitleFilter} placeholder="Pesquisar" />
          <button type="button" className='header-button-login' onClick={handleButton}>Login</button>
      </form>
  );
};

export default Header;
