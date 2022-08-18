import type { NextPage } from "next";
import { useState } from "react";
import { Container, Initial, Text } from "../src/styles/GlobalStyles";

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
import InputMask from "react-input-mask";
import { useRouter } from "next/router";

const Home: NextPage = () => {
  const router = useRouter();
  const [nome, setNome] = useState("");
  const [data_nascimento, setData_nascimento] = useState("");
  const [cpf, setCpf] = useState("");
  const [endereco, setEndereco] = useState("");
  const [telefone, setTelefone] = useState("");
  const [email, setEmail] = useState("");
  const [estado_civil, setEstado_civil] = useState("");
  const [nome_solteiro, setNome_solteiro] = useState("");
  const [tnome_solteiro, settNome_solteiro] = useState("");
  const [nacionalidades, setNacionalidades] = useState("");
  const [Snacionalidades, setSNacionalidades] = useState("");
  const [Anacionalidades, setANacionalidades] = useState([]);
  const [serviu_exercito, setServiu_exercito] = useState("");
  const [batalhao, setBatalhao] = useState("");
  const [patente, setPatente] = useState("");
  const [especialidade, setEspecialidade] = useState("");
  const [ini_serviu_exercito, setIniServiu_exercito] = useState("");
  const [ter_serviu_exercito, setTerServiu_exercito] = useState("");
  const [Sserviu_exercito, setSServiu_exercito] = useState("");
  const [estado_deseja, setEstado_deseja] = useState("");
  const [data_deseja, setData_deseja] = useState("");
  const [tempo_deseja, setTempo_deseja] = useState("");
  const [Ntempo_deseja, setNTempo_deseja] = useState("");
  const [Ttempo_deseja, setTTempo_deseja] = useState("Dia (s)");
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
  const [foi_para_outro_pais, setFoi_para_outro_pais] = useState("");
  const [Afoi_para_outro_pais, setAFoi_para_outro_pais] = useState([]);
  const [Sfoi_para_outro_pais, setSFoi_para_outro_pais] = useState("");
  const [visto_per_o_rou, setVisto_per_o_rou] = useState("");
  const [visto_recusado, setVisto_recusado] = useState("");
  const [passaporte_per_o_rou, setPassaporte_per_o_rou] = useState("");
  const [parentes_nos_eua, setParentes_nos_eua] = useState("");
  const [Sparentes_nos_eua, setSParentes_nos_eua] = useState("");
  const [Aparentes_nos_eua, setAParentes_nos_eua] = useState([]);
  const [Aparentes_nos_eua2, setAParentes_nos_eua2] = useState([]);
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
          foi_para_outro_pais: foi_para_outro_pais,
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
      if (pag == 9) {
        setPag(10);
      }
    } catch (error) {
      alert(`Erro ao salvar`);
    }
    setLoading(false);
  };
  const searchUser = async () => {
    setLoading(true);
    if (cpf.replace(/[^0-9]+/g, "").length == 11) {
      try {
        await fetch("/api/data/" + cpf.replace(/[^0-9]+/g, ""), {
          method: "GET",
        })
          .then((T) => T.json())
          .then((data) => {
            if (data != null) {
              setNome(data.nome);
              setEmail(data.email);
              setData_nascimento(data.data_nascimento);
              setCpf(data.cpf);
              setTelefone(data.telefone);
              setEstado_civil(data.estado_civil);
              if (data.nome_solteiro == "Não possui") {
                settNome_solteiro("nao");
                setNome_solteiro("Não possui");
              } else if (data.nome_solteiro == "") {
                setNome_solteiro("");
              } else {
                settNome_solteiro("sim");
                setNome_solteiro(data.nome_solteiro);
              }
              setCep(data.endereco.substr("0", "9"));
              if (data.nacionalidades == "Não possui") {
                setSNacionalidades("nao");
                setNacionalidades("Não possui");
              } else if (data.nacionalidades == "") {
              } else {
                setSNacionalidades("sim");
                let naci = data.nacionalidades.split(",");
                naci.pop();
                setANacionalidades(naci);
              }
              if (data.idiomas == "Não fala outro idioma") {
                setSIdiomas("nao");
                setIdiomas("Não fala outro idioma");
              } else if (data.idiomas == "") {
              } else {
                setSIdiomas("sim");
                let idi = data.idiomas.split(",");
                idi.pop();
                setAIdiomas(idi);
              }
              if (data.serviu_exercito == "Não serviu") {
                setServiu_exercito("Não serviu");
                setSServiu_exercito("nao");
                setBatalhao("n");
                setPatente("n");
                setEspecialidade("n");
                setIniServiu_exercito("n");
                setTerServiu_exercito("n");
              } else if (data.serviu_exercito == "") {
              } else {
                setSServiu_exercito("sim");
                let exe = data.serviu_exercito.split(",");
                setBatalhao(exe[0].replace("Branch: ", "").replaceAll(" ", ""));
                setPatente(exe[1].replace("Rank: ", "").replaceAll(" ", ""));
                setEspecialidade(
                  exe[2].replace("Specialty: ", "").replaceAll(" ", "")
                );
                setIniServiu_exercito(
                  exe[3].replace("Inicio: ", "").replaceAll(" ", "")
                );
                setTerServiu_exercito(
                  exe[4].replace("Término: ", "").replaceAll(" ", "")
                );
                setServiu_exercito(data.serviu_exercito);
              }
              setEstado_deseja(data.estado_deseja);
              setData_deseja(data.data_deseja);
              setNTempo_deseja(data.tempo_deseja.replace(/[^0-9]+/g, ""));
              if (
                data.tempo_deseja
                  .replace(/[0-9]+/g, "")
                  .replace(" ", "")
                  .indexOf("D") == 0
              ) {
                setTTempo_deseja("Dia (s)");
              } else if (data.tempo_deseja == "") {
              } else {
                setTTempo_deseja("Mês (es)");
              }
              setTempo_deseja(data.tempo_deseja);
              setHotel(data.hotel);
              if (data.pagar_viagem == "Própria pessoa") {
                setPagar_viagem("Própria pessoa");
                setSPagar_viagem("sim");
              } else if (data.pagar_viagem == "") {
              } else {
                setSPagar_viagem("nao");
                setPagar_viagem(data.pagar_viagem);
                let pagar = data.pagar_viagem.split("-");
                NetGPagar_viagem(pagar[1]);
                setGPagar_viagem(pagar[0]);
              }
              if (data.viajar_junto == "Viajar sozinho") {
                setViajar_junto("Viajar sozinho");
                setSViajar_junto("sim");
              } else if (data.viajar_junto == "") {
              } else {
                setSViajar_junto("nao");
                let peso = data.viajar_junto.split(",");
                peso.pop();
                setAViajar_junto(peso);
              }
              setPossui_visto(data.possui_visto);
              setFoi_para_eua(data.foi_para_eua);
              setVisto_per_o_rou(data.visto_per_o_rou);
              setVisto_recusado(data.visto_recusado);
              setPassaporte_per_o_rou(data.passaporte_per_o_rou);
              if (data.foi_para_outro_pais == "Não viajou para outro país") {
                setSFoi_para_outro_pais("nao");
                setFoi_para_outro_pais("Não viajou para outro país");
              } else if (data.foi_para_outro_pais == "") {
              } else {
                setSFoi_para_outro_pais("sim");
                let pais = data.foi_para_outro_pais.split(",");
                pais.pop();
                setAFoi_para_outro_pais(pais);
              }
              if (data.parentes_nos_eua == "Não possui") {
                setParentes_nos_eua("Não possui");
                setSParentes_nos_eua("Não");
              } else if (data.parentes_nos_eua == "") {
              } else {
                setSParentes_nos_eua("Sim");
                let parentes = data.parentes_nos_eua.split(",");
                parentes.pop();
                setAParentes_nos_eua(parentes);
                setAParentes_nos_eua2(parentes);
              }
              setNome_pai(data.nome_pai);
              setData_nasc_pai(data.data_nasc_pai);
              setPai_mora_eua(data.pai_mora_eua);
              setNome_mae(data.nome_mae);
              setData_nasc_mae(data.data_nasc_mae);
              setMae_mora_eua(data.mae_mora_eua);
              setInstagram(data.instagram);
              setFacebook(data.facebook);
              setLinkedin(data.linkedin);
              if (data.trabalho == "Não trabalha") {
                setSTrabalho("nao");
                setTrabalho("Não trabalha");
                setNome_empresa("Não trabalha");
                setEndereco_empresa("Não trabalha");
                setData_inicio_empresa("Não trabalha");
                setTelefone_empresa("Não trabalha");
              } else if (data.trabalho == "") {
              } else {
                setSTrabalho("sim");
                setTrabalho(data.trabalho);
                setNome_empresa(data.nome_empresa);
                setEndereco_empresa(data.endereco_empresa);
                setData_inicio_empresa(data.data_inicio_empresa);
                setTelefone_empresa(data.telefone_empresa);
              }
              if (data.trabalho_antigo == "Nunca trabalhou") {
                setSTrabalho_antigo("nao");
                setTrabalho_antigo("Nunca trabalhou");
                setNome_empresa_antigo("Nunca trabalhou");
                setEndereco_empresa_antigo("Nunca trabalhou");
                setData_ter_empresa_antigo("Nunca trabalhou");
                setData_ini_empresa_antigo("Nunca trabalhou");
                setTelefone_empresa_antigo("Nunca trabalhou");
                setData_ini_ter_empresa_antigo("Nunca trabalhou");
              } else if (data.trabalho_antigo == "") {
              } else {
                setSTrabalho_antigo("sim");
                setTrabalho_antigo(data.trabalho_antigo);
                setNome_empresa_antigo(data.nome_empresa_antigo);
                setEndereco_empresa_antigo(data.endereco_empresa_antigo);
                setTelefone_empresa_antigo(data.telefone_empresa_antigo);
                let dat = data.data_ini_ter_empresa_antigo.split("-");
                setData_ini_empresa_antigo(
                  dat[0].replace("Inicio: ", "").replace(" ", "")
                );
                setData_ter_empresa_antigo(
                  dat[1].replace("Término: ", "").replace(" ", "")
                );
                setData_ini_ter_empresa_antigo(
                  data.data_ini_ter_empresa_antigo
                );
              }
              if (data.nome_facul_escola == "Não possui") {
                setFacul("nao");
                setCurso_facul("Não possui");
                setNome_facul_escola("Não possui");
                setEndereco_facul_escola("Não possui");
                setTelefone_facul_escola("Não possui");
                setIni_facul_escola("Não possui");
                setTer_facul_escola("Não possui");
                setIni_ter_facul_escola("Não possui");
              } else if (data.nome_facul_escola == "") {
              } else {
                if (data.curso_facul == "Não possui") {
                  setFacul("escola");
                  setCurso_facul("Não possui");
                  setNome_facul_escola(data.nome_facul_escola);
                  setEndereco_facul_escola(data.endereco_facul_escola);
                  setTelefone_facul_escola(data.telefone_facul_escola);

                  let dat = data.ini_ter_facul_escola.split("-");
                  setIni_facul_escola(
                    dat[0].replace("Inicio: ", "").replace(" ", "")
                  );
                  setTer_facul_escola(
                    dat[1].replace("Término: ", "").replace(" ", "")
                  );
                  setIni_ter_facul_escola(data.ini_ter_facul_escola);
                } else {
                  setFacul("facul");
                  setCurso_facul(data.curso_facul);
                  setNome_facul_escola(data.nome_facul_escola);
                  setEndereco_facul_escola(data.endereco_facul_escola);
                  setTelefone_facul_escola(data.telefone_facul_escola);

                  let dat = data.ini_ter_facul_escola.split("-");
                  setIni_facul_escola(
                    dat[0].replace("Inicio: ", "").replace(" ", "")
                  );
                  setTer_facul_escola(
                    dat[1].replace("Término: ", "").replace(" ", "")
                  );
                  setIni_ter_facul_escola(data.ini_ter_facul_escola);
                }
              }

              setPag(1);
            } else {
              setLoading(false);
              alert("CPF não encontrado");
            }
          });
      } catch (error) {
        setLoading(false);
        alert("CPF não encontrado");
      }
    }
    setLoading(false);
  };

  return (
    <main id={"top"}>
      {loading ? <Loading text="Aguarde..." /> : <></>}
      <Container>
        {pag == 0 ? (
          <>
            <Initial>
              <h1>Formulário</h1>
              <br />
              <br />
              <button onClick={() => setPag(1)}>Iniciar formulário</button>

              <br />
              <br />
              <br />
              <br />
              <h3>Para editar seus dados digite o cpf</h3>
              <br />
              <InputMask
                mask={"999.999.999-99"}
                value={cpf}
                type={"tel"}
                placeholder={"CPF"}
                alt={"CPF"}
                onChange={(e) => setCpf(e.target.value)}
              />
              <br />
              <br />
              <button onClick={searchUser}>Editar dados</button>
              <br />
              <br />
              <br />
              <br />
              <button
                onClick={() => {
                  router.reload();
                }}
              >
                Limpar dados
              </button>
              <br />
              <br />
            </Initial>
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
              saveOnDB={handleClick}
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
              saveOnDB={handleClick}
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
              batalhao={batalhao}
              setBatalhao={setBatalhao}
              patente={patente}
              setPatente={setPatente}
              especialidade={especialidade}
              setEspecialidade={setEspecialidade}
              ini_serviu_exercito={ini_serviu_exercito}
              setIniServiu_exercito={setIniServiu_exercito}
              ter_serviu_exercito={ter_serviu_exercito}
              setTerServiu_exercito={setTerServiu_exercito}
            />
            <Buttons
              pag={pag}
              setPag={setPag}
              text={"Etapa 3 de 9"}
              next={next}
              setNext={setNext}
              saveOnDB={handleClick}
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
              Ttempo_deseja={Ttempo_deseja}
              setTTempo_deseja={setTTempo_deseja}
              Ntempo_deseja={Ntempo_deseja}
              setNTempo_deseja={setNTempo_deseja}
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
              saveOnDB={handleClick}
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
              Aparentes_nos_eua2={Aparentes_nos_eua2}
              setAParentes_nos_eua2={setAParentes_nos_eua2}
              Sparentes_nos_eua={Sparentes_nos_eua}
              setSParentes_nos_eua={setSParentes_nos_eua}
              foi_para_outro_pais={foi_para_outro_pais}
              setFoi_para_outro_pais={setFoi_para_outro_pais}
              Sfoi_para_outro_pais={Sfoi_para_outro_pais}
              setSFoi_para_outro_pais={setSFoi_para_outro_pais}
              Afoi_para_outro_pais={Afoi_para_outro_pais}
              setAFoi_para_outro_pais={setAFoi_para_outro_pais}
            />
            <Buttons
              pag={pag}
              setPag={setPag}
              text={"Etapa 5 de 9"}
              next={next}
              setNext={setNext}
              saveOnDB={handleClick}
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
              saveOnDB={handleClick}
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
              saveOnDB={handleClick}
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
              saveOnDB={handleClick}
            />
          </>
        ) : (
          <></>
        )}
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
              save={true}
              saveOnDB={handleClick}
            />
          </>
        ) : (
          <></>
        )}
        {pag == 10 ? (
          <>
            <Initial>
              <h1>Formulário respondido</h1>
              <br />
              <br />
              <br />
              <br />
              <button
                onClick={() => {
                  router.reload();
                }}
              >
                Voltar para o inicio
              </button>
            </Initial>
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
