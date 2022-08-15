import React, { useState } from "react";
import { Junta, Container, DuplaG } from "../../styles/pageStyled";
import InputMask from "react-input-mask";
import { telMask } from "../../config/mask";

interface AllProps {
  next: boolean;
  setNext: Function;

  trabalho: string;
  setTrabalho: Function;
  Strabalho: string;
  setSTrabalho: Function;
  nome_empresa: string;
  setNome_empresa: Function;
  endereco_empresa: string;
  setEndereco_empresa: Function;
  telefone_empresa: string;
  setTelefone_empresa: Function;
  data_inicio_empresa: string;
  setData_inicio_empresa: Function;
  trabalho_antigo: string;
  setTrabalho_antigo: Function;
  Strabalho_antigo: string;
  setSTrabalho_antigo: Function;
  nome_empresa_antigo: string;
  setNome_empresa_antigo: Function;
  endereco_empresa_antigo: string;
  setEndereco_empresa_antigo: Function;
  telefone_empresa_antigo: string;
  setTelefone_empresa_antigo: Function;
  data_ini_ter_empresa_antigo: string;
  setData_ini_ter_empresa_antigo: Function;
  data_ini_empresa_antigo: string;
  setData_ini_empresa_antigo: Function;
  data_ter_empresa_antigo: string;
  setData_ter_empresa_antigo: Function;
}

