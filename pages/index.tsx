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
  const [nome_solteiro, setNome_solteiro] = useState("");
  const [tnome_solteiro, settNome_solteiro] = useState("");
  const [nacionalidades, setNacionalidades] = useState("");
  const [Snacionalidades, setSNacionalidades] = useState("");
  const [Anacionalidades, setANacionalidades] = useState([]);
  const [serviu_exercito, setServiu_exercito] = useState("");
  const [Sserviu_exercito, setSServiu_exercito] = useState("");
  const [estado_deseja, setEstado_deseja] = useState("");
  const [data_deseja, setData_deseja] = useState("");
  const [tempo_deseja, setTempo_deseja] = useState("");
  const [hotel, setHotel] = useState("");
  const [viajar_junto, setViajar_junto] = useState("");
  const [Sviajar_junto, setSViajar_junto] = useState("");
  const [Aviajar_junto, setAViajar_junto] = useState([]);
  const [pagar_viagem, setPagar_viagem] = useState("");
  const [Spagar_viagem, setSPagar_viagem] = useState("");
  const [Gpagar_viagem, setGPagar_viagem] = useState("");
  const [Npagar_viagem, NetGPagar_viagem] = useState("");
  const [possui_visto, setPossui_visto] = useState("");
  const [foi_para_eua, setFoi_para_eua] = useState("");
  const [visto_per_o_rou, setVisto_per_o_rou] = useState("");
  const [visto_recusado, setVisto_recusado] = useState("");
  const [passaporte_per_o_rou, setPassaporte_per_o_rou] = useState("");
  const [parentes_nos_eua, setParentes_nos_eua] = useState("");
  const [Sparentes_nos_eua, setSParentes_nos_eua] = useState("");
  const [Aparentes_nos_eua, setAParentes_nos_eua] = useState([]);
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
  const [Strabalho, setSTrabalho] = useState("");
  const [nome_empresa, setNome_empresa] = useState("");
  const [endereco_empresa, setEndereco_empresa] = useState("");
  const [telefone_empresa, setTelefone_empresa] = useState("");
  const [data_inicio_empresa, setData_inicio_empresa] = useState("");
  const [trabalho_antigo, setTrabalho_antigo] = useState("");
  const [Strabalho_antigo, setSTrabalho_antigo] = useState("");
  const [nome_empresa_antigo, setNome_empresa_antigo] = useState("");
  const [endereco_empresa_antigo, setEndereco_empresa_antigo] = useState("");
  const [telefone_empresa_antigo, setTelefone_empresa_antigo] = useState("");
  const [data_ini_ter_empresa_antigo, setData_ini_ter_empresa_antigo] =
    useState("");
  const [data_ter_empresa_antigo, setData_ter_empresa_antigo] = useState("");
  const [data_ini_empresa_antigo, setData_ini_empresa_antigo] = useState("");
  const [idiomas, setIdiomas] = useState("");
  const [Sidiomas, setSIdiomas] = useState("");
  const [Aidiomas, setAIdiomas] = useState([]);
  const [facul, setFacul] = useState("");
  const [nome_facul_escola, setNome_facul_escola] = useState("");
  const [endereco_facul_escola, setEndereco_facul_escola] = useState("");
  const [telefone_facul_escola, setTelefone_facul_escola] = useState("");
  const [curso_facul, setCurso_facul] = useState("");
  const [ini_ter_facul_escola, setIni_ter_facul_escola] = useState("");
  const [ter_facul_escola, setTer_facul_escola] = useState("");
  const [ini_facul_escola, setIni_facul_escola] = useState("");

  //////////////////////////////
  const [cep, setCep] = useState("");
  const [rua, setRua] = useState("");
  const [cidade, setCidade] = useState("");
  const [bairro, setBairro] = useState("");
  const [complemento, setComplemento] = useState("");
  const [uf, setUf] = useState("");
  const [numero, setNumero] = useState("");
  //////////////////////////

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
    <main id={"top"}>
      {loading ? <Loading text="Salvando" /> : <></>}
      <Container>
        {pag == 9 ? (
          <>
            <Text>Preencha todos os dados</Text>
            <Pag9
              next={next}
              setNext={setNext}
              facul={facul}
              setFacul={setFacul}
              ini_ter_facul_escola={ini_ter_facul_escola}
              setIni_ter_facul_escola={setIni_ter_facul_escola}
              telefone_facul_escola={telefone_facul_escola}
              setTelefone_facul_escola={setTelefone_facul_escola}
              endereco_facul_escola={endereco_facul_escola}
              setEndereco_facul_escola={setEndereco_facul_escola}
              nome_facul_escola={nome_facul_escola}
              setNome_facul_escola={setNome_facul_escola}
              curso_facul={curso_facul}
              setCurso_facul={setCurso_facul}
              ini_facul_escola={ini_facul_escola}
              setIni_facul_escola={setIni_facul_escola}
              ter_facul_escola={ter_facul_escola}
              setTer_facul_escola={setTer_facul_escola}
            />
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
            {!next ? (
              <>
                nome: {nome},
                <br />
                data_nascimento: {data_nascimento},
                <br />
                cpf: {cpf},
                <br />
                endereco: {endereco},
                <br />
                telefone: {telefone},
                <br />
                email: {email},
                <br />
                estado_civil: {estado_civil},
                <br />
                nome_solteiro: {nome_solteiro},
                <br />
                nacionalidades: {nacionalidades},
                <br />
                serviu_exercito: {serviu_exercito},
                <br />
                estado_deseja: {estado_deseja},
                <br />
                data_deseja: {data_deseja},
                <br />
                tempo_deseja: {tempo_deseja},
                <br />
                hotel: {hotel},
                <br />
                viajar_junto: {viajar_junto},
                <br />
                pagar_viagem: {pagar_viagem},
                <br />
                possui_visto: {possui_visto},
                <br />
                foi_para_eua: {foi_para_eua},
                <br />
                visto_per_o_rou: {visto_per_o_rou},
                <br />
                visto_recusado: {visto_recusado},
                <br />
                passaporte_per_o_rou: {passaporte_per_o_rou},
                <br />
                parentes_nos_eua: {parentes_nos_eua},
                <br />
                nome_pai: {nome_pai},
                <br />
                data_nasc_pai: {data_nasc_pai},
                <br />
                pai_mora_eua: {pai_mora_eua},
                <br />
                nome_mae: {nome_mae},
                <br />
                data_nasc_mae: {data_nasc_mae},
                <br />
                mae_mora_eua: {mae_mora_eua},
                <br />
                instagram: {instagram},
                <br />
                facebook: {facebook},
                <br />
                linkedin: {linkedin},
                <br />
                trabalho: {trabalho},
                <br />
                nome_empresa: {nome_empresa},
                <br />
                endereco_empresa: {endereco_empresa},
                <br />
                telefone_empresa: {telefone_empresa},
                <br />
                data_inicio_empresa: {data_inicio_empresa},
                <br />
                trabalho_antigo: {trabalho_antigo},
                <br />
                nome_empresa_antigo: {nome_empresa_antigo},
                <br />
                endereco_empresa_antigo: {endereco_empresa_antigo},
                <br />
                telefone_empresa_antigo: {telefone_empresa_antigo},
                <br />
                data_ini_ter_empresa_antigo: {data_ini_ter_empresa_antigo},
                <br />
                idiomas: {idiomas},
                <br />
                nome_facul_escola: {nome_facul_escola},
                <br />
                endereco_facul_escola: {endereco_facul_escola},
                <br />
                telefone_facul_escola: {telefone_facul_escola},
                <br />
                curso_facul: {curso_facul},
                <br />
                ini_ter_facul_escola: {ini_ter_facul_escola},
                <br />
              </>
            ) : (
              <></>
            )}
          </>
        ) : (
          <></>
        )}
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
              tnome_solteiro={tnome_solteiro}
              settNome_solteiro={settNome_solteiro}
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
            <Text>Preencha o endereço</Text>
            <Pag2
              next={next}
              setNext={setNext}
              endereco={endereco}
              setEndereco={setEndereco}
              cep={cep}
              setCep={setCep}
              rua={rua}
              setRua={setRua}
              cidade={cidade}
              setCidade={setCidade}
              bairro={bairro}
              setBairro={setBairro}
              complemento={complemento}
              setComplemento={setComplemento}
              uf={uf}
              setUf={setUf}
              numero={numero}
              setNumero={setNumero}
            />
            <Buttons
              pag={pag}
              setPag={setPag}
              text={"Etapa 2 de 9"}
              next={next}
              setNext={setNext}
            />
          </>
        ) : (
          <></>
        )}
        {pag == 3 ? (
          <>
            <Text>Preencha todos os dados</Text>
            <Pag3
              next={next}
              setNext={setNext}
              idiomas={idiomas}
              setIdiomas={setIdiomas}
              Sidiomas={Sidiomas}
              setSIdiomas={setSIdiomas}
              nacionalidades={nacionalidades}
              setNacionalidades={setNacionalidades}
              Snacionalidades={Snacionalidades}
              setSNacionalidades={setSNacionalidades}
              serviu_exercito={serviu_exercito}
              setServiu_exercito={setServiu_exercito}
              Sserviu_exercito={Sserviu_exercito}
              setSServiu_exercito={setSServiu_exercito}
              Anacionalidades={Anacionalidades}
              setANacionalidades={setANacionalidades}
              Aidiomas={Aidiomas}
              setAIdiomas={setAIdiomas}
            />
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
            <Text>Preencha todos os dados</Text>
            <Pag4
              next={next}
              setNext={setNext}
              estado_deseja={estado_deseja}
              setEstado_deseja={setEstado_deseja}
              data_deseja={data_deseja}
              setData_deseja={setData_deseja}
              tempo_deseja={tempo_deseja}
              setTempo_deseja={setTempo_deseja}
              hotel={hotel}
              setHotel={setHotel}
              viajar_junto={viajar_junto}
              setViajar_junto={setViajar_junto}
              pagar_viagem={pagar_viagem}
              setPagar_viagem={setPagar_viagem}
              Spagar_viagem={Spagar_viagem}
              setSPagar_viagem={setSPagar_viagem}
              Sviajar_junto={Sviajar_junto}
              setSViajar_junto={setSViajar_junto}
              Aviajar_junto={Aviajar_junto}
              setAViajar_junto={setAViajar_junto}
              Gpagar_viagem={Gpagar_viagem}
              setGPagar_viagem={setGPagar_viagem}
              Npagar_viagem={Npagar_viagem}
              NetGPagar_viagem={NetGPagar_viagem}
            />
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
            <Text>Preencha todos os dados</Text>
            <Pag5
              next={next}
              setNext={setNext}
              possui_visto={possui_visto}
              setPossui_visto={setPossui_visto}
              foi_para_eua={foi_para_eua}
              setFoi_para_eua={setFoi_para_eua}
              visto_per_o_rou={visto_per_o_rou}
              setVisto_per_o_rou={setVisto_per_o_rou}
              visto_recusado={visto_recusado}
              setVisto_recusado={setVisto_recusado}
              passaporte_per_o_rou={passaporte_per_o_rou}
              setPassaporte_per_o_rou={setPassaporte_per_o_rou}
              parentes_nos_eua={parentes_nos_eua}
              setParentes_nos_eua={setParentes_nos_eua}
              Aparentes_nos_eua={Aparentes_nos_eua}
              setAParentes_nos_eua={setAParentes_nos_eua}
              Sparentes_nos_eua={Sparentes_nos_eua}
              setSParentes_nos_eua={setSParentes_nos_eua}
            />
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
            <Text>Preencha todos os dados</Text>
            <Pag6
              next={next}
              setNext={setNext}
              nome_pai={nome_pai}
              setNome_pai={setNome_pai}
              data_nasc_pai={data_nasc_pai}
              setData_nasc_pai={setData_nasc_pai}
              pai_mora_eua={pai_mora_eua}
              setPai_mora_eua={setPai_mora_eua}
              nome_mae={nome_mae}
              setNome_mae={setNome_mae}
              data_nasc_mae={data_nasc_mae}
              setData_nasc_mae={setData_nasc_mae}
              mae_mora_eua={mae_mora_eua}
              setMae_mora_eua={setMae_mora_eua}
            />
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
            <Text>Preencha todos os dados</Text>
            <Pag7
              next={next}
              setNext={setNext}
              instagram={instagram}
              setInstagram={setInstagram}
              facebook={facebook}
              setFacebook={setFacebook}
              linkedin={linkedin}
              setLinkedin={setLinkedin}
            />
            <Buttons
              pag={pag}
              setPag={setPag}
              text={"Etapa 7 de 9"}
              next={false}
              setNext={setNext}
            />
          </>
        ) : (
          <></>
        )}
        {pag == 8 ? (
          <>
            <Text>Preencha todos os dados</Text>
            <Pag8
              next={next}
              setNext={setNext}
              trabalho={trabalho}
              setTrabalho={setTrabalho}
              Strabalho={Strabalho}
              setSTrabalho={setSTrabalho}
              nome_empresa={nome_empresa}
              setNome_empresa={setNome_empresa}
              endereco_empresa={endereco_empresa}
              setEndereco_empresa={setEndereco_empresa}
              telefone_empresa={telefone_empresa}
              setTelefone_empresa={setTelefone_empresa}
              data_inicio_empresa={data_inicio_empresa}
              setData_inicio_empresa={setData_inicio_empresa}
              trabalho_antigo={trabalho_antigo}
              setTrabalho_antigo={setTrabalho_antigo}
              Strabalho_antigo={Strabalho_antigo}
              setSTrabalho_antigo={setSTrabalho_antigo}
              nome_empresa_antigo={nome_empresa_antigo}
              setNome_empresa_antigo={setNome_empresa_antigo}
              endereco_empresa_antigo={endereco_empresa_antigo}
              setEndereco_empresa_antigo={setEndereco_empresa_antigo}
              telefone_empresa_antigo={telefone_empresa_antigo}
              setTelefone_empresa_antigo={setTelefone_empresa_antigo}
              data_ini_ter_empresa_antigo={data_ini_ter_empresa_antigo}
              setData_ini_ter_empresa_antigo={setData_ini_ter_empresa_antigo}
              data_ini_empresa_antigo={data_ini_empresa_antigo}
              setData_ini_empresa_antigo={setData_ini_empresa_antigo}
              data_ter_empresa_antigo={data_ter_empresa_antigo}
              setData_ter_empresa_antigo={setData_ter_empresa_antigo}
            />
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
      </Container>
      <br />
    </main>
  );
};

