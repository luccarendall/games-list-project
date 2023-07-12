import React from 'react';
import { Link } from 'react-router-dom';
import './style/Login.css';

const Auth = () => {
  return (
    <div className='container-login'>
      <h2 className='title-lg'>Crie sua conta</h2>
      <form className='form-login'>
        <div>
          <input
            type='email'
            placeholder='Seu email'
            className='input-login'
            required
          />
        </div>
        <div>
          <input
            type='password'
            placeholder='Senha'
            className='input-login'
            required
          />
        </div>
        <button type='submit' className='button-login'>Registrar</button>
      </form>
      <div className='footer-login'>
          <p>Já possui uma conta?</p>
          <Link to='/auth'>Faça login</Link>
      </div>
    </div>
  );
};

export default Auth;