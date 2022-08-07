
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './signin.css';
import loginimg from '../../asserts/loginimg.png'

function SignIn() {
   /* meus estados */
  
    
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit(e){
    e.preventDefault();
    alert('CLICOU')
  }

  return (
    <div className="container-center">
     <img className='sign-in' src={loginimg} alt="Logo" />
      <div className="login">
        <div className="login-area">
        </div>
        <form onSubmit={handleSubmit}>
          <h1>Entrar</h1>
          <input type="text" name="nome" value={nome} onChange={e => setNome(e.target.value)} placeholder="nome" />
          <input type="text" placeholder="email@email.com" value={email} onChange={ (e) => setEmail(e.target.value) }/>
          <input type="password" placeholder="*******" value={password} onChange={(e) => setPassword(e.target.value) } />
          <button type="submit">Acessar</button>
        </form>  

        <Link to="/register">Criar uma conta</Link>
      </div>
    </div>
  );
}

export default SignIn;