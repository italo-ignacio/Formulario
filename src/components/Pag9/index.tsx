import React, { useState } from "react";
import { Junta, Container, DuplaG } from "../../styles/pageStyled";
import InputMask from "react-input-mask";
import {
  telMask,
  verificarDataNascimento,
  verificarDataTermino,
} from "../../config/mask";
import validator from "validator";
interface AllProps {
  next: boolean;
  setNext: Function;
  facul: string;
  setFacul: Function;
  telefone_facul_escola: string;
  setTelefone_facul_escola: Function;
  endereco_facul_escola: string;
  setEndereco_facul_escola: Function;
  nome_facul_escola: string;
  setNome_facul_escola: Function;
  curso_facul: string;
  setCurso_facul: Function;
  ini_ter_facul_escola: string;
  setIni_ter_facul_escola: Function;
  ini_facul_escola: string;
  setIni_facul_escola: Function;
  ter_facul_escola: string;
  setTer_facul_escola: Function;
}

const Pag9 = (props: AllProps) => {
  const [mask, setMask] = useState("(99) 99999-9999");

  if (
    props.nome_facul_escola == "" ||
    props.endereco_facul_escola == "" ||
    props.curso_facul == "" ||
    props.telefone_facul_escola.replace(/[^0-9^a-z]+/g, "") == "" ||
    !validator.isDate(verificarDataNascimento(props.ini_facul_escola)) ||
    !validator.isDate(verificarDataTermino(props.ter_facul_escola))
  ) {
    props.setNext(true);
  } else {
    props.setIni_ter_facul_escola(
      `Inicio: ${props.ini_facul_escola} // Término: ${props.ter_facul_escola}`
    );
    props.setNext(false);
  }
  return (
    <Container>
      <div className="box2">
        <Junta>
          <label>Faz ou já fez faculdade ?</label>
          <label>
            <input
              type={"radio"}
              value={"sim"}
              alt={"Faz ou já fez faculdade "}
              checked={props.facul === "sim"}
              onChange={() => {
                props.setFacul("sim");
                props.setCurso_facul("");
              }}
            />{" "}
            Sim
          </label>
          <label>
            <input
              type={"radio"}
              value={"nao"}
              alt={"Nunca fez faculdade "}
              checked={props.facul === "nao"}
              onChange={() => {
                props.setFacul("nao");
                props.setCurso_facul("Não possui");
              }}
            />{" "}
            Não
          </label>
          <br />
        </Junta>
        {props.facul != "" ? (
          <Junta className="cel">
            {props.facul == "sim" ? (
              <h3>Dados da faculdade</h3>
            ) : (
              <h3>Dados da sua escolaridade</h3>
            )}

            <DuplaG>
              <Junta>
                {props.facul == "sim" ? (
                  <label>Nome da faculdade</label>
                ) : (
                  <label>Nome da escola</label>
                )}
                <input
                  value={props.nome_facul_escola}
                  alt={
                    props.facul == "sim"
                      ? "Nome da faculdade"
                      : "Nome da escola"
                  }
                  onChange={(e) => props.setNome_facul_escola(e.target.value)}
                />
                <br />
              </Junta>
              <Junta>
                {props.facul == "sim" ? (
                  <label>Endereço da faculdade</label>
                ) : (
                  <label>Endereço da escola</label>
                )}
                <input
                  value={props.endereco_facul_escola}
                  alt={
                    props.facul == "sim"
                      ? "Endereço da faculdade"
                      : "Endereço da escola"
                  }
                  onChange={(e) =>
                    props.setEndereco_facul_escola(e.target.value)
                  }
                />
                <br />
              </Junta>
            </DuplaG>

            <DuplaG>
              <Junta>
                {props.facul == "sim" ? (
                  <label>Telefone da faculdade</label>
                ) : (
                  <label>Telefone da escola</label>
                )}
                <InputMask
                  mask={mask}
                  onBlur={(e) => {
                    if (e.target.value.replace("_", "").length === 14) {
                      setMask("(99) 9999-9999");
                      props.setTelefone_facul_escola(telMask(e.target.value));
                    }
                  }}
                  onFocus={(e) => {
                    if (e.target.value.replace("_", "").length === 14) {
                      setMask("(99) 99999-9999");
                    }
                  }}
                  value={props.telefone_facul_escola}
                  type={"tel"}
                  alt={
                    props.facul == "sim"
                      ? "Telefone da faculdade"
                      : "Telefone da escola"
                  }
                  onChange={(e) =>
                    props.setTelefone_facul_escola(e.target.value)
                  }
                />
                <br />
              </Junta>
              {props.facul == "sim" ? (
                <Junta>
                  <label>Nome do curso</label>
                  <input
                    value={props.curso_facul}
                    alt={"Nome do curso"}
                    onChange={(e) => props.setCurso_facul(e.target.value)}
                  />
                  <br />
                </Junta>
              ) : (
                <Junta className="nul">
                  <label>(a)</label>
                  <input />
                  <br />
                </Junta>
              )}
            </DuplaG>
            <DuplaG>
              <Junta>
                {props.ini_facul_escola.replace("_", "").length == 10 &&
                !validator.isDate(
                  verificarDataNascimento(props.ini_facul_escola)
                ) ? (
                  <label>Data de inicio (Data inválida)</label>
                ) : (
                  <label>Data de inicio</label>
                )}

                <InputMask
                  mask={"99/99/9999"}
                  value={props.ini_facul_escola}
                  type={"tel"}
                  alt={"Data de inicio "}
                  onChange={(e) => props.setIni_facul_escola(e.target.value)}
                />
                <br />
              </Junta>
              <Junta>
                {props.ter_facul_escola.replace("_", "").length == 10 &&
                !validator.isDate(
                  verificarDataTermino(props.ter_facul_escola)
                ) ? (
                  <label>Data ou previsão de término (Data inválida)</label>
                ) : (
                  <label>Data ou previsão de término</label>
                )}

                <InputMask
                  mask={"99/99/9999"}
                  value={props.ter_facul_escola}
                  type={"tel"}
                  alt={"Data de Término "}
                  onChange={(e) => props.setTer_facul_escola(e.target.value)}
                />

                <br />
              </Junta>
            </DuplaG>
          </Junta>
        ) : (
          <></>
        )}
      </div>
    </Container>
  );
};

export default Pag9;
