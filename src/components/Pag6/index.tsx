import React from "react";
import { Junta, Container } from "../../styles/pageStyled";

interface AllProps {
  next: boolean;
  setNext: Function;
}

const Pag6 = (props: AllProps) => {
  return (
    <Container>
      {props.setNext(true)}
      <Junta>
        <label>Pag</label>
        <input value={""} alt={""} onChange={(e) => console.log()} />
        <br />
      </Junta>
    </Container>
  );
};

export default Pag6;
