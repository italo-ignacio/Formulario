import React, { useState } from "react";
import { Container, Junta } from "../../styles/pageStyled";
import validator from "validator";
import { verificarDataNascimento, telMask } from "../../config/mask";
import InputMask from "react-input-mask";

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
  tnome_solteiro: string;
  settNome_solteiro: Function;
  next: boolean;
  setNext: Function;
}

const Pag1 = (props: AllProps) => {
  const [mask, setMask] = useState("(99) 99999-9999");

  if (
    props.nome == "" ||
    !validator.isEmail(props.email) ||
    !validator.isDate(verificarDataNascimento(props.data_nascimento)) ||
    props.cpf.replace(/[^0-9]+/g, "").length != 11 ||
    props.telefone.replace(/[^0-9]+/g, "").length <= 9 ||
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
        {props.data_nascimento.replaceAll("_", "").length == 10 &&
        !validator.isDate(verificarDataNascimento(props.data_nascimento)) ? (
          <label>Data de nacimento (Data inválida)</label>
        ) : (
          <label>Data de nacimento</label>
        )}

        <InputMask
          mask={"99/99/9999"}
          alt={"Data de nacimento"}
          type={"tel"}
          value={props.data_nascimento}
          onChange={(e) => {
            props.setData_nascimento(e.target.value);
          }}
        />
        <br />
      </Junta>
      <Junta>
        <label>CPF</label>
        <InputMask
          mask={"999.999.999-99"}
          value={props.cpf}
          type={"tel"}
          alt={"CPF"}
          onChange={(e) => props.setCpf(e.target.value)}
        />
        <br />
      </Junta>
      <Junta>
        <label>Telefone</label>
        <InputMask
          mask={mask}
          onBlur={(e) => {
            if (e.target.value.replaceAll("_", "").length === 14) {
              setMask("(99) 9999-9999");
              props.setTelefone(telMask(e.target.value));
            }
          }}
          onFocus={(e) => {
            if (e.target.value.replaceAll("_", "").length === 14) {
              setMask("(99) 99999-9999");
            }
          }}
          type={"tel"}
          alt={"Telefone"}
          value={props.telefone}
          onChange={(e) => props.setTelefone(e.target.value)}
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
            value={"sim"}
            alt={"Possui nome de solteiro"}
            checked={props.tnome_solteiro === "sim"}
            onChange={() => {
              props.settNome_solteiro("sim");
              props.setNome_solteiro("");
            }}
          />{" "}
          Sim
        </label>
        <label>
          <input
            type={"radio"}
            value={"nao"}
            alt={"Não possui nome de solteiro"}
            checked={props.tnome_solteiro === "nao"}
            onChange={() => {
              props.settNome_solteiro("nao");
              props.setNome_solteiro("Não possui");
            }}
          />{" "}
          Não
        </label>
      </Junta>
      {props.tnome_solteiro === "sim" ? (
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
            <label>(a)</label>
            <input />
          </Junta>
        </>
      )}
    </Container>
  );
};

export default Pag1;
