import { useState } from 'react';
import { Link } from 'react-router-dom';

import logo from '../../assets/logo.png';


function SignUp(){
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit(e){
    e.preventDefault();
    alert("ok")
  }

  return(
    <div className="container-center">
      <div className="login">
        <div className="login-area">
          <img src={logo} alt="Sistema Logo" />
        </div>

        <form onSubmit={handleSubmit}>
          <h1>Cadastre sua conta</h1>
          <input type="text" placeholder="Seu nome" value={name} onChange={ (e) => setName(e.target.value)}/>
          <input type="text" placeholder="email@email.com" value={email} onChange={ (e) => setEmail(e.target.value)}/>
          <input type="password" placeholder="senha" value={password} onChange={ (e) => setPassword(e.target.value)}/>
          
          <button type="submit">Cadastrar</button>
        </form>

        <Link to="/">Já possui uma conta?</Link>

      </div>
    </div>
  );
}
  
export default SignUp;