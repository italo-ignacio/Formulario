import styled, { createGlobalStyle } from "styled-components";
import { linkColor, primaryColor, textDarkColor } from "../config/colors";

export default createGlobalStyle`
  *{
    margin:0;
    padding:0;
    outline:none;
    box-sizing:border-box;
  }
  body{
    font-family: 'Bitter', serif;
    line-height: 1.5;
    background-color: #ebebeb;
  }
  html,body,#root{
    height:100%; 
  }
  button:hover:disabled{
      filter: none;
  }
  button:disabled{
    background-color: #ebebeb;
    color: ${linkColor};
    cursor:default;
  }

  button{
    cursor:pointer;
    background: ${primaryColor};
    border: none;
    color: ${linkColor};
    padding: 10px 20px;
    border-radius: 4px;
    font-weight: 700;
    transition: all 300ms;
  }

  button:hover{
      filter: brightness(75%);
  }

  input {
    font-size: 1.2rem;
    border: 2px solid #ddd;
    padding: 0.5rem;
    border-radius: 4px;
    
    &:focus {
      border: 2px solid ${primaryColor};
    }


  }
  select { 
    font-size: 1.2rem;
    border: 2px solid #ddd;
    padding: 0.5rem;
    border-radius: 4px;
    color:${textDarkColor};
    &:focus {
      border: 2px solid ${primaryColor};
    }
  }

`;

export const Container2 = styled.section`
  min-height: 50vh;
  position: relative;
  margin-left: auto;
  margin-right: auto;
  margin-top: 1rem;
  width: 60%;
  background: #fff;
  padding: 30px;
  border-radius: 4px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);

  .red {
    background-color: red;
  }
`;

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  width: 80%;
  background: #fff;
  margin: 30px auto;
  padding: 1rem 2rem;
  row-gap: 10px;
  border-radius: 4px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  h1 {
    background-color: #dfdfdf;
    text-align: center;
    border-radius: 4px;
    cursor: pointer;
  }
  @media (max-width: 900px) {
    width: 90%;
    padding: 1rem;
  }
`;

export const Text = styled.h2`
  text-align: center;
  margin-bottom: 1.5rem;
`;

export const Initial = styled.div`
  min-height: 50vh;
  position: relative;
  margin-left: auto;
  margin-right: auto;
  margin-top: 1rem;
  h1 {
    background-color: #fff;

    border-radius: 4px;
  }
  button {
    margin-top: 50%;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  label {
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
  }
`;
