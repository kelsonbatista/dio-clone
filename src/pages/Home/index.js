import React from 'react';
import { Link } from 'react-router-dom';
import { HomeContainer } from './styles';

function Home() {
  return (
    <HomeContainer>
      <h1>Home</h1>
      <Link to="/login">Login</Link>
    </HomeContainer>
  )
}

export default Home;
