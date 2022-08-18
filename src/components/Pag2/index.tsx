import React, { useState } from "react";
import { Junta, Container } from "../../styles/pageStyled";
import Loading from "../Loading";
import { Botao } from "./styled";

interface AllProps {
  endereco: string;
  setEndereco: Function;
  next: boolean;
  setNext: Function;
  cep: string;
  setCep: Function;
  rua: string;
  setRua: Function;
  cidade: string;
  setCidade: Function;
  bairro: string;
  setBairro: Function;
  complemento: string;
  setComplemento: Function;
  uf: string;
  setUf: Function;
  numero: string;
  setNumero: Function;
}
const Pag2 = (props: AllProps) => {
  const [loading, setLoading] = useState(false);
  const [busca, setBusca] = useState(false);

  const hadleClick = async () => {
    try {
      if (props.cep.length >= 8) {
        setLoading(true);
        fetch(
          `https://viacep.com.br/ws/${props.cep.replace(/[^0-9]+/g, "")}/json/`,
          {
            method: "GET",
          }
        )
          .then((T) => T.json())
          .then((dados) => {
            if (dados.erro != "true") {
              console.log(dados);
              props.setCep(dados.cep);
              props.setRua(dados.logradouro);
              props.setCidade(dados.localidade);
              props.setBairro(dados.bairro);
              props.setComplemento(dados.complemento);
              props.setUf(dados.uf);
              setBusca(true);
            } else {
              props.setRua("");
              props.setCidade("");
              props.setBairro("");
              props.setComplemento("");
              props.setUf("");
              props.setNumero("");
              setBusca(false);
              alert("Cep não encontrado");
            }
          });
      }
    } catch (error) {
      props.setRua("");
      props.setCidade("");
      props.setBairro("");
      props.setComplemento("");
      props.setUf("");
      props.setNumero("");
      setBusca(false);
      alert("Cep não encontrado");
    }
    setLoading(false);
  };

  const handleKeyPress = (event: any) => {
    event.preventDefault();
    if (event.key === "Enter") {
      hadleClick();
    }
  };
  const cepMask = (value: string) => {
    return value.replace(/\D/g, "").replace(/(\d{8})\d+?$/, "$1");
  };
  if (
    props.cep == "" ||
    props.rua == "" ||
    props.cidade == "" ||
    props.bairro == "" ||
    props.uf == "" ||
    props.numero == ""
  ) {
    props.setNext(true);
  } else {
    props.setEndereco(
      `${props.cep}, ${props.rua}, ${props.numero}, ${props.bairro} ${props.complemento}, ${props.cidade}-${props.uf}`
    );
    props.setNext(false);
  }

  return (
    <>
      {loading ? <Loading text="Buscando" /> : <></>}
      <Container>
        <Junta>
          <label>Cep</label>
          <input
            value={props.cep}
            type={"tel"}
            alt={"Cep"}
            onKeyUp={(e) => {
              handleKeyPress(e);
            }}
            onChange={(e) => props.setCep(cepMask(e.target.value))}
          />
          <br />
        </Junta>
        <Botao onClick={hadleClick}>Buscar</Botao>
        {busca ? (
          <>
            <Junta>
              <label>Rua</label>
              <input
                value={props.rua}
                alt={"Rua"}
                onChange={(e) => props.setRua(e.target.value)}
              />
              <br />
            </Junta>
            <Junta>
              <label>Complemento</label>
              <input
                value={props.complemento}
                alt={"Complemento"}
                onChange={(e) => props.setComplemento(e.target.value)}
              />
              <br />
            </Junta>
            <Junta>
              <label>Bairro</label>
              <input
                value={props.bairro}
                alt={"Bairro"}
                onChange={(e) => props.setBairro(e.target.value)}
              />
              <br />
            </Junta>
            <Junta>
              <label>Cidade</label>
              <input
                value={props.cidade}
                alt={"Cidade"}
                onChange={(e) => props.setCidade(e.target.value)}
              />
              <br />
            </Junta>
            <Junta>
              <label>UF</label>
              <input
                value={props.uf}
                alt={"UF"}
                onChange={(e) => props.setUf(e.target.value)}
              />
              <br />
            </Junta>
            <Junta>
              <label>Numero</label>
              <input
                type={"tel"}
                value={props.numero}
                alt={"numero"}
                onChange={(e) => props.setNumero(e.target.value)}
              />
              <br />
            </Junta>
          </>
        ) : (
          <></>
        )}
      </Container>
    </>
  );
};

export default Pag2;
