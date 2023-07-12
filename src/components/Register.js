import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth } from '../services/firebaseConfig';
import { useNavigate } from 'react-router-dom';
import './style/Login.css';

const Auth = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [
    createUserWithEmailAndPassword,
    loading,
  ] = useCreateUserWithEmailAndPassword(auth);

  function handleSignUp(e){
    e.preventDefault()
    createUserWithEmailAndPassword(email, password);
    navigate('/auth');
  }

  if(loading) {
    <p>Carregando...</p>
  }

  const handleEmail = ({ target }) => {
    setEmail(target.value);
  };

  const handlePwd = ({ target }) => {
    setPassword(target.value);
  };

  return (
    <div className='container-login'>
      <h2 className='title-lg'>Crie sua conta</h2>
      <form className='form-login'>
        <div>
          <input
            type='email'
            placeholder='Seu email'
            className='input-login'
            onChange={handleEmail}
            required
          />
        </div>
        <div>
          <input
            type='password'
            placeholder='Senha'
            className='input-login'
            onChange={handlePwd}
            required
          />
        </div>
        <button type='submit' onClick={ handleSignUp } className='button-login'>Registrar</button>
      </form>
      <div className='footer-login'>
          <p>Já possui uma conta?</p>
          <Link to='/auth'>Faça login</Link>
      </div>
    </div>
  );
};

export default Auth;