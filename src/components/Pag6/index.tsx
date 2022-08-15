import React from "react";
import { verificarDataNascimento } from "../../config/mask";
import { Junta, Container } from "../../styles/pageStyled";
import validator from "validator";
import InputMask from "react-input-mask";

interface AllProps {
  next: boolean;
  setNext: Function;
  nome_pai: string;
  setNome_pai: Function;
  data_nasc_pai: string;
  setData_nasc_pai: Function;
  pai_mora_eua: string;
  setPai_mora_eua: Function;
  nome_mae: string;
  setNome_mae: Function;
  data_nasc_mae: string;
  setData_nasc_mae: Function;
  mae_mora_eua: string;
  setMae_mora_eua: Function;
}

const Pag6 = (props: AllProps) => {
  if (
    props.nome_pai == "" ||
    !validator.isDate(verificarDataNascimento(props.data_nasc_pai)) ||
    props.pai_mora_eua == "" ||
    props.nome_mae == "" ||
    !validator.isDate(verificarDataNascimento(props.data_nasc_mae)) ||
    props.mae_mora_eua == ""
  ) {
    props.setNext(true);
  } else {
    props.setNext(false);
  }

  return (
    <Container>
      <Junta>
        <label>Nome completo do pai</label>
        <input
          value={props.nome_pai}
          alt={"Nome completo do pai"}
          onChange={(e) => props.setNome_pai(e.target.value)}
        />
        <br />
        {props.data_nasc_pai.length == 10 &&
        !validator.isDate(verificarDataNascimento(props.data_nasc_pai)) ? (
          <label>Data de nascimento do pai (Data inválida)</label>
        ) : (
          <label>Data de nascimento do pai</label>
        )}

        <InputMask
          mask={"99/99/9999"}
          value={props.data_nasc_pai}
          type={"tel"}
          alt={"Data de nascimento do pai"}
          onChange={(e) => props.setData_nasc_pai(e.target.value)}
        />
        <br />
        <label>Seu pai mora nos Estados Unidos ?</label>
        <label>
          <input
            type={"radio"}
            value={"sim"}
            alt={"Seu pai mora nos Estados Unidos"}
            checked={props.pai_mora_eua === "Sim"}
            onChange={() => {
              props.setPai_mora_eua("Sim");
            }}
          />{" "}
          Sim
        </label>
        <label>
          <input
            type={"radio"}
            value={"nao"}
            alt={"Seu pai não mora nos Estados Unidos"}
            checked={props.pai_mora_eua === "Não"}
            onChange={() => {
              props.setPai_mora_eua("Não");
            }}
          />{" "}
          Não
        </label>
        <br />
      </Junta>

      <Junta>
        <label>Nome completo da mãe</label>
        <input
          value={props.nome_mae}
          alt={"Nome completo da mãe"}
          onChange={(e) => props.setNome_mae(e.target.value)}
        />
        <br />
        {props.data_nasc_mae.length == 10 &&
        !validator.isDate(verificarDataNascimento(props.data_nasc_mae)) ? (
          <label>Data de nascimento da mãe (Data inválida)</label>
        ) : (
          <label>Data de nascimento da mãe</label>
        )}
        <InputMask
          mask={"99/99/9999"}
          value={props.data_nasc_mae}
          type={"tel"}
          alt={"Data de nascimento da mãe"}
          onChange={(e) => props.setData_nasc_mae(e.target.value)}
        />
        <br />
        <label>Sua mãe mora nos Estados Unidos ?</label>
        <label>
          <input
            type={"radio"}
            value={"sim"}
            alt={"Sua mãe mora nos Estados Unidos"}
            checked={props.mae_mora_eua === "Sim"}
            onChange={() => {
              props.setMae_mora_eua("Sim");
            }}
          />{" "}
          Sim
        </label>
        <label>
          <input
            type={"radio"}
            value={"nao"}
            alt={"Sua mãe não mora nos Estados Unidos"}
            checked={props.mae_mora_eua === "Não"}
            onChange={() => {
              props.setMae_mora_eua("Não");
            }}
          />{" "}
          Não
        </label>
        <br />
      </Junta>
    </Container>
  );
};

export default Pag6;
