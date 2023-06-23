import styled from "styled-components";

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 12px;
  text-align: center;

  color: #ebd8ff;
  font-size: 20px;
  font-family: Montserrat;
  font-weight: 500;
  text-transform: uppercase;

  border-radius: 20px;
  cursor: pointer;

  background: linear-gradient(142deg, #471ca9 0%, #5736a3 69.1%, #4b2a99 100%);
  box-shadow: -2.5776965618133545px 6.873857021331787px 20.621572494506836px 0px
    rgba(0, 0, 0, 0.23);
`;

export const Avatar = styled.img`
  border-radius: 50%;
  border: 8px solid #f6effe;
  box-shadow: 0px 2px 3px 0px #cca9f1, 0px -2px 3px 0px #cca9f1;
`;
