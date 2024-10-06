import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../components/Button';
import { HomeContainer } from './styles';

function Home() {

  return (
    <HomeContainer>
      <h1>Home</h1>
      <Button title="Login" />
      <Button title="Register" variant="secondary" />
      <Link to="/login">Login</Link>
    </HomeContainer>
  )
}

export default Home;
