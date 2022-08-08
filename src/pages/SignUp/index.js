import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import './signup.css';
import { AuthContext } from '../../contexts/auth';

function SignUp() {
   /* meus estados */
  
    
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { signUp } = useContext(AuthContext);

  function handleSubmit(e){
    /* função para submeter os dados atualiza page*/
    e.preventDefault();
    if(nome !== '' && email !== '' && password !== ''){
      signUp(email, password, nome)
    }

  }

  return (
    <div className="container-center">
      <div className="login">
        <div className="login-area">
        </div>
        <form onSubmit={handleSubmit}>
          <h1>Cadastrar uma conta</h1>
          <input type="text" name="nome" value={nome} onChange={(e) => setNome(e.target.value)} placeholder="nome" />
          <input type="text" placeholder="email@email.com" value={email} onChange={ (e) => setEmail(e.target.value) }/>
          <input type="password" placeholder="*******" value={password} onChange={(e) => setPassword(e.target.value) } />
          <button type="submit">Cadastrar</button>
        </form>  

        <Link to="/">Já tem uma conta? Entre</Link>
      </div>
    </div>
  );
}

export default SignUp;