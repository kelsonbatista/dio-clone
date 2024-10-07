import React from 'react';
import avatar from '../../assets/images/avatar.png';
import Card from '../../components/Card';
import Header from '../../components/Header';
import UserInfo from '../../components/UserInfo';
import { Column, FeedContainer, Title, TitleHighlight } from './styles';

function Feed() {

  return (
    <>
      <Header />
      <FeedContainer>
        <Column flex={3}>
          <Title>Feed</Title>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </Column>
        <Column flex={1}>
          <TitleHighlight># RANKING 5 TOP DA SEMANA</TitleHighlight>
          <UserInfo nome="José da Silva" imagem={avatar} percentual={50} />
          <UserInfo nome="Maria Ferreira" imagem={avatar} percentual={80} />
          <UserInfo nome="João Santos" imagem={avatar} percentual={35} />
          <UserInfo nome="Ana Souza" imagem={avatar} percentual={90} />
          <UserInfo nome="Carlos Oliveira" imagem={avatar} percentual={75} />
          <UserInfo nome="Marcos Santos" imagem={avatar} percentual={70} />
        </Column>
      </FeedContainer>
    </>
  );
}

export default Feed;
