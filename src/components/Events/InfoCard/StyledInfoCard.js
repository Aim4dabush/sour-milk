import styled from "styled-components";

export const StyledInfoCard = styled.div`
  background: #736a6a;
  border-radius: 20px;
  color: #ffffff;
  display: flex;
  height: 564px;
  justify-content: space-evenly;
  left: 408px;
  position: absolute;
  top: 60px;
  width: 1080px;
  z-index: 1;

  &.extend {
    height: 764px;
  }

  img {
    height: 450px;
    width: 288px;
  }

  .info {
    display: flex;
    flex-direction: column;

    .banner {
      color: #58a1f7;
      font-size: 30px;
    }
  }

  .info-button {
    bottom: 0;
    border: none;
    background: none;
    color: #ffffff;
    font-size: 20px;
    text-decoration: underline;
    position: absolute;
    right: 20px;

    &:hover {
      color: #fac601;
      cursor: pointer;
    }
  }
`;
