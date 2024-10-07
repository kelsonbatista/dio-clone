import React from 'react';
import Button from '../Button';
import { HeaderContainer, Input, Menu, MenuRight, Row, SearchContainer, UserAvatar, Wrapper } from './styles';

function Header() {
  return (
    <Wrapper>
      <HeaderContainer>
        <Row>
          <img src="" alt="Logo" />
          <Button title="Entrar" />
          <SearchContainer>
            <Input placeholder="Search..." />
          </SearchContainer>
          <Button title="Cadastrar" />
          <Menu>Live Code</Menu>
          <Menu>Global</Menu>
        </Row>
        <Row>
          <MenuRight>Children</MenuRight>
          <UserAvatar />
        </Row>
      </HeaderContainer>
    </Wrapper>
  );
}

export default Header;
