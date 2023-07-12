import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth } from '../services/firebaseConfig';
import { useNavigate } from 'react-router-dom';
import './style/Login.css';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [
    signInWithEmailAndPassword,
    user,
    loading,
  ] = useSignInWithEmailAndPassword(auth);

  function handleSignIn(e){
    e.preventDefault()
    signInWithEmailAndPassword(email, password);
  }

  const handleEmail = ({ target }) => {
    setEmail(target.value);
  };

  const handlePwd = ({ target }) => {
    setPassword(target.value);
    console.log(target.value);
  };

  if(loading) {
    <p>Carregando...</p>
  }

  if(user) {
    console.log(user);
    navigate('/');
  }

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
        <button type='button' onClick={ handleSignIn } className='button-login'>Entrar</button>
      </form>
      <div className='footer-login'>
          <p> Novo por aqui?</p>
          <Link to='/register'>Criar uma conta</Link>
      </div>
    </div>
  );
};

export default Login;