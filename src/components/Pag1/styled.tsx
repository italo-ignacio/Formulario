import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  h2 {
    text-align: center;
    margin-top: 1rem;
    margin-bottom: 2rem;
  }
  @media (max-width: 900px) {
    text-align: center;
  }
  .nul {
    display: flex;
    visibility: hidden;
  }

  .separar {
    display: flex;
    justify-content: space-evenly;
    @media (max-width: 900px) {
      flex-direction: column;
      .space,
      .nul {
        margin-top: 1rem;
      }
      label {
        display: flex;
        flex-direction: column;
      }
    }
    .junto {
      display: flex;
      justify-content: center;
      label {
        display: flex;
        flex-direction: row;
      }
    }
  }
`;
