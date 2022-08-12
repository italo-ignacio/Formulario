import React from "react";
import { DivButtons, Text } from "./styled";

interface Allprops {
  pag: number;
  setPag: Function;
  save?: boolean;
  saveOnDB?: Function;
  text: string;
}
const Buttons = (props: Allprops) => {
  return (
    <>
      <DivButtons>
        <button
          onClick={() =>
            props.setPag(props.pag > 0 ? props.pag - 1 : props.pag)
          }
        >
          Voltar
        </button>
        {props.save ? (
          <button onClick={() => (props.saveOnDB ? props.saveOnDB() : <></>)}>
            Salvar
          </button>
        ) : (
          <button
            onClick={() =>
              props.setPag(props.pag < 9 ? props.pag + 1 : props.pag)
            }
          >
            Avançar
          </button>
        )}
      </DivButtons>
      <Text>{props.text}</Text>
    </>
  );
};

export default Buttons;
