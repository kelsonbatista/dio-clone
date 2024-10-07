import styled from "styled-components";

export const HeaderContainer = styled.header`
  with: 100%;
  max-width: 80%;
  height: 47px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
`;

export const Column = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const Wrapper = styled.div`
  width: 100%;
  height: 47px;
  margin: 0 auto;
  background: #151515;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SearchContainer = styled.div`
  width: 175px;
  height: 30px;
  background: #2D2D37;
  margin: 0 12px;
  padding: 2px 5px;
`;

export const Menu = styled.div`
  font-family: 'Open Sans', sans-serif;
  font-style: normal;
  font-size: 12px;
  line-height: 25px;
  color: #FFFFFF;
  margin-right: 12px;
  text-decoration: none;
`;

export const MenuRight = styled.div`
  font-family: "Open Sans", sans-serif;
  font-style: normal;
  font-size: 12px;
  line-height: 25px;
  color: #ffffff;
  margin-right: 12px;
  text-decoration: none;
`;

export const UserAvatar = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 22px;
  border: 2px solid #fff;
`;

export const Input = styled.input`
  flex: 1;
  background: transparent;
  border: 0;
  color: #fff;
`;