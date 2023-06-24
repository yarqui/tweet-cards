import styled, { css } from "styled-components";

export const ButtonStyled = styled.button`
  position: relative;

  display: flex;
  width: 196px;
  padding: 14px 28px;
  justify-content: center;
  align-items: center;

  font-size: 18px;
  font-weight: 600;
  text-transform: uppercase;

  border: none;
  border-radius: 10px;

  color: #373737;

  box-shadow: 0px 3.4369285106658936px 3.4369285106658936px 0px
    rgba(0, 0, 0, 0.25);
  overflow: hidden;
  cursor: pointer;
  transition: background-color 500ms ease-in-out;

  :focus {
    outline: 0;
  }

  ::before {
    content: "";
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;

    transition: left 500ms ease-in-out;
  }

  :hover::before {
    left: 0;
  }

  ${({ isFollowed }) =>
    !isFollowed &&
    css`
      background-color: #ebd8ff;

      ::before {
        background-color: #5cd3a8;
      }
    `}

  ${({ isFollowed }) =>
    isFollowed &&
    css`
      background-color: #5cd3a8;

      ::before {
        background-color: #ebd8ff;
      }
    `}
`;

export const ButtonText = styled.span`
  z-index: 1;
`;
