import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import avatar from '../../assets/images/avatar.png';
import logo from '../../assets/images/logo-full.webp';
import { AuthContext } from '../../context/auth';
import Button from '../Button';
import { UserPicture } from '../Card/styles';
import { HeaderContainer, Input, Menu, MenuRight, Row, SearchContainer, TextDecorationNone, Wrapper } from './styles';

function Header() {
  const { user, handleSignOut } = useContext(AuthContext);
  
  const navigate = useNavigate();

  const handleClickRegister = () => {
    navigate("/register");
  };

  const handleClickLogin = () => {
    navigate("/login");
  };

  return (
    <Wrapper>
      <HeaderContainer>
        <Row>
          <Link to="/">
            <img src={logo} alt="Logo" />
          </Link>
          {user.id && (
            <>
              <SearchContainer>
                <Input placeholder="Search..." />
              </SearchContainer>
              <Menu>Live Code</Menu>
              <Menu>Global</Menu>
            </>
          )}
        </Row>
        <Row>
          {user.id ? (
            <>
              {user.name}
              <UserPicture src={avatar} />
              <Link to="/" onClick={handleSignOut}><TextDecorationNone>Sair</TextDecorationNone></Link>
            </>
          ) : (
            <>
              <MenuRight>Home</MenuRight>
              <Button title="Entrar" onClick={handleClickLogin} />
              <Button title="Cadastrar" onClick={handleClickRegister} />
            </>
          )}
        </Row>
      </HeaderContainer>
    </Wrapper>
  );
}

export default Header;
