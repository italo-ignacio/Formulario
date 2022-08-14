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

  .tp {
    margin-top: 1rem;
  }
`;

export const Junta = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Plus = styled.div`
  display: flex;
  column-gap: 1rem;
  align-items: center;
  label {
    justify-content: center;
  }
  @media (max-width: 900px) {
    justify-content: center;
    align-items: center;
  }
`;

export const List = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 0.3rem;
  justify-content: center;
  align-items: center;
  h3 {
    margin-top: 1rem;
  }
`;
