import React, { useState } from "react";
import { TiDelete } from "react-icons/ti";
import { FaExclamation, FaAngleDoubleLeft } from "react-icons/fa";
import { Container, Table } from "./styled";
import Loading from "../Loading";

interface AllProps {
  id: number;
  nome: string;
  data_nascimento: string;
  cpf: string;
  endereco: string;
  telefone: string;
  email: string;
  estado_civil: string;
  nome_solteiro: string;
  nacionalidades: string;
  serviu_exercito: string;
  estado_deseja: string;
  data_deseja: string;
  tempo_deseja: string;
  hotel: string;
  viajar_junto: string;
  pagar_viagem: string;
  possui_visto: string;
  foi_para_eua: string;
  foi_para_outro_pais: string;
  visto_per_o_rou: string;
  visto_recusado: string;
  passaporte_per_o_rou: string;
  parentes_nos_eua: string;
  nome_pai: string;
  data_nasc_pai: string;
  pai_mora_eua: string;
  nome_mae: string;
  data_nasc_mae: string;
  mae_mora_eua: string;
  instagram: string;
  facebook: string;
  linkedin: string;
  trabalho: string;
  nome_empresa: string;
  endereco_empresa: string;
  telefone_empresa: string;
  data_inicio_empresa: string;
  trabalho_antigo: string;
  nome_empresa_antigo: string;
  endereco_empresa_antigo: string;
  telefone_empresa_antigo: string;
  data_ini_ter_empresa_antigo: string;
  idiomas: string;
  nome_facul_escola: string;
  endereco_facul_escola: string;
  telefone_facul_escola: string;
  curso_facul: string;
  ini_ter_facul_escola: string;
  oab: string;
  data_conjuge: string;
  local_conjuge: string;
  salario: string;
  supervisor: string;
}

