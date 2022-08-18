import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import { useContext } from "react";
import { Data, getAllDatas } from "../lib/db";
import Box from "../src/components/Box";
import { AuthContext } from "../src/contexts/auth";
import { Container2 } from "../src/styles/GlobalStyles";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const dados = await getAllDatas();
  return {
    props: {
      dados,
    },
  };
};

interface DataProps {
  dados: Data[];
}

const Dados = ({ dados }: DataProps) => {
  const provider = useContext(AuthContext);
  const router = useRouter();

  const login = () => {
    router.push("/login");
  };

  return (
    <>
      {provider?.token != "" ? (
        <>
          {dados?.map((dado, index) => (
            <Box
              key={index}
              id={dado.id}
              nome={dado.nome}
              data_nascimento={dado.data_nascimento}
              cpf={dado.cpf}
              endereco={dado.endereco}
              telefone={dado.telefone}
              email={dado.email}
              estado_civil={dado.estado_civil}
              nome_solteiro={dado.nome_solteiro}
              nacionalidades={dado.nacionalidades}
              serviu_exercito={dado.serviu_exercito}
              estado_deseja={dado.estado_deseja}
              data_deseja={dado.data_deseja}
              tempo_deseja={dado.tempo_deseja}
              hotel={dado.hotel}
              viajar_junto={dado.viajar_junto}
              pagar_viagem={dado.pagar_viagem}
              possui_visto={dado.possui_visto}
              foi_para_eua={dado.foi_para_eua}
              foi_para_outro_pais={dado.foi_para_outro_pais}
              visto_per_o_rou={dado.visto_per_o_rou}
              visto_recusado={dado.visto_recusado}
              passaporte_per_o_rou={dado.passaporte_per_o_rou}
              parentes_nos_eua={dado.parentes_nos_eua}
              nome_pai={dado.nome_pai}
              data_nasc_pai={dado.data_nasc_pai}
              pai_mora_eua={dado.pai_mora_eua}
              nome_mae={dado.nome_mae}
              data_nasc_mae={dado.data_nasc_mae}
              mae_mora_eua={dado.mae_mora_eua}
              instagram={dado.instagram}
              facebook={dado.facebook}
              linkedin={dado.linkedin}
              trabalho={dado.trabalho}
              nome_empresa={dado.nome_empresa}
              endereco_empresa={dado.endereco_empresa}
              telefone_empresa={dado.telefone_empresa}
              data_inicio_empresa={dado.data_inicio_empresa}
              trabalho_antigo={dado.trabalho_antigo}
              nome_empresa_antigo={dado.nome_empresa_antigo}
              endereco_empresa_antigo={dado.endereco_empresa_antigo}
              telefone_empresa_antigo={dado.telefone_empresa_antigo}
              data_ini_ter_empresa_antigo={dado.data_ini_ter_empresa_antigo}
              idiomas={dado.idiomas}
              nome_facul_escola={dado.nome_facul_escola}
              endereco_facul_escola={dado.endereco_facul_escola}
              telefone_facul_escola={dado.telefone_facul_escola}
              curso_facul={dado.curso_facul}
              ini_ter_facul_escola={dado.ini_ter_facul_escola}
            />
          ))}
        </>
      ) : (
        <Container2>
          <button onClick={login}>Ir para login</button>
        </Container2>
      )}
    </>
  );
};

export default Dados;
