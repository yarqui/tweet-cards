import styled from "styled-components";
import ellipse from "../../assets/ellipse.png";
// import ellipse from "../../assets/ellipse-x2.png";

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 12px;
  text-align: center;

  color: #ebd8ff;
  font-size: 20px;
  font-weight: 500;
  text-transform: uppercase;

  border-radius: 20px;
  cursor: pointer;

  background: linear-gradient(142deg, #471ca9 0%, #5736a3 69.1%, #4b2a99 100%);
  box-shadow: -2.5776965618133545px 6.873857021331787px 20.621572494506836px 0px
    rgba(0, 0, 0, 0.23);
`;

export const AvatarWrap = styled.div`
  position: relative;

  width: 62px;
  height: 62px;
  top: 50%;
  margin-top: 53%;
`;

export const Ellipse = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 79px;
  height: 79px;
  background-image: url(${ellipse});
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  z-index: 3;
`;

export const Avatar = styled.img`
  position: relative;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
  z-index: 2;
`;
