import React from "react";
import { Junta, Container } from "../../styles/pageStyled";

interface AllProps {
  next: boolean;
  setNext: Function;
  instagram: string;
  setInstagram: Function;
  facebook: string;
  setFacebook: Function;
  linkedin: string;
  setLinkedin: Function;
}

const Pag7 = (props: AllProps) => {
  return (
    <Container>
      <Junta>
        <label>Instagram</label>
        <input
          value={props.instagram}
          alt={"Instagram"}
          onChange={(e) => props.setInstagram(e.target.value)}
        />
        <br />

        <label>Facebook</label>
        <input
          value={props.facebook}
          alt={"Facebook"}
          onChange={(e) => props.setFacebook(e.target.value)}
        />
        <br />
        <label>Linkedin</label>
        <input
          value={props.linkedin}
          alt={"Linkedin"}
          onChange={(e) => props.setLinkedin(e.target.value)}
        />
        <br />
      </Junta>
    </Container>
  );
};

export default Pag7;
