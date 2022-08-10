import React, { useState } from "react";
import { deleteData } from "../../../lib/db";
import { Container, Table } from "./styled";

interface AllProps {
  id: number;
  nome: String;
  data_nascimento: String;
  cpf: String;
  endereco: String;
  telefone: String;
  email: String;
  estado_civil: String;
  nome_antigo: String;
  nacionalidades: String;
  serviu_exercito: String;
  estado_deseja: String;
  data_deseja: String;
  tempo_deseja: String;
  hotel: String;
  viajar_junto: String;
  pagar_viagem: String;
  possui_visto: String;
  foi_para_eua: String;
  visto_per_o_rou: String;
  visto_recusado: String;
  passaporte_per_o_rou: String;
  passaporte_recusado: String;
  parentes_nos_eua: String;
  nome_pai: String;
  data_nasc_pai: String;
  pai_mora_eua: String;
  nome_mae: String;
  data_nasc_mae: String;
  mae_mora_eua: String;
  instagram: String;
  facebook: String;
  linkedin: String;
  trabalho: String;
  nome_empresa: String;
  endereco_empresa: String;
  telefone_empresa: String;
  data_inicio_empresa: String;
  trabalho_antigo: String;
  nome_empresa_antigo: String;
  endereco_empresa_antigo: String;
  telefone_empresa_antigo: String;
  data_ini_ter_empresa_antigo: String;
  facul_escola: String;
  nome_facul_escola: String;
  endereco_facul_escola: String;
  telefone_facul_escola: String;
  curso_facul: String;
  ini_ter_facul_escola: String;
}

