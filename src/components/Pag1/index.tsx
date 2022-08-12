import React, { useState } from "react";
import { StyledInput } from "./styled";
import { Container, Junta } from "../../styles/pageStyled";
import validator from "validator";

interface AllProps {
  nome: string;
  setNome: Function;
  email: string;
  setEmail: Function;
  data_nascimento: string;
  setData_nascimento: Function;
  cpf: string;
  setCpf: Function;
  telefone: string;
  setTelefone: Function;
  estado_civil: string;
  setEstado_civil: Function;
  nome_solteiro: string;
  setNome_solteiro: Function;
  next: boolean;
  setNext: Function;
}

const Pag1 = (props: AllProps) => {
  const [nomeSolteito, setNomeSolteiro] = useState("nao");
  const now = new Date();
  const data = `${now.getFullYear()}-${
    now.getMonth() >= 10 ? now.getMonth() : `0` + now.getMonth()
  }-${now.getDate()}`;

  const cpfMask = (value: string) => {
    return value
      .replace(/\D/g, "") // substitui qualquer caracter que nao seja numero por nada
      .replace(/(\d{3})(\d)/, "$1.$2") // captura 2 grupos de numero o primeiro de 3 e o segundo de 1, apos capturar o primeiro grupo ele adiciona um ponto antes do segundo grupo de numero
      .replace(/(\d{3})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d{1,2})/, "$1-$2")
      .replace(/(-\d{2})\d+?$/, "$1"); // captura 2 numeros seguidos de um traço e não deixa ser digitado mais nada
  };

  const telMask = (value: string) => {
    return value
      .replace(/\D/g, "")
      .replace(/(\d{2})(\d)/, "($1) $2") // captura 2 grupos de numero o primeiro de 3 e o segundo de 1, apos capturar o primeiro grupo ele adiciona um ponto antes do segundo grupo de numero
      .replace(/(\d{5})(\d)/, "$1-$2")
      .replace(/(-\d{4})\d+?$/, "$1"); // captura 2 numeros seguidos de um traço e não deixa ser digitado mais nada
  };

  const dataMask = (value: string) => {
    return value
      .replace(/\D/g, "")
      .replace(/(\d{2})(\d)/, "$1/$2") // captura 2 grupos de numero o primeiro de 3 e o segundo de 1, apos capturar o primeiro grupo ele adiciona um ponto antes do segundo grupo de numero
      .replace(/(\d{2})(\d)/, "$1/$2")
      .replace(/(\d{4})\d+?$/, "$1"); // captura 2 numeros seguidos de um traço e não deixa ser digitado mais nada
  };
  if (
    props.nome == "" ||
    !validator.isEmail(props.email) ||
    props.data_nascimento.length != 10 ||
    props.cpf.length != 14 ||
    props.telefone.length != 15 ||
    props.estado_civil == "" ||
    props.nome_solteiro == ""
  ) {
    props.setNext(true);
  } else {
    props.setNext(false);
  }
  return (
    <Container>
      <Junta>
        <label>Nome completo</label>
        <input
          value={props.nome}
          alt={"Nome completo"}
          onChange={(e) => props.setNome(e.target.value)}
        />
        <br />
      </Junta>

      <Junta>
        <label>E-mail</label>
        <input
          type={"email"}
          alt={"Email"}
          value={props.email}
          onChange={(e) => props.setEmail(e.target.value)}
        />
        <br />
      </Junta>

      <Junta>
        <label>Data de nacimento</label>
        <StyledInput
          alt={"Data de nacimento"}
          value={props.data_nascimento}
          pattern={"d{2}/d{2}/d{4}"}
          max={data}
          min={"1900-01-01"}
          onChange={(e) => props.setData_nascimento(dataMask(e.target.value))}
        />
        <br />
      </Junta>
      <Junta>
        <label>CPF</label>
        <input
          value={props.cpf}
          type={"tel"}
          alt={"CPF"}
          onChange={(e) => props.setCpf(cpfMask(e.target.value))}
        />
        <br />
      </Junta>
      <Junta>
        <label>Celular</label>
        <input
          type={"tel"}
          alt={"Celular"}
          value={props.telefone}
          onChange={(e) => props.setTelefone(telMask(e.target.value))}
        />
        <br />
      </Junta>
      <Junta>
        <label>Estado civil</label>
        <select
          value={props.estado_civil}
          onChange={(e) => props.setEstado_civil(e.target.value)}
        >
          <option value={"Solteiro (a)"}>Solteiro (a)</option>
          <option value={"Casado (a)"}>Casado (a)</option>
          <option value={"Separado (a)"}>Separado (a)</option>
          <option value={"Divorciado (a)"}>Divorciado (a)</option>
          <option value={"Viúvo (a)"}>Viúvo (a)</option>
        </select>
        <br />
        <br />
      </Junta>
      <Junta>
        <label>Possui nome de solteiro (a) ?</label>
        <label>
          <input
            type={"radio"}
            name={"solteiro"}
            value={"sim"}
            checked={nomeSolteito === "sim"}
            onChange={() => {
              setNomeSolteiro("sim");
              props.setNome_solteiro("");
            }}
          />{" "}
          Sim
        </label>
        <label>
          <input
            type={"radio"}
            name={"solteiro"}
            value={"nao"}
            checked={nomeSolteito === "nao"}
            onChange={() => {
              setNomeSolteiro("nao");
              props.setNome_solteiro("Não possui");
            }}
          />{" "}
          Não
        </label>
      </Junta>
      {nomeSolteito === "sim" ? (
        <>
          <Junta className="cel">
            <label className="space">Nome de solteiro (a)</label>
            <input
              value={props.nome_solteiro}
              alt={"Nome de solteiro (a)"}
              onChange={(e) => props.setNome_solteiro(e.target.value)}
            />
          </Junta>
        </>
      ) : (
        <>
          <Junta className="nul">
            <label>Nome de solteiro (a)</label>
            <input />
          </Junta>
        </>
      )}
    </Container>
  );
};

export default Pag1;
