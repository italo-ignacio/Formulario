import styled from "styled-components";

export const DivButtons = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  column-gap: 5rem;
  justify-content: space-around;
  margin-top: 2rem;
  text-align: center;
  @media (max-width: 900px) {
    padding: 1rem 2rem;
    margin-top: 0;
    .ce {
      margin-top: 1rem;
    }
  }
  @media (max-width: 320px) {
    display: flex;
    flex-direction: column;
    row-gap: 1rem;
    padding: 0;
    margin-top: 0;
  }

  .nul {
    visibility: hidden;
  }

  .ce {
    grid-column-start: 1;
    grid-column-end: 3;
    position: relative;
    margin-left: auto;
    margin-right: auto;
    text-align: center;

    margin-bottom: 2rem;
  }
`;

export const Text = styled.h3`
  text-align: center;
`;
