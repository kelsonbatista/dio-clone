import React from 'react';
import Card from '../../components/Card';
import Header from '../../components/Header';
import { FeedContainer } from './styles';

function Feed() {

  return (
    <>
      <Header />
      <FeedContainer>
        <Card />
      </FeedContainer>
    </>
  );
}

export default Feed;
