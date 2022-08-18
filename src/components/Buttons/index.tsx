import React from "react";
import { DivButtons, Text } from "./styled";

interface Allprops {
  pag: number;
  setPag: Function;
  save?: boolean;
  saveOnDB: Function;
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
        <div>
          <button onClick={handleClick}>Voltar</button>
        </div>

        {props.save ? (
          <></>
        ) : (
          <div>
            <button disabled={props.next} onClick={handleClick2}>
              Avançar
            </button>
          </div>
        )}

        <div className="ce">
          <button
            disabled={props.next}
            onClick={() => {
              props.saveOnDB();
            }}
          >
            Salvar
          </button>
        </div>
        {props.save ? (
          <></>
        ) : (
          <label className="ce">Você pode salvar tudo no final</label>
        )}
      </DivButtons>
      <Text>{props.text}</Text>
    </>
  );
};

export default Buttons;
