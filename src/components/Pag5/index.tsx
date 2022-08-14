import React, { useState } from "react";
import { TiDeleteOutline } from "react-icons/ti";
import { Junta, Container, DuplaG, List, Plus } from "../../styles/pageStyled";

interface AllProps {
  next: boolean;
  setNext: Function;
  possui_visto: string;
  setPossui_visto: Function;
  foi_para_eua: string;
  setFoi_para_eua: Function;
  visto_per_o_rou: string;
  setVisto_per_o_rou: Function;
  visto_recusado: string;
  setVisto_recusado: Function;
  passaporte_per_o_rou: string;
  setPassaporte_per_o_rou: Function;
  parentes_nos_eua: string;
  setParentes_nos_eua: Function;
  Sparentes_nos_eua: string;
  setSParentes_nos_eua: Function;
  Aparentes_nos_eua: Array<string>;
  setAParentes_nos_eua: Function;
}

const Pag5 = (props: AllProps) => {
  const [Nomeparentes_nos_eua, setNomeParentes_nos_eua] = useState("");
  const [Enderecoparentes_nos_eua, setEnderecoParentes_nos_eua] = useState("");

  const addPessoa = () => {
    if (Nomeparentes_nos_eua != "" && Enderecoparentes_nos_eua != "") {
      let pessoa = `${Enderecoparentes_nos_eua.replace(
        ",",
        " "
      )} - ${Nomeparentes_nos_eua.replace(",", " ")}`;
      props.setAParentes_nos_eua((oldArray: any) => [...oldArray, pessoa]);
      setNomeParentes_nos_eua("");
      setEnderecoParentes_nos_eua("");
    }
  };

  const removePessoa = (index: number) => {
    props.setAParentes_nos_eua(() => [
      ...props.Aparentes_nos_eua.slice(0, index),
      ...props.Aparentes_nos_eua.slice(
        index + 1,
        props.Aparentes_nos_eua.length
      ),
    ]);
  };
  const handleKeyPress = (event: any) => {
    event.preventDefault();
    if (event.key === "Enter") {
      addPessoa();
    }
  };

  if (props.Sparentes_nos_eua === "Sim") {
    props.setParentes_nos_eua(props.Aparentes_nos_eua.toString());
  }

  if (
    props.possui_visto == "" ||
    props.foi_para_eua == "" ||
    props.visto_per_o_rou == "" ||
    props.visto_recusado == "" ||
    props.passaporte_per_o_rou == "" ||
    props.parentes_nos_eua == ""
  ) {
    props.setNext(true);
  } else {
    props.setNext(false);
  }

  return (
    <Container>
      <Junta>
        <label>Já possui visto ?</label>
        <label>
          <input
            type={"radio"}
            value={"sim"}
            alt={"Já possui visto"}
            checked={props.possui_visto === "Sim"}
            onChange={() => {
              props.setPossui_visto("Sim");
            }}
          />{" "}
          Sim
        </label>
        <label>
          <input
            type={"radio"}
            value={"nao"}
            alt={"Não possui visto "}
            checked={props.possui_visto === "Não possui"}
            onChange={() => {
              props.setPossui_visto("Não possui");
              props.setFoi_para_eua("Nunca foi para os Estados Unidos");
              props.setVisto_per_o_rou("Não");
            }}
          />{" "}
          Não
        </label>
        <br />
      </Junta>

      <Junta>
        <label>Já foi para os Estados Unidos ?</label>
        <label>
          <input
            type={"radio"}
            value={"sim"}
            alt={"Já foi para os Estados Unidos"}
            checked={props.foi_para_eua === "Sim"}
            onChange={() => {
              props.setFoi_para_eua("Sim");
            }}
          />{" "}
          Sim
        </label>
        <label>
          <input
            type={"radio"}
            value={"nao"}
            alt={"Nunca foi para os Estados Unidos"}
            checked={props.foi_para_eua === "Nunca foi para os Estados Unidos"}
            onChange={() => {
              props.setFoi_para_eua("Nunca foi para os Estados Unidos");
            }}
          />{" "}
          Não
        </label>
        <br />
      </Junta>

      <Junta>
        <label>Já teve o visto perdido ou roubado ?</label>
        <label>
          <input
            type={"radio"}
            value={"sim"}
            alt={"Já teve o visto perdido ou roubado"}
            checked={props.visto_per_o_rou === "Sim"}
            onChange={() => {
              props.setVisto_per_o_rou("Sim");
            }}
          />{" "}
          Sim
        </label>
        <label>
          <input
            type={"radio"}
            value={"nao"}
            alt={"Nunca teve o visto perdido ou roubado"}
            checked={props.visto_per_o_rou === "Não"}
            onChange={() => {
              props.setVisto_per_o_rou("Não");
            }}
          />{" "}
          Não
        </label>
        <br />
      </Junta>

      <Junta>
        <label>Já teve o visto recusado ?</label>
        <label>
          <input
            type={"radio"}
            value={"sim"}
            alt={"Já teve o visto recusado"}
            checked={props.visto_recusado === "Sim"}
            onChange={() => {
              props.setVisto_recusado("Sim");
            }}
          />{" "}
          Sim
        </label>
        <label>
          <input
            type={"radio"}
            value={"nao"}
            alt={"Nunca teve o visto recusado"}
            checked={props.visto_recusado === "Não"}
            onChange={() => {
              props.setVisto_recusado("Não");
            }}
          />{" "}
          Não
        </label>
        <br />
      </Junta>

      <Junta>
        <label>Já teve o passaporte perdido ou roubado ?</label>
        <label>
          <input
            type={"radio"}
            value={"sim"}
            alt={"Já teve o passaporte perdido ou roubado"}
            checked={props.passaporte_per_o_rou === "Sim"}
            onChange={() => {
              props.setPassaporte_per_o_rou("Sim");
            }}
          />{" "}
          Sim
        </label>
        <label>
          <input
            type={"radio"}
            value={"nao"}
            alt={"Nunca teve o passaporte perdido ou roubado"}
            checked={props.passaporte_per_o_rou === "Não"}
            onChange={() => {
              props.setPassaporte_per_o_rou("Não");
            }}
          />{" "}
          Não
        </label>
        <br />
      </Junta>

      <Junta>
        <label>Possui parentes próximos nos Estados Unidos ?</label>
        <label>
          <input
            type={"radio"}
            value={"sim"}
            alt={"Possui parentes próximos nos Estados Unidos"}
            checked={props.Sparentes_nos_eua === "Sim"}
            onChange={() => {
              props.setParentes_nos_eua("");
              props.setAParentes_nos_eua([]);
              props.setSParentes_nos_eua("Sim");
              setNomeParentes_nos_eua("");
              setEnderecoParentes_nos_eua("");
            }}
          />{" "}
          Sim
        </label>
        <label>
          <input
            type={"radio"}
            value={"nao"}
            alt={"Não possui parentes próximos nos Estados Unidos"}
            checked={props.Sparentes_nos_eua === "Não"}
            onChange={() => {
              props.setParentes_nos_eua("Não possui");
              props.setSParentes_nos_eua("Não");
            }}
          />{" "}
          Não
        </label>
        <br />
      </Junta>
      {props.Sparentes_nos_eua === "Sim" ? (
        <div className="box2">
          <Junta className="cel">
            <h3>Apenas parentes de 1º grau</h3>
            <DuplaG>
              <Junta>
                <label>Endereço</label>
                <input
                  value={Enderecoparentes_nos_eua}
                  alt={"Endereço"}
                  placeholder="Endereço"
                  onKeyUp={(e) => {
                    handleKeyPress(e);
                  }}
                  onChange={(e) => setEnderecoParentes_nos_eua(e.target.value)}
                />
              </Junta>
              <Junta>
                <label>Nome completo</label>
                <input
                  value={Nomeparentes_nos_eua}
                  alt={"Nome completo"}
                  placeholder="Nome completo"
                  onKeyUp={(e) => {
                    handleKeyPress(e);
                  }}
                  onChange={(e) => setNomeParentes_nos_eua(e.target.value)}
                />
              </Junta>
            </DuplaG>
            <br />
          </Junta>
          <button onClick={addPessoa}>Adicionar</button>
          <List>
            <h3>Parentes</h3>
            {props.Aparentes_nos_eua?.map((pessoa, index) => (
              <Plus key={index} className="centralizar">
                <p>{pessoa}</p>
                <TiDeleteOutline
                  color="red"
                  className="pt"
                  onClick={() => {
                    removePessoa(index);
                  }}
                />
              </Plus>
            ))}
            <br />
          </List>
        </div>
      ) : (
        <>
          <br />
        </>
      )}
    </Container>
  );
};

export default Pag5;