const Box = (props: AllProps) => {
  const [visible, setVisible] = useState(false);
  const [confirm, setConfirm] = useState(false);
  const [deleted, setDeleted] = useState(false);
  const [loading, setLoading] = useState(false);

  const changeVisibility = () => {
    setVisible(!visible);
  };

  const handleclick = async () => {
    if (confirm) {
      try {
        setLoading(true);
        await fetch(`/api/data/${props.id.toString()}`, {
          method: "DELETE",
        });
        setDeleted(true);
      } catch (error) {
        alert(`Erro ao deletar\n\nErro ${error}`);
      }
      setLoading(false);
    } else {
      setConfirm(true);
      setLoading(false);
    }
  };

  return (
    <>
      {loading ? <Loading text="Deletando" /> : <></>}

      {deleted ? (
        <></>
      ) : (
        <Container>
          <div className="separar">
            <h1 onClick={() => changeVisibility()}>{props.nome}</h1>
            <label>
              {confirm ? (
                <>
                  <FaExclamation
                    fontSize={30}
                    color={"red"}
                    onClick={handleclick}
                  />
                  <FaAngleDoubleLeft
                    fontSize={30}
                    onClick={() => setConfirm(false)}
                  />
                </>
              ) : (
                <TiDelete fontSize={30} color={"red"} onClick={handleclick} />
              )}
            </label>
          </div>

          {visible ? (
            <>
              <Table>
                <tr>
                  <th>CPF</th>
                  <td>{props.cpf}</td>
                </tr>
                <tr>
                  <th>Nome completo</th>
                  <td>{props.nome}</td>
                </tr>
                <tr>
                  <th>Nome de solteiro(a)</th>
                  <td>{props.nome_solteiro}</td>
                </tr>
                <tr>
                  <th>Estado civil</th>
                  <td>{props.estado_civil}</td>
                </tr>
                <tr>
                  <th>Aniversário do cônjuge</th>
                  <td>{props.data_conjuge}</td>
                </tr>
                <tr>
                  <th>Local de nascimento do cônjuge</th>
                  <td>{props.local_conjuge}</td>
                </tr>
                <tr>
                  <th>Data de nascimento</th>
                  <td>{props.data_nascimento}</td>
                </tr>
                <tr>
                  <th>Outras nacionalidades</th>
                  <td>{props.nacionalidades}</td>
                </tr>
                <tr>
                  <th>Endereço</th>
                  <td>{props.endereco}</td>
                </tr>
                <tr>
                  <th>Telefone</th>
                  <td>{props.telefone}</td>
                </tr>
                <tr>
                  <th>E-mail</th>
                  <td>{props.email}</td>
                </tr>
                <tr>
                  <th>Passaporte perdido ou roubado</th>
                  <td>{props.passaporte_per_o_rou}</td>
                </tr>
                <tr>
                  <th>Data que deseja ir</th>
                  <td>{props.data_deseja}</td>
                </tr>
                <tr>
                  <th>Tempo que deseja ficar</th>
                  <td>{props.tempo_deseja}</td>
                </tr>
                <tr>
                  <th>Estado que deseja ir</th>
                  <td>{props.estado_deseja}</td>
                </tr>
                <tr>
                  <th>Hotel</th>
                  <td>{props.hotel}</td>
                </tr>
                <tr>
                  <th>Pagar a viagem</th>
                  <td>{props.pagar_viagem}</td>
                </tr>
                <tr>
                  <th>Viajar junto</th>
                  {props.viajar_junto == "Ninguém" ? (
                    <td>{props.viajar_junto}</td>
                  ) : (
                    props.viajar_junto.split(/\s*,\s*/).map((nome, index) => (
                      <div key={index}>
                        <td>{nome}</td>
                      </div>
                    ))
                  )}
                </tr>
                <tr>
                  <th>Foi para USA</th>
                  <td>{props.foi_para_eua}</td>
                </tr>
                <tr>
                  <th>Possui visto</th>
                  <td>{props.possui_visto}</td>
                </tr>
                <tr>
                  <th>Visto perdido ou roubado</th>
                  <td>{props.visto_per_o_rou}</td>
                </tr>
                <tr>
                  <th>Visto recusado</th>
                  <td>{props.visto_recusado}</td>
                </tr>
                <tr>
                  <th>Nome do pai</th>
                  <td>{props.nome_pai}</td>
                </tr>
                <tr>
                  <th>Data de nascimento do pai</th>
                  <td>{props.data_nasc_pai}</td>
                </tr>
                <tr>
                  <th>Pai mora nos USA</th>
                  <td>{props.pai_mora_eua}</td>
                </tr>
                <tr>
                  <th>Nome da mãe</th>
                  <td>{props.nome_mae}</td>
                </tr>
                <tr>
                  <th>Data de nascimento da mãe</th>
                  <td>{props.data_nasc_mae}</td>
                </tr>
                <tr>
                  <th>Mãe mora USA</th>
                  <td>{props.mae_mora_eua}</td>
                </tr>
                <tr>
                  <th>Parentes nos USA</th>
                  {props.parentes_nos_eua == "Não possui" ? (
                    <td>{props.parentes_nos_eua}</td>
                  ) : (
                    props.parentes_nos_eua
                      .split(/\s*,\s*/)
                      .map((nome, index) => (
                        <div key={index}>
                          <td>{nome}</td>
                        </div>
                      ))
                  )}
                </tr>
                <tr>
                  <th>Trabalho/Função</th>
                  <td>{props.trabalho}</td>
                </tr>
                <tr>
                  <th>Nome da empresa</th>
                  <td>{props.nome_empresa}</td>
                </tr>
                <tr>
                  <th>Endereço da empresa</th>
                  <td>{props.endereco_empresa}</td>
                </tr>
                <tr>
                  <th>Telefone da empresa</th>
                  <td>{props.telefone_empresa}</td>
                </tr>
                <tr>
                  <th>Data de inicio na empresa</th>
                  <td>{props.data_inicio_empresa}</td>
                </tr>
                <tr>
                  <th>Salário atual</th>
                  <td>{props.salario}</td>
                </tr>
                <tr>
                  <th>Trabalho antigo</th>
                  <td>{props.trabalho_antigo}</td>
                </tr>
                <tr>
                  <th>Nome da empresa antiga</th>
                  <td>{props.nome_empresa_antigo}</td>
                </tr>
                <tr>
                  <th>Endereço da empresa antiga</th>
                  <td>{props.endereco_empresa_antigo}</td>
                </tr>
                <tr>
                  <th>Telefone da empresa antiga</th>
                  <td>{props.telefone_empresa_antigo}</td>
                </tr>
                <tr>
                  <th>Supervisor</th>
                  <td>{props.supervisor}</td>
                </tr>
                <tr>
                  <th>Período na empresa antiga</th>
                  <td>{props.data_ini_ter_empresa_antigo}</td>
                </tr>
                <tr>
                  <th>Nome da faculdade ou escola</th>
                  <td>{props.nome_facul_escola}</td>
                </tr>
                <tr>
                  <th>OAB, CRM, CREA : </th>
                  <td>{props.oab}</td>
                </tr>
                <tr>
                  <th>Endereço da faculdade ou escola</th>
                  <td>{props.endereco_facul_escola}</td>
                </tr>
                <tr>
                  <th>Telefone da faculdade ou escola</th>
                  <td>{props.telefone_facul_escola}</td>
                </tr>
                <tr>
                  <th>Curso da faculdade</th>
                  <td>{props.curso_facul}</td>
                </tr>
                <tr>
                  <th>Inicio e termino faculdade ou escola</th>
                  <td>{props.ini_ter_facul_escola}</td>
                </tr>
                <tr>
                  <th>Idiomas fluente: </th>
                  <td>{props.idiomas}</td>
                </tr>
                <tr>
                  <th>Foi para outro pais nos últimos 5 anos</th>
                  <td>{props.foi_para_outro_pais}</td>
                </tr>
                <tr>
                  <th>Serviu o exército</th>
                  <td>{props.serviu_exercito}</td>
                </tr>
                <tr>
                  <th>Instagram</th>
                  <td>{props.instagram}</td>
                </tr>
                <tr>
                  <th>Facebook</th>
                  <td>{props.facebook}</td>
                </tr>
                <tr>
                  <th>Linkedin</th>
                  <td>{props.linkedin}</td>
                </tr>
              </Table>
            </>
          ) : (
            <></>
          )}
        </Container>
      )}
    </>
  );
};
export default Box;
