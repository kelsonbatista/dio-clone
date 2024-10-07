import React from 'react';
import { FiThumbsUp } from 'react-icons/fi';
import avatar from '../../assets/images/avatar.png';
import fundo1 from '../../assets/images/fundo1.jpg';
import { CardContainer, Content, HasInfo, ImageBackground, ImageWrapper, PostInfo, UserInfo, UserPicture } from './styles';

function Card() {
  return (
    <CardContainer>
      <ImageWrapper>
        <ImageBackground src={fundo1} />
      </ImageWrapper>
      <Content>
        <UserInfo>
          <UserPicture src={avatar} />
          <div>
            <h4>Nome do usuário</h4>
            <p>tempo da postagem</p>
          </div>
        </UserInfo>
        <PostInfo>
          <h4>Projeto para curso de HTML e CSS.</h4>
          <p>
            Projeto feito o curso de html e css no bootcamp dio do Global
            Avanade... <strong>Saiba Mais</strong>
          </p>
        </PostInfo>
        <HasInfo>
          <h4>#HTML #CSS #javascript</h4>
          <p>
            <FiThumbsUp size={16} color="#fff" />
            12
          </p>
        </HasInfo>
      </Content>
    </CardContainer>
  );
}

export default Card;
