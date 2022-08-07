import { prisma } from "./prisma";

export interface Data {
  id: number;
  name: string;
}

export async function getAllDatas() {
  const data = await prisma.data.findMany();
  return data;
}

export async function createData(name: string) {
  await prisma.data.create({
    data: {
      name,
    },
  });
}
