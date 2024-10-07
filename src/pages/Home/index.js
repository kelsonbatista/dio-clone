import React from 'react';
import { useNavigate } from 'react-router-dom';
import banner from '../../assets/images/banner3.webp';
import Button from '../../components/Button';
import Header from '../../components/Header';
import { HomeContainer, TextContent, Title, TitleHighlight } from './styles';

function Home() {

  const navigate = useNavigate();

  const handleClickLogin = () => {
    navigate('/login');
  }

  return (
    <>
      <Header />
      <HomeContainer>
        <div>
          <Title>
            <TitleHighlight>Implemente</TitleHighlight> o seu futuro global
            agora!
          </Title>
          <TextContent>
            Domine as tecnologias utilizadas pelas empresas mais inovadoras do
            mundo e encare seu novo desafio profissional, evoluindo em
            comunidade com os melhores experts.
          </TextContent>
          <Button
            title="Começar agora"
            variant="primary"
            onClick={handleClickLogin}
          />
        </div>
        <div>
          <img src={banner} alt="Banner" />
        </div>
      </HomeContainer>
    </>
  );
}

export default Home;
