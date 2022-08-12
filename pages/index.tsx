import type { NextPage } from "next";
import { useState } from "react";
import { Container, Text } from "../src/styles/GlobalStyles";

import Loading from "../src/components/Loading";
import Buttons from "../src/components/Buttons";
import Pag1 from "../src/components/Pag1";
import Pag2 from "../src/components/Pag2";
import Pag3 from "../src/components/Pag3";
import Pag4 from "../src/components/Pag4";
import Pag5 from "../src/components/Pag5";
import Pag6 from "../src/components/Pag6";
import Pag7 from "../src/components/Pag7";
import Pag8 from "../src/components/Pag8";
import Pag9 from "../src/components/Pag9";

const Home: NextPage = () => {
  const [nome, setNome] = useState("");
  const [data_nascimento, setData_nascimento] = useState("");
  const [cpf, setCpf] = useState("");
  const [endereco, setEndereco] = useState("");
  const [telefone, setTelefone] = useState("");
  const [email, setEmail] = useState("");
  const [estado_civil, setEstado_civil] = useState("Solteiro (a)");
  const [nome_solteiro, setNome_solteiro] = useState("Não possui");
  const [nacionalidades, setNacionalidades] = useState("");
  const [serviu_exercito, setServiu_exercito] = useState("");
  const [estado_deseja, setEstado_deseja] = useState("");
  const [data_deseja, setData_deseja] = useState("");
  const [tempo_deseja, setTempo_deseja] = useState("");
  const [hotel, setHotel] = useState("");
  const [viajar_junto, setViajar_junto] = useState("");
  const [pagar_viagem, setPagar_viagem] = useState("");
  const [possui_visto, setPossui_visto] = useState("");
  const [foi_para_eua, setFoi_para_eua] = useState("");
  const [visto_per_o_rou, setVisto_per_o_rou] = useState("");
  const [visto_recusado, setVisto_recusado] = useState("");
  const [passaporte_per_o_rou, setPassaporte_per_o_rou] = useState("");
  const [parentes_nos_eua, setParentes_nos_eua] = useState("");
  const [nome_pai, setNome_pai] = useState("");
  const [data_nasc_pai, setData_nasc_pai] = useState("");
  const [pai_mora_eua, setPai_mora_eua] = useState("");
  const [nome_mae, setNome_mae] = useState("");
  const [data_nasc_mae, setData_nasc_mae] = useState("");
  const [mae_mora_eua, setMae_mora_eua] = useState("");
  const [instagram, setInstagram] = useState("");
  const [facebook, setFacebook] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [trabalho, setTrabalho] = useState("");
  const [nome_empresa, setNome_empresa] = useState("");
  const [endereco_empresa, setEndereco_empresa] = useState("");
  const [telefone_empresa, setTelefone_empresa] = useState("");
  const [data_inicio_empresa, setData_inicio_empresa] = useState("");
  const [trabalho_antigo, setTrabalho_antigo] = useState("");
  const [nome_empresa_antigo, setNome_empresa_antigo] = useState("");
  const [endereco_empresa_antigo, setEndereco_empresa_antigo] = useState("");
  const [telefone_empresa_antigo, setTelefone_empresa_antigo] = useState("");
  const [data_ini_ter_empresa_antigo, setData_ini_ter_empresa_antigo] =
    useState("");
  const [idiomas, setIdiomas] = useState("");
  const [nome_facul_escola, setNome_facul_escola] = useState("");
  const [endereco_facul_escola, setEndereco_facul_escola] = useState("");
  const [telefone_facul_escola, setTelefone_facul_escola] = useState("");
  const [curso_facul, setCurso_facul] = useState("");
  const [ini_ter_facul_escola, setIni_ter_facul_escola] = useState("");

  const [pag, setPag] = useState(0);
  const [loading, setLoading] = useState(false);
  const [next, setNext] = useState(false);

  const handleClick = async () => {
    try {
      setLoading(true);
      await fetch("/api/data", {
        method: "POST",
        body: JSON.stringify({
          nome: nome,
          data_nascimento: data_nascimento,
          cpf: cpf,
          endereco: endereco,
          telefone: telefone,
          email: email,
          estado_civil: estado_civil,
          nome_solteiro: nome_solteiro,
          nacionalidades: nacionalidades,
          serviu_exercito: serviu_exercito,
          estado_deseja: estado_deseja,
          data_deseja: data_deseja,
          tempo_deseja: tempo_deseja,
          hotel: hotel,
          viajar_junto: viajar_junto,
          pagar_viagem: pagar_viagem,
          possui_visto: possui_visto,
          foi_para_eua: foi_para_eua,
          visto_per_o_rou: visto_per_o_rou,
          visto_recusado: visto_recusado,
          passaporte_per_o_rou: passaporte_per_o_rou,
          parentes_nos_eua: parentes_nos_eua,
          nome_pai: nome_pai,
          data_nasc_pai: data_nasc_pai,
          pai_mora_eua: pai_mora_eua,
          nome_mae: nome_mae,
          data_nasc_mae: data_nasc_mae,
          mae_mora_eua: mae_mora_eua,
          instagram: instagram,
          facebook: facebook,
          linkedin: linkedin,
          trabalho: trabalho,
          nome_empresa: nome_empresa,
          endereco_empresa: endereco_empresa,
          telefone_empresa: telefone_empresa,
          data_inicio_empresa: data_inicio_empresa,
          trabalho_antigo: trabalho_antigo,
          nome_empresa_antigo: nome_empresa_antigo,
          endereco_empresa_antigo: endereco_empresa_antigo,
          telefone_empresa_antigo: telefone_empresa_antigo,
          data_ini_ter_empresa_antigo: data_ini_ter_empresa_antigo,
          idiomas: idiomas,
          nome_facul_escola: nome_facul_escola,
          endereco_facul_escola: endereco_facul_escola,
          telefone_facul_escola: telefone_facul_escola,
          curso_facul: curso_facul,
          ini_ter_facul_escola: ini_ter_facul_escola,
        }),
      });
    } catch (error) {
      alert(`Erro ao salvar\n\nErro: ${error}`);
    }
    setLoading(false);
  };

  return (
    <>
      {loading ? <Loading text="Salvando" /> : <></>}

      <Container>
        {pag == 0 ? (
          <>
            <Buttons
              pag={pag}
              setPag={setPag}
              text={""}
              next={next}
              setNext={setNext}
            />
          </>
        ) : (
          <></>
        )}
        {pag == 1 ? (
          <>
            <Text>Preencha todos os dados</Text>
            <Pag1
              nome={nome}
              setNome={setNome}
              email={email}
              setEmail={setEmail}
              data_nascimento={data_nascimento}
              setData_nascimento={setData_nascimento}
              cpf={cpf}
              setCpf={setCpf}
              telefone={telefone}
              setTelefone={setTelefone}
              estado_civil={estado_civil}
              setEstado_civil={setEstado_civil}
              nome_solteiro={nome_solteiro}
              setNome_solteiro={setNome_solteiro}
              next={next}
              setNext={setNext}
            />
            <Buttons
              pag={pag}
              setPag={setPag}
              text={"Etapa 1 de 9"}
              next={next}
              setNext={setNext}
            />
          </>
        ) : (
          <></>
        )}
        {pag == 2 ? (
          <>
            <Pag2 />
            <Buttons
              pag={pag}
              setPag={setPag}
              text={"Etapa 2 de 9"}
              next={true}
              setNext={setNext}
            />
          </>
        ) : (
          <></>
        )}
        {pag == 3 ? (
          <>
            <Pag3 />
            <Buttons
              pag={pag}
              setPag={setPag}
              text={"Etapa 3 de 9"}
              next={next}
              setNext={setNext}
            />
          </>
        ) : (
          <></>
        )}
        {pag == 4 ? (
          <>
            <Pag4 />
            <Buttons
              pag={pag}
              setPag={setPag}
              text={"Etapa 4 de 9"}
              next={next}
              setNext={setNext}
            />
          </>
        ) : (
          <></>
        )}
        {pag == 5 ? (
          <>
            <Pag5 />
            <Buttons
              pag={pag}
              setPag={setPag}
              text={"Etapa 5 de 9"}
              next={next}
              setNext={setNext}
            />
          </>
        ) : (
          <></>
        )}
        {pag == 6 ? (
          <>
            <Pag6 />
            <Buttons
              pag={pag}
              setPag={setPag}
              text={"Etapa 6 de 9"}
              next={next}
              setNext={setNext}
            />
          </>
        ) : (
          <></>
        )}
        {pag == 7 ? (
          <>
            <Pag7 />
            <Buttons
              pag={pag}
              setPag={setPag}
              text={"Etapa 7 de 9"}
              next={next}
              setNext={setNext}
            />
          </>
        ) : (
          <></>
        )}
        {pag == 8 ? (
          <>
            <Pag8 />
            <Buttons
              pag={pag}
              setPag={setPag}
              text={"Etapa 8 de 9"}
              next={next}
              setNext={setNext}
            />
          </>
        ) : (
          <></>
        )}
        {pag == 9 ? (
          <>
            <Pag9 />
            <Buttons
              pag={pag}
              setPag={setPag}
              text={"Etapa 9 de 9"}
              next={next}
              setNext={setNext}
              /*
              save={true}
              saveOnDB={handleClick}
              */
            />
          </>
        ) : (
          <></>
        )}
      </Container>
      <br />
    </>
  );
};

