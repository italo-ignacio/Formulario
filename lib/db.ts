import { prisma } from "./prisma";

export interface Data {
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

export async function getAllDatas() {
  const data = await prisma.data.findMany();
  return data;
}

export async function getDatas(nome: string) {
  const data = await prisma.data.findUnique({
    where: {
      nome,
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
