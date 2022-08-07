import { GetServerSideProps } from "next";
import { Data, getAllDatas } from "../lib/db";

export const getServerSideProps: GetServerSideProps = async () => {
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
  return <>{JSON.stringify(dados, null, 4)}</>;
};

export default Dados;