const Box = (props: AllProps) => {
  const [visible, setVisible] = useState(false);

  const changeVisibility = () => {
    setVisible(!visible);
  };

  const handleclick = () => {};

  return (
    <Container>
      <div className="separar">
        <h1 onClick={() => changeVisibility()}>{props.nome}</h1>
        <label onClick={handleclick}>Apagar</label>
      </div>
      {visible ? (
        <>
          <Table>
            <tr>
              <th>Nome : </th>
              <td>{props.nome}</td>
            </tr>
            <tr>
              <th>Data de nascimento : </th>
              <td>{props.data_nascimento}</td>
            </tr>
            <tr>
              <th>CPF : </th>
              <td>{props.cpf}</td>
            </tr>
            <tr>
              <th>Endereço : </th>
              <td>{props.endereco}</td>
            </tr>
            <tr>
              <th>Telefone : </th>
              <td>{props.telefone}</td>
            </tr>
            <tr>
              <th>E-mail : </th>
              <td>{props.email}</td>
            </tr>
            <tr>
              <th>Estado civil : </th>
              <td>{props.estado_civil}</td>
            </tr>
            <tr>
              <th>Nome antigo : </th>
              <td>{props.nome_antigo}</td>
            </tr>
            <tr>
              <th>Outras nacionalidades : </th>
              <td>{props.nacionalidades}</td>
            </tr>
            <tr>
              <th>Serviu o exército : </th>
              <td>{props.serviu_exercito}</td>
            </tr>
            <tr>
              <th>Estado que deseja ir : </th>
              <td>{props.estado_deseja}</td>
            </tr>
            <tr>
              <th>Data que deseja ir : </th>
              <td>{props.data_deseja}</td>
            </tr>
            <tr>
              <th>Tempo que deseja ficar : </th>
              <td>{props.tempo_deseja}</td>
            </tr>
            <tr>
              <th>Hotel : </th>
              <td>{props.hotel}</td>
            </tr>

            {props.viajar_junto.split(/\s*;\s*/).map((nome, index) => (
              <tr>
                <th>Viajar junto : </th>
                <td key={index}>{nome}</td>
              </tr>
            ))}

            <tr>
              <th>Pagar a viagem : </th>
              <td>{props.pagar_viagem}</td>
            </tr>
            <tr>
              <th>Possui visto : </th>
              <td>{props.possui_visto}</td>
            </tr>
            <tr>
              <th>Foi para USA : </th>
              <td>{props.foi_para_eua}</td>
            </tr>
            <tr>
              <th>Visto perdido ou roubado : </th>
              <td>{props.visto_per_o_rou}</td>
            </tr>
            <tr>
              <th>Visto recusado : </th>
              <td>{props.visto_recusado}</td>
            </tr>
            <tr>
              <th>Passaporte perdido ou roubado : </th>
              <td>{props.passaporte_per_o_rou}</td>
            </tr>
            <tr>
              <th>Passaporte recusado : </th>
              <td>{props.passaporte_recusado}</td>
            </tr>
            {props.parentes_nos_eua.split(/\s*;\s*/).map((nome, index) => (
              <tr>
                <th>Parentes nos USA : </th>
                <td key={index}>{nome}</td>
              </tr>
            ))}
            <tr>
              <th>Nome do pai : </th>
              <td>{props.nome_pai}</td>
            </tr>
            <tr>
              <th>Data de nascimento do pai : </th>
              <td>{props.data_nasc_pai}</td>
            </tr>
            <tr>
              <th>Pai mora nos USA : </th>
              <td>{props.pai_mora_eua}</td>
            </tr>
            <tr>
              <th>Nome da mãe : </th>
              <td>{props.nome_mae}</td>
            </tr>
            <tr>
              <th>Data de nascimento da mãe : </th>
              <td>{props.data_nasc_mae}</td>
            </tr>
            <tr>
              <th>Mãe mora USA : </th>
              <td>{props.mae_mora_eua}</td>
            </tr>
            <tr>
              <th>Instagram : </th>
              <td>{props.instagram}</td>
            </tr>
            <tr>
              <th>Facebook : </th>
              <td>{props.facebook}</td>
            </tr>
            <tr>
              <th>Linkedin : </th>
              <td>{props.linkedin}</td>
            </tr>
            <tr>
              <th>Trabalho : </th>
              <td>{props.trabalho}</td>
            </tr>
            <tr>
              <th>Nome da empresa : </th>
              <td>{props.nome_empresa}</td>
            </tr>
            <tr>
              <th>Endereço da empresa : </th>
              <td>{props.endereco_empresa}</td>
            </tr>
            <tr>
              <th>Telefone da empresa : </th>
              <td>{props.telefone_empresa}</td>
            </tr>
            <tr>
              <th>Data de inicio na empresa : </th>
              <td>{props.data_inicio_empresa}</td>
            </tr>
            <tr>
              <th>Trabalho antigo : </th>
              <td>{props.trabalho_antigo}</td>
            </tr>
            <tr>
              <th>Nome da empresa antiga : </th>
              <td>{props.nome_empresa_antigo}</td>
            </tr>
            <tr>
              <th>Endereço da empresa antiga : </th>
              <td>{props.endereco_empresa_antigo}</td>
            </tr>
            <tr>
              <th>Telefone da empresa antiga : </th>
              <td>{props.telefone_empresa_antigo}</td>
            </tr>
            <tr>
              <th>Período na empresa antiga : </th>
              <td>{props.data_ini_ter_empresa_antigo}</td>
            </tr>
            <tr>
              <th>Faculdade ou escola : </th>
              <td>{props.facul_escola}</td>
            </tr>
            <tr>
              <th>Nome da faculdade ou escola : </th>
              <td>{props.nome_facul_escola}</td>
            </tr>
            <tr>
              <th>Endereço da faculdade ou escola : </th>
              <td>{props.endereco_facul_escola}</td>
            </tr>
            <tr>
              <th>Telefone da faculdade ou escola : </th>
              <td>{props.telefone_facul_escola}</td>
            </tr>
            <tr>
              <th>Curso da faculdade : </th>
              <td>{props.curso_facul}</td>
            </tr>
            <tr>
              <th>Inicio e termino faculdade ou escola : </th>
              <td>{props.ini_ter_facul_escola}</td>
            </tr>
          </Table>
        </>
      ) : (
        <></>
      )}
    </Container>
  );
};
export default Box;
