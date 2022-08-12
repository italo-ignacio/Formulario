import React from "react";
import { DivButtons, Text } from "./styled";

interface Allprops {
  pag: number;
  setPag: Function;
  save?: boolean;
  saveOnDB?: Function;
  text: string;
  next?: boolean;
  setNext: Function;
}

const Buttons = (props: Allprops) => {
  const handleClick = () => {
    props.setPag(props.pag > 0 ? props.pag - 1 : props.pag);
    props.setNext(false);
  };
  return (
    <>
      <DivButtons>
        <button onClick={handleClick}>Voltar</button>
        {props.save ? (
          <button
            disabled={props.next}
            onClick={() => (props.saveOnDB ? props.saveOnDB() : <></>)}
          >
            Salvar
          </button>
        ) : (
          <button
            disabled={props.next}
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
