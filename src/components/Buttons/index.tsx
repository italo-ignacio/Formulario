import React from "react";
import { DivButtons, Text } from "./styled";

interface Allprops {
  pag: number;
  setPag: Function;
  save?: boolean;
  saveOnDB?: Function;
  text: string;
  next: boolean;
  setNext: Function;
}

const Buttons = (props: Allprops) => {
  const handleClick = () => {
    props.setPag(props.pag > 0 ? props.pag - 1 : props.pag);
    props.setNext(false);
    window.scrollTo(0, 0);
  };

  const handleClick2 = () => {
    window.scrollTo(0, 0);
    props.setPag(props.pag < 10 ? props.pag + 1 : props.pag);
  };

  return (
    <>
      <DivButtons>
        <button onClick={handleClick}>Voltar</button>

        {props.save ? (
          <button
            disabled={props.next}
            onClick={() => {
              props.saveOnDB ? props.saveOnDB() : <></>;
            }}
          >
            Salvar
          </button>
        ) : (
          <button disabled={props.next} onClick={handleClick2}>
            Avançar
          </button>
        )}
      </DivButtons>
      <Text>{props.text}</Text>
    </>
  );
};

export default Buttons;
