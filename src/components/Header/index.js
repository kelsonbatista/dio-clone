import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import avatar from '../../assets/images/avatar.png';
import logo from '../../assets/images/logo-full.webp';
import Button from '../Button';
import { UserPicture } from '../Card/styles';
import { HeaderContainer, Input, Menu, MenuRight, Row, SearchContainer, Wrapper } from './styles';

function Header(props) {
  const { autenticado } = props;
  
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
          {autenticado && (
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
          {autenticado ? (
            <UserPicture src={avatar} />
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