export default Home;
/*

    const [nome, setNome] = useState("italo");
  const [data_nascimento, setData_nascimento] = useState("08/05/2001");
  const [cpf, setCpf] = useState("502.702.168-20");
  const [endereco, setEndereco] = useState(
    "Alameda dos anturios 201 Santana de parnaiba SP 06626200"
  );
  const [telefone, setTelefone] = useState("(11) 94190-1415");
  const [email, setEmail] = useState("italo.felipe.ignaico@hotmail.com");
  const [estado_civil, setEstado_civil] = useState("Solteiro");
  const [nome_antigo, setNome_antigo] = useState("Não possui");
  const [nacionalidades, setNacionalidades] = useState("Não possui");
  const [serviu_exercito, setServiu_exercito] = useState("Não");
  const [estado_deseja, setEstado_deseja] = useState("Miami");
  const [data_deseja, setData_deseja] = useState("18/03/2022");
  const [tempo_deseja, setTempo_deseja] = useState("15 dias");
  const [hotel, setHotel] = useState("Miame hotel");
  const [viajar_junto, setViajar_junto] = useState(
    "Pai - Anderson alexandre ignacio ; Mae - Rute maria de morais "
  );
  const [pagar_viagem, setPagar_viagem] = useState("Eu mesmo");
  const [possui_visto, setPossui_visto] = useState("Sim");
  const [foi_para_eua, setFoi_para_eua] = useState("Sim");
  const [visto_per_o_rou, setVisto_per_o_rou] = useState("Não");
  const [visto_recusado, setVisto_recusado] = useState("Não");
  const [passaporte_per_o_rou, setPassaporte_per_o_rou] = useState("Não");
  const [passaporte_recusado, setPassaporte_recusado] = useState("Não");
  const [parentes_nos_eua, setParentes_nos_eua] = useState("Não");
  const [nome_pai, setNome_pai] = useState("Anderson alexandre ignacio");
  const [data_nasc_pai, setData_nasc_pai] = useState("24/06/1980");
  const [pai_mora_eua, setPai_mora_eua] = useState("Não");
  const [nome_mae, setNome_mae] = useState("Rute maria de morais");
  const [data_nasc_mae, setData_nasc_mae] = useState("24/06/1980");
  const [mae_mora_eua, setMae_mora_eua] = useState("Não");
  const [instagram, setInstagram] = useState("@iti_ignacio");
  const [facebook, setFacebook] = useState("Não possui");
  const [linkedin, setLinkedin] = useState("Italo felipe ignacio");
  const [trabalho, setTrabalho] = useState("Programador Full-Stack");
  const [nome_empresa, setNome_empresa] = useState("Senai");
  const [endereco_empresa, setEndereco_empresa] = useState("jandira");
  const [telefone_empresa, setTelefone_empresa] = useState("(11) 4707-3695");
  const [data_inicio_empresa, setData_inicio_empresa] = useState("01/09/2021");
  const [trabalho_antigo, setTrabalho_antigo] = useState("Não possui");
  const [nome_empresa_antigo, setNome_empresa_antigo] = useState("Não possui");
  const [endereco_empresa_antigo, setEndereco_empresa_antigo] =
    useState("Não possui");
  const [telefone_empresa_antigo, setTelefone_empresa_antigo] =
    useState("Não possui");
  const [data_ini_ter_empresa_antigo, setData_ini_ter_empresa_antigo] =
    useState("Não possui");
  const [facul_escola, setFacul_escola] = useState("Sim");
  const [nome_facul_escola, setNome_facul_escola] = useState("Unip");
  const [endereco_facul_escola, setEndereco_facul_escola] = useState(
    "alameda yojirotakaoka 1912"
  );
  const [telefone_facul_escola, setTelefone_facul_escola] =
    useState("(11) 4536-8214");
  const [curso_facul, setCurso_facul] = useState("Ciencia da computacao");
  const [ini_ter_facul_escola, setIni_ter_facul_escola] = useState(
    "Inicio: 01/01/2019 - Termino 30/12/2022 "
  );

*/
