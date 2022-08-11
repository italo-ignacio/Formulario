import styled from "styled-components";
import { textDarkColor } from "../../config/colors";

export const Container = styled.section`
  width: 80%;
  background: #fff;
  margin: 30px auto;
  padding: 30px;
  border-radius: 4px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);

  h1 {
    background-color: #dfdfdf;
    text-align: center;
    border-radius: 4px;
    cursor: pointer;
  }

  .separar {
    display: grid;
    grid-template-columns: 90% 10%;
    label {
      display: flex;
      align-items: center;
      justify-content: space-around;
      cursor: pointer;
    }
  }
  @media (max-width: 900px) {
    width: 90%;
    .separar {
      display: grid;
      grid-template-columns: 80% 20%;
    }
  }
`;

export const Table = styled.table`
  display: flex;
  flex-direction: column;
  padding-top: 1rem;
  color: ${textDarkColor};
`;
