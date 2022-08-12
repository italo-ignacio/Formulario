import React from "react";
import { Container } from "./styled";

interface Allprops {
  text: string;
}
const Loading = (props: Allprops) => {
  return (
    <Container>
      <div />
      <span>{props.text}</span>
      <span className="icone"></span>
    </Container>
  );
};

export default Loading;
