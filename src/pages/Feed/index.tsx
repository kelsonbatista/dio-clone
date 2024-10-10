import avatar from '../../assets/images/avatar.png';
import Card from '../../components/Card';
import Header from '../../components/Header';
import UserInfo from '../../components/UserInfo';
import useAuth from '../../hooks/useAuth';
import { CenterPageContainer, Column, FeedContainer, Title, TitleHighlight } from './styles';

function Feed() {
  const {user} = useAuth();

  return (
    <>
      <Header />
      <FeedContainer>
        {user.id ? (
          <>
            <Column $flex={3}>
              <Title>Feed</Title>
              <h2>Bem-vindo(a) {user.name}!</h2>
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
            </Column>
            <Column $flex={1}>
              <TitleHighlight># RANKING 5 TOP DA SEMANA</TitleHighlight>
              <UserInfo nome={user.name} imagem={avatar} $percentual={50} />
              <UserInfo nome="Maria Ferreira" imagem={avatar} $percentual={80} />
              <UserInfo nome="João Santos" imagem={avatar} $percentual={35} />
              <UserInfo nome="Ana Souza" imagem={avatar} $percentual={90} />
              <UserInfo nome="Carlos Oliveira" imagem={avatar} $percentual={75} />
              <UserInfo nome="Marcos Santos" imagem={avatar} $percentual={70} />
            </Column>
          </>
        ) : (
          <CenterPageContainer>
            <h1>Você precisa estar logado para acessar essa página</h1>
          </CenterPageContainer>
        )}
      </FeedContainer>
    </>
  );
}

export default Feed;
