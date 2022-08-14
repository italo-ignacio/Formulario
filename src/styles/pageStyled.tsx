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

  .pt {
    cursor: pointer;
  }

  .box1 {
    grid-column-start: 1;
    grid-column-end: 3;

    text-align: center;
    h3 {
      margin-bottom: 1rem;
    }
  }
  .box2 {
    grid-column-start: 1;
    grid-column-end: 3;

    text-align: center;
    h3 {
      margin-bottom: 1rem;
    }
  }
  .centralizar {
    position: relative;
    margin-left: auto;
    margin-right: auto;
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

export const Dupla = styled.div`
  display: grid;
  grid-template-columns: 25% 70%;
  column-gap: 1rem;

  @media (max-width: 1008px) {
    display: flex;
    flex-direction: column;
  }
`;

export const DuplaG = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  column-gap: 1rem;
  @media (max-width: 900px) {
    display: flex;
    flex-direction: column;
  }
`;

export const List = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 0.3rem;
  justify-content: center;
  margin-left: 2rem;
  h3 {
    margin-top: 1rem;
  }

  @media (max-width: 900px) {
    margin-left: 0;
  }
`;
