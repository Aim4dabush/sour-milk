import styled from "styled-components";

export const StyledEventCard = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  margin-bottom: 72px;

  button {
    background: none;
    border: none;

    img {
      height: 486px;
      width: 324px;

      &:hover {
        cursor: pointer;
        height: 516px;
        width: 354px;
      }
    }
  }

  p {
    font-weight: 500;
  }
`;
