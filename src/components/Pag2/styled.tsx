import styled from "styled-components";

export const Botao = styled.button`
  margin-top: 1.45rem;
  max-width: 30%;
  max-height: 50%;

  @media (max-width: 900px) {
    max-width: 100%;
    max-height: 100%;
    margin-top: 0;
    margin-bottom: 2rem;
  }
`;
