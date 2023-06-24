import styled from "styled-components";
import line from "../../assets/rectangle1.svg";
import bgImage from "../../assets/misc-pic.png";

export const CardWrap = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 26px;

  width: 380px;
  min-height: 460px;
  padding: 36px;

  color: #ebd8ff;
  font-size: 20px;
  font-weight: 500;
  text-transform: uppercase;

  border-radius: 20px;
  background: linear-gradient(142deg, #471ca9 0%, #5736a3 69.1%, #4b2a99 100%);
  box-shadow: -2.5776965618133545px 6.873857021331787px 20.621572494506836px 0px
    rgba(0, 0, 0, 0.23);

  ::before {
    content: "";
    position: absolute;
    top: 36;
    left: 36;
    width: calc(100% - 72px);
    height: 100%;
    background-image: url(${bgImage});
    background-position: top;
    background-repeat: no-repeat;
  }

  ::after {
    content: "";
    position: absolute;
    top: 50%;
    left: 0;
    width: 380px;
    height: 8px;
    background-image: url(${line});
    background-size: cover;
    background-position: center;
    z-index: 1;
  }
`;
