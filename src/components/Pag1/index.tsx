import React, { useState } from "react";
import { Container } from "./styled";

interface AllProps {
  cpf: string;
  setCpf: Function;
}

const Pag1 = (props: AllProps) => {
  const [nomeSolteito, setNomeSolteiro] = useState(false);
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

  return (
    <Container>
      <h2>Preencha todos os campos</h2>
      <div className="separar">
        <label>
          Nome completo
          <input />
        </label>

        <br />
        <label>
          E-mail
          <input type={"email"} />
        </label>
      </div>
      <br />
      <div className="separar">
        <label>
          Data de nacimento
          <input type={"date"} />
        </label>

        <br />
        <label>
          CPF
          <input
            value={props.cpf}
            onChange={(e) => props.setCpf(telMask(e.target.value))}
          />
        </label>
      </div>
      <br />
      <div className="separar">
        <label>
          Celular <input type={"tel"} />
        </label>

        <br />

        <label>
          Estado civil
          <select>
            <option>Solteiro</option>
            <option>Casado</option>
            <option>Divorciado</option>
          </select>
        </label>
      </div>
      <br />
      <br />
      <div className="separar">
        <label>
          Possui nome de solteiro(a) ?
          <div className="junto">
            <label>
              <input
                type={"radio"}
                name={"solteiro"}
                onChange={() => {
                  setNomeSolteiro(true);
                }}
              />{" "}
              Sim
            </label>
            <label>
              <input
                type={"radio"}
                name={"solteiro"}
                onChange={() => {
                  setNomeSolteiro(false);
                }}
              />{" "}
              Não
            </label>
          </div>
        </label>

        <div>
          {nomeSolteito ? (
            <>
              <label className="space">
                Nome de solteiro(a)
                <input />
              </label>
            </>
          ) : (
            <>
              {" "}
              <label className="nul">
                Nome de solteiro(a)
                <input />
              </label>
            </>
          )}
        </div>
      </div>
    </Container>
  );
};

export default Pag1;
