import styled from "styled-components";
import { IProgress } from "./types";

export const UserInfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 24px;
`;

export const UserPicture = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  border: 3px solid #fff;
  margin-right: 12px;
`;

export const NameText = styled.div`
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

export const Progress = styled.div<IProgress>`
  width: 180px;
  height: 6px;
  background: #fff;

  border-radius: 3px;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: ${(props) => props.$percentual}%;
    height: 6px;
    background: #23DD7A;
    border-radius: 3px;
  }
`;
