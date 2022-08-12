import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  column-gap: 1rem;

  @media (max-width: 900px) {
    display: flex;
    flex-direction: column;
    text-align: center;
  }
  .nul {
    display: flex;
    visibility: hidden;
    @media (max-width: 900px) {
      margin-top: 1rem;
    }
  }
  .cel {
    @media (max-width: 900px) {
      margin-top: 1rem;
    }
  }
`;

export const Junta = styled.div`
  display: flex;
  flex-direction: column;
`;
