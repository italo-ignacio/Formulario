import React, { useState } from "react";
import { Junta, Container } from "../../styles/pageStyled";
import { Botao } from "./styled";

interface AllProps {
  next: boolean;
  setNext: Function;
}
const Pag2 = (props: AllProps) => {
  const [cep, setCep] = useState("");
  const [rua, setRua] = useState("");
  const [cidade, setCidade] = useState("");
  const [bairro, setBairro] = useState("");
  const [complemento, setComplemento] = useState("");
  const [uf, setUf] = useState("");
  const [numero, setNumero] = useState("");

  const hadleClick = async () => {
    try {
      if (cep.length == 8) {
        fetch(`https://viacep.com.br/ws/06539110/json/`, {
          method: "GET",
        })
          .then((T) => T.json())
          .then((dados) => {
            setCep(dados.cep);
            setRua(dados.logradouro);
            setCidade(dados.localidade);
            setBairro(dados.bairro);
            setComplemento(dados.complemento);
            setUf(dados.uf);
          });
      }
    } catch (error) {
      alert("Cep não encontrado");
    }
  };

  const cepMask = (value: string) => {
    return value
      .replace(/\D/g, "") // substitui qualquer caracter que nao seja numero por nada
      .replace(/(\d{8})\d+?$/, "$1"); // captura 2 numeros seguidos de um traço e não deixa ser digitado mais nada
  };
  if (
    cep == "" ||
    rua == "" ||
    cidade == "" ||
    bairro == "" ||
    complemento == "" ||
    uf == "" ||
    numero == ""
  ) {
    props.setNext(true);
  } else {
    props.setNext(false);
  }

  return (
    <Container>
      <Junta>
        <label>Cep</label>
        <input
          value={cep}
          type={"tel"}
          alt={"Cep"}
          onChange={(e) => setCep(cepMask(e.target.value))}
        />
        <br />
      </Junta>
      <Botao onClick={hadleClick}>Buscar</Botao>

      <Junta>
        <label>Rua</label>
        <input
          value={rua}
          alt={"Rua"}
          onChange={(e) => setRua(e.target.value)}
        />
        <br />
      </Junta>
      <Junta>
        <label>Complemento</label>
        <input
          value={complemento}
          alt={"Complemento"}
          onChange={(e) => setComplemento(e.target.value)}
        />
        <br />
      </Junta>
      <Junta>
        <label>Bairro</label>
        <input
          value={bairro}
          alt={"Bairro"}
          onChange={(e) => setBairro(e.target.value)}
        />
        <br />
      </Junta>
      <Junta>
        <label>Cidade</label>
        <input
          value={cidade}
          alt={"Cidade"}
          onChange={(e) => setCidade(e.target.value)}
        />
        <br />
      </Junta>
      <Junta>
        <label>UF</label>
        <input value={uf} alt={"UF"} onChange={(e) => setUf(e.target.value)} />
        <br />
      </Junta>
      <Junta>
        <label>Numero</label>
        <input
          value={numero}
          alt={"numero"}
          onChange={(e) => setNumero(e.target.value)}
        />
        <br />
      </Junta>
    </Container>
  );
};

export default Pag2;
