import React from 'react';
import logo from '../../assets/images/logo-full.webp';
import Button from '../Button';
import { HeaderContainer, Input, Menu, MenuRight, Row, SearchContainer, Wrapper } from './styles';

function Header() {
  return (
    <Wrapper>
      <HeaderContainer>
        <Row>
          <img src={logo} alt="Logo" />
          <SearchContainer>
            <Input placeholder="Search..." />
          </SearchContainer>
          <Menu>Live Code</Menu>
          <Menu>Global</Menu>
        </Row>
        <Row>
          <MenuRight>Home</MenuRight>
          <Button title="Entrar" />
          <Button title="Cadastrar" />
        </Row>
      </HeaderContainer>
    </Wrapper>
  );
}

export default Header;