const Pag8 = (props: AllProps) => {
  const [mask, setMask] = useState("(99) 99999-9999");
  // Nunca trabalhou Não trabalha
  if (
    props.trabalho == "" ||
    props.nome_empresa == "" ||
    props.endereco_empresa == "" ||
    props.data_inicio_empresa == "" ||
    props.telefone_empresa == "" ||
    props.trabalho_antigo == "" ||
    props.nome_empresa_antigo == "" ||
    props.endereco_empresa_antigo == "" ||
    props.data_ini_empresa_antigo == "" ||
    props.data_ter_empresa_antigo == "" ||
    props.telefone_empresa_antigo == ""
  ) {
    props.setNext(true);
  } else {
    props.setNext(false);
  }

  return (
    <Container>
      <div className="box2">
        <Junta>
          <label>Está trabalhando atualmente ?</label>
          <label>
            <input
              type={"radio"}
              value={"sim"}
              alt={"Está trabalhando atualmente"}
              checked={props.Strabalho === "sim"}
              onChange={() => {
                props.setSTrabalho("sim");
                props.setTrabalho("");
                props.setNome_empresa("");
                props.setEndereco_empresa("");
                props.setData_inicio_empresa("");
                props.setTelefone_empresa("");
              }}
            />{" "}
            Sim
          </label>
          <label>
            <input
              type={"radio"}
              value={"nao"}
              alt={"Não está trabalhando atualmente"}
              checked={props.Strabalho === "nao"}
              onChange={() => {
                props.setSTrabalho("nao");
                props.setTrabalho("Não trabalha");
                props.setNome_empresa("Não trabalha");
                props.setEndereco_empresa("Não trabalha");
                props.setData_inicio_empresa("Não trabalha");
                props.setTelefone_empresa("Não trabalha");
              }}
            />{" "}
            Não
          </label>
          <br />
        </Junta>
        {props.Strabalho === "sim" ? (
          <Junta className="cel">
            <h3>Dados do trabalho atual</h3>
            <DuplaG>
              <Junta>
                <label>Função na empresa</label>
                <input
                  value={props.trabalho}
                  alt={"Função na empresa"}
                  onChange={(e) => props.setTrabalho(e.target.value)}
                />
                <br />
              </Junta>
              <Junta>
                <label>Nome da empresa</label>
                <input
                  value={props.nome_empresa}
                  alt={"Nome da empresa"}
                  onChange={(e) => props.setNome_empresa(e.target.value)}
                />
                <br />
              </Junta>
            </DuplaG>

            <DuplaG>
              <Junta>
                <label>Endereço da empresa</label>
                <input
                  value={props.endereco_empresa}
                  alt={"Endereço da empresa"}
                  onChange={(e) => props.setEndereco_empresa(e.target.value)}
                />
                <br />
              </Junta>
              <Junta>
                <label>Telefone da empresa</label>
                <InputMask
                  mask={mask}
                  onBlur={(e) => {
                    if (e.target.value.replace("_", "").length === 14) {
                      setMask("(99) 9999-9999");
                      props.setTelefone_empresa(telMask(e.target.value));
                    }
                  }}
                  onFocus={(e) => {
                    if (e.target.value.replace("_", "").length === 14) {
                      setMask("(99) 99999-9999");
                    }
                  }}
                  value={props.telefone_empresa}
                  type={"tel"}
                  alt={"Telefone da empresa"}
                  onChange={(e) => props.setTelefone_empresa(e.target.value)}
                />
                <br />
              </Junta>
            </DuplaG>
            <DuplaG>
              <Junta>
                <label>Data de inicio na empresa</label>
                <InputMask
                  mask={"99/99/9999"}
                  value={props.data_inicio_empresa}
                  type={"tel"}
                  alt={"Data de inicio na empresa"}
                  onChange={(e) => props.setData_inicio_empresa(e.target.value)}
                />
                <br />
              </Junta>
              <Junta className="nul">
                <label>Data de saída da empresa</label>
                <input />
                <br />
              </Junta>
            </DuplaG>
          </Junta>
        ) : (
          <>
            <br />
          </>
        )}
      </div>
      <div className="box2">
        <Junta>
          <label>Já trabalhou anteriormente ?</label>
          <label>
            <input
              type={"radio"}
              value={"sim"}
              alt={"Já trabalhou anteriormente"}
              checked={props.Strabalho_antigo === "sim"}
              onChange={() => {
                props.setSTrabalho_antigo("sim");
                props.setTrabalho_antigo("");
                props.setNome_empresa_antigo("");
                props.setEndereco_empresa_antigo("");
                props.setData_ter_empresa_antigo("");
                props.setData_ini_empresa_antigo("");
                props.setTelefone_empresa_antigo("");
              }}
            />{" "}
            Sim
          </label>
          <label>
            <input
              type={"radio"}
              value={"nao"}
              alt={"Nunca trabalhou anteriormente"}
              checked={props.Strabalho_antigo === "nao"}
              onChange={() => {
                props.setSTrabalho_antigo("nao");
                props.setTrabalho_antigo("Nunca trabalhou");
                props.setNome_empresa_antigo("Nunca trabalhou");
                props.setEndereco_empresa_antigo("Nunca trabalhou");
                props.setData_ter_empresa_antigo("Nunca trabalhou");
                props.setData_ini_empresa_antigo("Nunca trabalhou");
                props.setTelefone_empresa_antigo("Nunca trabalhou");
              }}
            />{" "}
            Não
          </label>
          <br />
        </Junta>
        {props.Strabalho_antigo === "sim" ? (
          <Junta className="cel">
            <h3>Dados do trabalho anterior</h3>
            <DuplaG>
              <Junta>
                <label>Função na empresa</label>
                <input
                  value={props.trabalho_antigo}
                  alt={"Função na empresa"}
                  onChange={(e) => props.setTrabalho_antigo(e.target.value)}
                />
                <br />
              </Junta>
              <Junta>
                <label>Nome da empresa</label>
                <input
                  value={props.nome_empresa_antigo}
                  alt={"Nome da empresa"}
                  onChange={(e) => props.setNome_empresa_antigo(e.target.value)}
                />
                <br />
              </Junta>
            </DuplaG>

            <DuplaG>
              <Junta>
                <label>Endereço da empresa</label>
                <input
                  value={props.endereco_empresa_antigo}
                  alt={"Endereço da empresa"}
                  onChange={(e) =>
                    props.setEndereco_empresa_antigo(e.target.value)
                  }
                />
                <br />
              </Junta>
              <Junta>
                <label>Telefone da empresa</label>
                <InputMask
                  mask={mask}
                  onBlur={(e) => {
                    if (e.target.value.replace("_", "").length === 14) {
                      setMask("(99) 9999-9999");
                      props.setTelefone_empresa_antigo(telMask(e.target.value));
                    }
                  }}
                  onFocus={(e) => {
                    if (e.target.value.replace("_", "").length === 14) {
                      setMask("(99) 99999-9999");
                    }
                  }}
                  value={props.telefone_empresa_antigo}
                  type={"tel"}
                  alt={"Telefone da empresa"}
                  onChange={(e) =>
                    props.setTelefone_empresa_antigo(e.target.value)
                  }
                />
                <br />
              </Junta>
            </DuplaG>
            <DuplaG>
              <Junta>
                <label>Data de inicio na empresa</label>
                <InputMask
                  mask={"99/99/9999"}
                  value={props.data_ini_empresa_antigo}
                  type={"tel"}
                  alt={"Data de inicio na empresa"}
                  onChange={(e) =>
                    props.setData_ini_empresa_antigo(e.target.value)
                  }
                />
                <br />
              </Junta>
              <Junta>
                <label>Data de saída da empresa</label>
                <InputMask
                  mask={"99/99/9999"}
                  value={props.data_ter_empresa_antigo}
                  type={"tel"}
                  alt={"Data de inicio na empresa"}
                  onChange={(e) =>
                    props.setData_ter_empresa_antigo(e.target.value)
                  }
                />
                <br />
              </Junta>
            </DuplaG>
          </Junta>
        ) : (
          <>
            <br />
          </>
        )}
      </div>
    </Container>
  );
};

export default Pag8;
