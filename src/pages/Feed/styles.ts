import styled from "styled-components";
import { IColumn } from "./types";

export const FeedContainer = styled.main`
  width: 100%;
  max-width: 80%;
  margin: 0 auto;
  margin-top: 120px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const Title = styled.h3`
  font-family: "Open Sans", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 25px;
  color: #fff;
  margin-bottom: 24px;
`;

export const TitleHighlight = styled.h3`
  font-family: "Open Sans", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 25px;
  color: #ffffff80;
  margin-bottom: 24px;
`;

export const TextContent = styled.p`
  font-family: "Open Sans", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  width: 420px;
  margin-bottom: 20px;
  line-height: 22px;
  color: #d9d9d9;
`;

export const Column = styled.div<IColumn>`
  flex:${(props) => props.$flex};
  padding-right: 24px;
`;

export const CenterPageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
  width: 100%;
  margin-top: -50px;
`;