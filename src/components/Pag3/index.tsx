import React, { useState } from "react";
import { Junta, Container, Plus, List } from "../../styles/pageStyled";
import { GrAddCircle } from "react-icons/gr";
import { TiDeleteOutline } from "react-icons/ti";

interface AllProps {
  next: boolean;
  setNext: Function;
  idiomas: string;
  setIdiomas: Function;
  Sidiomas: string;
  setSIdiomas: Function;
  Aidiomas: Array<string>;
  setAIdiomas: Function;
  nacionalidades: string;
  setNacionalidades: Function;
  Snacionalidades: string;
  setSNacionalidades: Function;
  Anacionalidades: Array<string>;
  setANacionalidades: Function;
  serviu_exercito: string;
  setServiu_exercito: Function;
  Sserviu_exercito: string;
  setSServiu_exercito: Function;
}

const Pag3 = (props: AllProps) => {
  const [nacionalidades, setNacionalidades] = useState("");
  const [idiomas, setIdiomas] = useState("");

  const addNacionalidade = () => {
    if (nacionalidades != "") {
      props.setANacionalidades((oldArray: any) => [
        ...oldArray,
        nacionalidades.replace(",", " "),
      ]);
      setNacionalidades("");
    }
  };

  const removeNacionalidade = (index: number) => {
    props.setANacionalidades(() => [
      ...props.Anacionalidades.slice(0, index),
      ...props.Anacionalidades.slice(index + 1, props.Anacionalidades.length),
    ]);
  };

  const addIdioma = () => {
    if (idiomas != "") {
      props.setAIdiomas((oldArray: any) => [
        ...oldArray,
        idiomas.replace(",", " "),
      ]);
      setIdiomas("");
    }
  };

  const removeIdioma = (index: number) => {
    props.setAIdiomas(() => [
      ...props.Aidiomas.slice(0, index),
      ...props.Aidiomas.slice(index + 1, props.Aidiomas.length),
    ]);
  };
  if (props.Snacionalidades == "sim") {
    props.setNacionalidades(props.Anacionalidades.toString());
  }
  if (props.Sidiomas == "sim") {
    props.setIdiomas(props.Aidiomas.toString());
  }

  if (
    props.nacionalidades == "" ||
    props.idiomas == "" ||
    props.serviu_exercito == ""
  ) {
    props.setNext(true);
  } else {
    props.setNext(false);
  }
  return (
    <Container>
      <Junta>
        <label>Possui outras nacionalidades ?</label>
        <label>
          <input
            type={"radio"}
            value={"sim"}
            alt={"Possui outras nacionalidades "}
            checked={props.Snacionalidades === "sim"}
            onChange={() => {
              props.setSNacionalidades("sim");
              props.setNacionalidades("");
            }}
          />{" "}
          Sim
        </label>
        <label>
          <input
            type={"radio"}
            value={"nao"}
            alt={"Não possui outras nacionalidades "}
            checked={props.Snacionalidades === "nao"}
            onChange={() => {
              props.setSNacionalidades("nao");
              props.setNacionalidades("Não possui");
              props.setANacionalidades([]);
            }}
          />{" "}
          Não
        </label>
      </Junta>
      {props.Snacionalidades === "sim" ? (
        <>
          <Junta className="cel">
            <label className="space">Aperte para adicionar</label>
            <Plus>
              <input
                value={nacionalidades}
                alt={"Nacionalidades"}
                placeholder="Digite a nacionalidade"
                onChange={(e) => setNacionalidades(e.target.value)}
              />
              <label>
                <GrAddCircle
                  fontSize={"1.3rem"}
                  onClick={addNacionalidade}
                  className="pt"
                />
              </label>
            </Plus>
            <List>
              <h3>Nacionalidades</h3>
              {props.Anacionalidades?.map((nacionalidade, index) => (
                <Plus key={index}>
                  <p>{nacionalidade}</p>
                  <TiDeleteOutline
                    color="red"
                    className="pt"
                    onClick={() => {
                      removeNacionalidade(index);
                    }}
                  />
                </Plus>
              ))}
              <br />
            </List>
          </Junta>
        </>
      ) : (
        <>
          <Junta className="nul">
            <label>(a)</label>
          </Junta>
        </>
      )}

      <Junta className="tp">
        <label>Serviu o exercito ?</label>
        <label>
          <input
            type={"radio"}
            value={"sim"}
            alt={"Serviu o exercito"}
            checked={props.Sserviu_exercito === "sim"}
            onChange={() => {
              props.setSServiu_exercito("sim");
              props.setServiu_exercito("Serviu o exercito");
            }}
          />{" "}
          Sim
        </label>
        <label>
          <input
            type={"radio"}
            value={"nao"}
            alt={"Não Serviu o exercito"}
            checked={props.Sserviu_exercito === "nao"}
            onChange={() => {
              props.setSServiu_exercito("nao");
              props.setServiu_exercito("Não serviu");
            }}
          />{" "}
          Não
        </label>
      </Junta>
      <Junta className="nul">
        <label>(a)</label>
      </Junta>

      <Junta className="tp">
        <label>Fala outro idioma fluente ?</label>
        <label>
          <input
            type={"radio"}
            value={"sim"}
            alt={"Fala outro idioma fluente"}
            checked={props.Sidiomas === "sim"}
            onChange={() => {
              props.setSIdiomas("sim");
              props.setIdiomas("");
            }}
          />{" "}
          Sim
        </label>
        <label>
          <input
            type={"radio"}
            value={"nao"}
            alt={"Não Fala outro idioma fluente"}
            checked={props.Sidiomas === "nao"}
            onChange={() => {
              props.setSIdiomas("nao");
              props.setIdiomas("Não fala outro idioma");
              props.setAIdiomas([]);
            }}
          />{" "}
          Não
        </label>
      </Junta>
      {props.Sidiomas === "sim" ? (
        <>
          <Junta className="cel">
            <label className="space">Aperte para adicionar</label>
            <Plus>
              <input
                value={idiomas}
                alt={"Idiomas"}
                placeholder="Digite o idioma"
                onChange={(e) => setIdiomas(e.target.value)}
              />
              <label>
                <GrAddCircle
                  fontSize={"1.3rem"}
                  onClick={addIdioma}
                  className="pt"
                />
              </label>
            </Plus>
            <List>
              <h3>Idiomas fluente</h3>
              {props.Aidiomas?.map((idioma, index) => (
                <Plus key={index}>
                  <p>{idioma}</p>
                  <TiDeleteOutline
                    color="red"
                    className="pt"
                    onClick={() => {
                      removeIdioma(index);
                    }}
                  />
                </Plus>
              ))}
              <br />
            </List>
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

export default Pag3;
