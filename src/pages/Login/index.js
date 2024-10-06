import React from 'react';
import { Link } from 'react-router-dom';
import { LoginContainer } from './styles';

function Login() {
  return (
    <LoginContainer>
      <h1>Login</h1>
      <Link to="/">Voltar</Link>
    </LoginContainer>
  );
}

export default Login;
