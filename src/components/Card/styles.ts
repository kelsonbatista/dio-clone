import styled from "styled-components";

export const CardContainer = styled.div`
  width: 100%;
  background: #3B3450;
  position: relative;
  margin-bottom: 24px;
`;

export const ImageWrapper = styled.div`
  width: 100%;
  height: 180px;
  overflow: hidden;
  display: flex;
`;

export const ImageBackground = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transform: translateY(0);
`;

export const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 12px;
`;

export const UserInfo = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 12px;

  div {
    margin-left: 12px;
  }

  h4 {
    font-family: "Open Sans", sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 25px;
    color: #fff;
  }

  p {
    font-family: "Open Sans", sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;
    color: #fff;
  }
`;

export const UserPicture = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  border: 2px solid #fff;
  margin: 0 10px;
`;

export const PostInfo = styled.div`
  margin-bottom: 12px;

  h4 {
    font-family: "Open Sans", sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 25px;
    color: #fff;
  }

  p {
    font-family: "Open Sans", sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;
  }
`;

export const HasInfo = styled.div`
  margin-top: 12px;

  h4 {
    font-family: "Open Sans", sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 12px;
    line-height: 16px;
    color: #fff;
  }

  p {
    font-family: "Open Sans", sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 22px;
  }
`;
