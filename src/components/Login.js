import React from 'react';
import { Link } from 'react-router-dom';
import './style/Login.css';

const Login = () => {
  return (
    <div className='container-login'>
      <Link to={'/'}>Home</Link> {/* Remover após desenvolvimento */}
      <h2 className='title-lg'>Login</h2>
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
        <button type='submit' className='button-login'>Entrar</button>
      </form>
      <div className='footer-login'>
          <p> Novo por aqui?</p>
          <Link to='/register'>Criar uma conta</Link>
      </div>
    </div>
  );
};

export default Login;