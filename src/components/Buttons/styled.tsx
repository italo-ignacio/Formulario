import styled from "styled-components";

export const DivButtons = styled.div`
  display: flex;
  padding: 1rem 12rem;
  justify-content: space-between;
  margin-top: 2rem;
  @media (max-width: 900px) {
    padding: 1rem 2rem;
    margin-top: 0;
  }
  @media (max-width: 315px) {
    padding: 0;
    margin-top: 0;
  }

  .nul {
    visibility: hidden;
  }
`;

export const Text = styled.h3`
  text-align: center;
`;
