import React, { useState } from "react";
import { Junta, Container, Plus, List, DuplaG } from "../../styles/pageStyled";
import { GrAddCircle } from "react-icons/gr";
import { TiDeleteOutline } from "react-icons/ti";
import InputMask from "react-input-mask";
import validator from "validator";
import {
  verificarDataNascimento,
  verificarDataTermino,
} from "../../config/mask";

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
  batalhao: string;
  setBatalhao: Function;
  patente: string;
  setPatente: Function;
  especialidade: string;
  setEspecialidade: Function;
  ini_serviu_exercito: string;
  setIniServiu_exercito: Function;
  ter_serviu_exercito: string;
  setTerServiu_exercito: Function;
}

const Pag3 = (props: AllProps) => {
  const [nacionalidades, setNacionalidades] = useState("");
  const [idiomas, setIdiomas] = useState("");
  const [cont, setCont] = useState(0);
  const [cont2, setCont2] = useState(0);

  const handleKeyPress = (event: any) => {
    event.preventDefault();
    if (event.key === "Enter") {
      addNacionalidade();
    }
  };
  const handleKeyPress2 = (event: any) => {
    event.preventDefault();
    if (event.key === "Enter") {
      addIdioma();
    }
  };
  const addNacionalidade = () => {
    if (nacionalidades != "") {
      props.setANacionalidades((oldArray: any) => [
        ...oldArray,
        nacionalidades.replace(/,/g, " "),
      ]);
      setNacionalidades("");
    }
  };

  const removeNacionalidade = (index: number) => {
    props.setANacionalidades(() => [
      ...props.Anacionalidades.slice(0, index),
      ...props.Anacionalidades.slice(index + 1, props.Anacionalidades.length),
    ]);
    setCont(0);
  };

  const addIdioma = () => {
    if (idiomas != "") {
      props.setAIdiomas((oldArray: any) => [
        ...oldArray,
        idiomas.replace(/,/g, " "),
      ]);
      setIdiomas("");
    }
  };

  const removeIdioma = (index: number) => {
    props.setAIdiomas(() => [
      ...props.Aidiomas.slice(0, index),
      ...props.Aidiomas.slice(index + 1, props.Aidiomas.length),
    ]);
    setCont2(0);
  };
  if (props.Snacionalidades == "sim") {
    if (props.Anacionalidades.length > 0) {
      props.setNacionalidades(props.Anacionalidades.toString() + ",");
    } else {
      if (cont == 0) {
        props.setNacionalidades([]);
        setCont(1);
      }
    }
  }
  if (props.Sidiomas == "sim") {
    if (props.Aidiomas.length > 0) {
      props.setIdiomas(props.Aidiomas.toString() + ",");
    } else {
      if (cont2 == 0) {
        props.setIdiomas([]);
        setCont2(1);
      }
    }
  }

  if (props.Sserviu_exercito == "sim") {
    let texto = `
    Branch: ${props.batalhao.replace(/,/g, " ")} , 
    Rank: ${props.patente.replace(/,/g, " ")} , 
    Specialty: ${props.especialidade.replace(/,/g, " ")} , 
    Inicio: ${props.ini_serviu_exercito.replace(/,/g, " ")} , 
    Término: ${props.ter_serviu_exercito.replace(/,/g, " ")}`;
    props.setServiu_exercito(texto);
  }
  if (
    props.nacionalidades == "" ||
    props.idiomas == "" ||
    props.batalhao == "" ||
    props.patente == "" ||
    props.especialidade == "" ||
    !validator.isDate(verificarDataNascimento(props.ini_serviu_exercito)) ||
    !validator.isDate(verificarDataTermino(props.ter_serviu_exercito)) ||
    props.serviu_exercito == ""
  ) {
    props.setNext(true);
  } else {
    props.setNext(false);
  }
  return (
    <Container>
      <div className="mei">
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
                props.setANacionalidades([]);
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
          <br />
        </Junta>
        {props.Snacionalidades === "sim" ? (
          <>
            <Junta className="cel">
              <label className="space">Aperte para adicionar</label>
              <Plus className="mei">
                <input
                  value={nacionalidades}
                  alt={"Nacionalidades"}
                  onKeyUp={(e) => {
                    handleKeyPress(e);
                  }}
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
                  <Plus key={index} className="mei">
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
              <br />
            </Junta>
          </>
        ) : (
          <>
            <Junta className="nul"></Junta>
          </>
        )}

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
          <br />
        </Junta>

        {props.Sidiomas === "sim" ? (
          <div>
            <Junta className="cel">
              <label className="space">Aperte para adicionar</label>
              <Plus>
                <input
                  value={idiomas}
                  alt={"Idiomas"}
                  onKeyUp={(e) => {
                    handleKeyPress2(e);
                  }}
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
                  <Plus key={index} className="mei">
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
              <br />
            </Junta>
          </div>
        ) : (
          <>
            <Junta className="nul"></Junta>
          </>
        )}
      </div>
      <div className="mei">
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
                props.setServiu_exercito("");
                props.setBatalhao("");
                props.setPatente("");
                props.setEspecialidade("");
                props.setIniServiu_exercito("");
                props.setTerServiu_exercito("");
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
                props.setBatalhao("n");
                props.setPatente("n");
                props.setEspecialidade("n");
                props.setIniServiu_exercito("n");
                props.setTerServiu_exercito("n");
              }}
            />{" "}
            Não
          </label>
        </Junta>
        <Junta className="nul"></Junta>
      </div>
      {props.Sserviu_exercito === "sim" ? (
        <div className="box1">
          <Junta className="cel">
            <br />
            <h3>Suas informações</h3>
            <DuplaG>
              <Junta>
                <label>Nome do batalhão / tipo de serviço</label>
                <input
                  value={props.batalhao}
                  alt={"Nome do batalhão / tipo de serviço"}
                  onChange={(e) => props.setBatalhao(e.target.value)}
                />
                <br />
              </Junta>
              <Junta>
                <label>Posição / Patente</label>
                <input
                  value={props.patente}
                  alt={"Posição / Patente"}
                  onChange={(e) => props.setPatente(e.target.value)}
                />
                <br />
              </Junta>
            </DuplaG>
            <DuplaG>
              <Junta>
                <label>Especialidade Militar</label>
                <input
                  value={props.especialidade}
                  alt={"Especialidade Militar"}
                  onChange={(e) => props.setEspecialidade(e.target.value)}
                />
                <br />
              </Junta>
              <Junta className="nulo">
                <label>(a)</label>
                <input />
                <br />
              </Junta>
            </DuplaG>
            <DuplaG>
              <Junta>
                {props.ini_serviu_exercito.replace("_", "").length == 10 &&
                !validator.isDate(
                  verificarDataNascimento(props.ini_serviu_exercito)
                ) ? (
                  <label>Data do início do serviço (Data inválida)</label>
                ) : (
                  <label>Data do início do serviço</label>
                )}
                <InputMask
                  mask={"99/99/9999"}
                  type={"tel"}
                  value={props.ini_serviu_exercito}
                  alt={"Data do início do serviço"}
                  onChange={(e) => props.setIniServiu_exercito(e.target.value)}
                />
                <br />
              </Junta>
              <Junta>
                {props.ter_serviu_exercito.replace("_", "").length == 10 &&
                !validator.isDate(
                  verificarDataTermino(props.ter_serviu_exercito)
                ) ? (
                  <label>Data do término do serviço (Data inválida)</label>
                ) : (
                  <label>Data do término do serviço</label>
                )}
                <InputMask
                  mask={"99/99/9999"}
                  type={"tel"}
                  value={props.ter_serviu_exercito}
                  alt={"Data do término do serviço"}
                  onChange={(e) => props.setTerServiu_exercito(e.target.value)}
                />
                <br />
              </Junta>
            </DuplaG>
          </Junta>
          <br />
        </div>
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