export default Home;
/*
nome: {nome},
            <br />
            data_nascimento: {data_nascimento},
            <br />
            cpf: {cpf},
            <br />
            endereco: {endereco},
            <br />
            telefone: {telefone},
            <br />
            email: {email},
            <br />
            estado_civil: {estado_civil},
            <br />
            nome_solteiro: {nome_solteiro},
            <br />
            nacionalidades: {nacionalidades},
            <br />
            serviu_exercito: {serviu_exercito},
            <br />
            estado_deseja: {estado_deseja},
            <br />
            data_deseja: {data_deseja},
            <br />
            tempo_deseja: {tempo_deseja},
            <br />
            hotel: {hotel},
            <br />
            viajar_junto: {viajar_junto},
            <br />
            pagar_viagem: {pagar_viagem},
            <br />
            possui_visto: {possui_visto},
            <br />
            foi_para_eua: {foi_para_eua},
            <br />
            visto_per_o_rou: {visto_per_o_rou},
            <br />
            visto_recusado: {visto_recusado},
            <br />
            passaporte_per_o_rou: {passaporte_per_o_rou},
            <br />
            parentes_nos_eua: {parentes_nos_eua},
            <br />
            nome_pai: {nome_pai},
            <br />
            data_nasc_pai: {data_nasc_pai},
            <br />
            pai_mora_eua: {pai_mora_eua},
            <br />
            nome_mae: {nome_mae},
            <br />
            data_nasc_mae: {data_nasc_mae},
            <br />
            mae_mora_eua: {mae_mora_eua},
            <br />
            instagram: {instagram},
            <br />
            facebook: {facebook},
            <br />
            linkedin: {linkedin},
            <br />
            trabalho: {trabalho},
            <br />
            nome_empresa: {nome_empresa},
            <br />
            endereco_empresa: {endereco_empresa},
            <br />
            telefone_empresa: {telefone_empresa},
            <br />
            data_inicio_empresa: {data_inicio_empresa},
            <br />
            trabalho_antigo: {trabalho_antigo},
            <br />
            nome_empresa_antigo: {nome_empresa_antigo},
            <br />
            endereco_empresa_antigo: {endereco_empresa_antigo},
            <br />
            telefone_empresa_antigo: {telefone_empresa_antigo},
            <br />
            data_ini_ter_empresa_antigo: {data_ini_ter_empresa_antigo},
            <br />
            idiomas: {idiomas},
            <br />
            nome_facul_escola: {nome_facul_escola},
            <br />
            endereco_facul_escola: {endereco_facul_escola},
            <br />
            telefone_facul_escola: {telefone_facul_escola},
            <br />
            curso_facul: {curso_facul},
            <br />
            ini_ter_facul_escola: {ini_ter_facul_escola},
            <br />

*/
