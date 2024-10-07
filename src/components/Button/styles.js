import styled, { css } from "styled-components";

export const ButtonContainer = styled.button`
  background-color: #565656;
  border-radius: 22px;
  position: relative;
  color: #fff;
  padding: 2px 12px;
  min-width: 120px;
  width: 100%;

  ${(props) => {
    return props.$variant === "primary" && css`
      min-width: 167px;
      height: 33px;
      background: #e41050;

      &:hover {
        opacity: 0.8;
        cursor: pointer;
      }

      &::after {
        content: "";
        position: absolute;
        top: -5px;
        left: -6px;
        width: calc(100% + 10px);
        height: calc(100% + 10px);
        border-radius: 22px;
        border: 1px solid  #e41050;
      }
    `;
  }}
`;