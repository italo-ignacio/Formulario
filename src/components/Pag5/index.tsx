import React, { useState } from "react";
import { GrAddCircle } from "react-icons/gr";
import { TiDeleteOutline } from "react-icons/ti";
import { Junta, Container, DuplaG, List, Plus } from "../../styles/pageStyled";
import InputMask from "react-input-mask";
import { telMask } from "../../config/mask";
import validator from "validator";

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
  Aparentes_nos_eua2: Array<string>;
  setAParentes_nos_eua2: Function;
  foi_para_outro_pais: string;
  setFoi_para_outro_pais: Function;
  Sfoi_para_outro_pais: string;
  setSFoi_para_outro_pais: Function;
  Afoi_para_outro_pais: Array<string>;
  setAFoi_para_outro_pais: Function;
}

const Pag5 = (props: AllProps) => {
  const [Nomeparentes_nos_eua, setNomeParentes_nos_eua] = useState("");
  const [Enderecoparentes_nos_eua, setEnderecoParentes_nos_eua] = useState("");
  const [Emailparentes_nos_eua, setEmailParentes_nos_eua] = useState("");
  const [Telefoneparentes_nos_eua, setTelefoneParentes_nos_eua] = useState("");

  const [paises, setPaises] = useState("");
  const [mask, setMask] = useState("(99) 99999-9999");

  const addPessoa = () => {
    if (
      Nomeparentes_nos_eua != "" &&
      Enderecoparentes_nos_eua != "" &&
      validator.isEmail(Emailparentes_nos_eua) &&
      Telefoneparentes_nos_eua != ""
    ) {
      let pessoa = `
      Nome: ${Nomeparentes_nos_eua.replaceAll(",", " ")} - 
      E-mail: ${Emailparentes_nos_eua.replaceAll(",", " ")} - 
      Tel: ${Telefoneparentes_nos_eua} - 
      Endereço: ${Enderecoparentes_nos_eua.replaceAll(",", " ")}`;
      props.setAParentes_nos_eua((oldArray: any) => [...oldArray, pessoa]);
      props.setAParentes_nos_eua2((oldArray: any) => [
        ...oldArray,
        Nomeparentes_nos_eua,
      ]);
      setMask("(99) 99999-9999");
      setNomeParentes_nos_eua("");
      setEnderecoParentes_nos_eua("");
      setTelefoneParentes_nos_eua("");
      setEmailParentes_nos_eua("");
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
    props.setAParentes_nos_eua2(() => [
      ...props.Aparentes_nos_eua2.slice(0, index),
      ...props.Aparentes_nos_eua2.slice(
        index + 1,
        props.Aparentes_nos_eua2.length
      ),
    ]);
  };

  const addPais = () => {
    if (paises != "") {
      props.setAFoi_para_outro_pais((oldArray: any) => [
        ...oldArray,
        paises.replaceAll(",", " "),
      ]);
      setPaises("");
    }
  };

  const removePais = (index: number) => {
    props.setAFoi_para_outro_pais(() => [
      ...props.Afoi_para_outro_pais.slice(0, index),
      ...props.Afoi_para_outro_pais.slice(
        index + 1,
        props.Afoi_para_outro_pais.length
      ),
    ]);
  };

  const handleKeyPress = (event: any) => {
    event.preventDefault();
    if (event.key === "Enter") {
      addPessoa();
    }
  };

  const handleKeyPress2 = (event: any) => {
    event.preventDefault();
    if (event.key === "Enter") {
      addPais();
    }
  };

  if (props.Sparentes_nos_eua === "Sim") {
    props.setParentes_nos_eua(props.Aparentes_nos_eua.toString());
  }
  if (props.Sfoi_para_outro_pais == "sim") {
    props.setFoi_para_outro_pais(props.Afoi_para_outro_pais.toString());
  }
  if (
    props.possui_visto == "" ||
    props.foi_para_eua == "" ||
    props.foi_para_outro_pais == "" ||
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
              props.setFoi_para_eua("Nunca viajou para os Estados Unidos");
              props.setVisto_per_o_rou("Não");
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
        <label>Já viajou para os Estados Unidos ?</label>
        <label>
          <input
            type={"radio"}
            value={"sim"}
            alt={"Já viajou para os Estados Unidos"}
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
            alt={"Nunca viajou para os Estados Unidos"}
            checked={
              props.foi_para_eua === "Nunca viajou para os Estados Unidos"
            }
            onChange={() => {
              props.setFoi_para_eua("Nunca viajou para os Estados Unidos");
            }}
          />{" "}
          Não
        </label>
        <br />
      </Junta>
      <div>
        <Junta>
          <label>Viajou para outro país nos últimos 5 anos ?</label>
          <label>
            <input
              type={"radio"}
              value={"sim"}
              alt={"Viajou para outro país nos últimos 5 anos "}
              checked={props.Sfoi_para_outro_pais === "sim"}
              onChange={() => {
                props.setSFoi_para_outro_pais("sim");
              }}
            />{" "}
            Sim
          </label>
          <label>
            <input
              type={"radio"}
              value={"nao"}
              alt={"Não viajou para outro país"}
              checked={props.Sfoi_para_outro_pais === "nao"}
              onChange={() => {
                props.setSFoi_para_outro_pais("nao");
                props.setFoi_para_outro_pais("Não viajou para outro país");
                props.setAFoi_para_outro_pais([]);
                setPaises("");
              }}
            />{" "}
            Não
          </label>
          <br />
        </Junta>
        {props.Sfoi_para_outro_pais === "sim" ? (
          <>
            <Junta className="cel">
              <label className="space">Aperte para adicionar</label>
              <Plus>
                <input
                  value={paises}
                  alt={"Paises"}
                  onKeyUp={(e) => {
                    handleKeyPress2(e);
                  }}
                  placeholder="Digite o país"
                  onChange={(e) => setPaises(e.target.value)}
                />
                <label>
                  <GrAddCircle
                    fontSize={"1.3rem"}
                    onClick={addPais}
                    className="pt"
                  />
                </label>
              </Plus>
              <List>
                <h3>Paises que viajou</h3>
                {props.Afoi_para_outro_pais?.map((idioma, index) => (
                  <Plus key={index}>
                    <p>{idioma}</p>
                    <TiDeleteOutline
                      color="red"
                      className="pt"
                      onClick={() => {
                        removePais(index);
                      }}
                    />
                  </Plus>
                ))}
                <br />
              </List>
              <br />
              <br />
            </Junta>
          </>
        ) : (
          <></>
        )}
      </div>
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
            <h3>Peencha as informações</h3>
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
                <br />
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
                <br />
              </Junta>
            </DuplaG>
            <DuplaG>
              <Junta>
                <label>Telefone</label>
                <input
                  value={Telefoneparentes_nos_eua}
                  alt={"Telefone"}
                  type={"tel"}
                  placeholder="Telefone"
                  onKeyUp={(e) => {
                    handleKeyPress(e);
                  }}
                  onChange={(e) => setTelefoneParentes_nos_eua(e.target.value)}
                />
                <br />
              </Junta>
              <Junta>
                <label>E-mail</label>
                <input
                  value={Emailparentes_nos_eua}
                  type={"email"}
                  alt={"E-mail"}
                  placeholder="E-mail"
                  onKeyUp={(e) => {
                    handleKeyPress(e);
                  }}
                  onChange={(e) => setEmailParentes_nos_eua(e.target.value)}
                />
                <br />
              </Junta>
            </DuplaG>
          </Junta>
          <button onClick={addPessoa}>Adicionar</button>
          <List>
            <h3>Parentes</h3>
            {props.Aparentes_nos_eua2?.map((pessoa, index) => (
              <Plus key={index} className="centralizar des">
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
