import { prisma } from "./prisma";

export interface Data {
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

export async function getAllDatas() {
  const data = await prisma.data.findMany();
  return data;
}

export async function getDatas(cpf: string) {
  const data = await prisma.data.findFirst({
    where: {
      cpf,
    },
  });
  return data;
}

export async function createData(data: Data) {
  await prisma.data.create({
    data,
  });
}

export async function updateData(id: number, data: Data) {
  await prisma.data.update({
    where: {
      id,
    },
    data,
  });
}

export async function deleteData(id: number) {
  await prisma.data.delete({
    where: {
      id,
    },
  });
}
