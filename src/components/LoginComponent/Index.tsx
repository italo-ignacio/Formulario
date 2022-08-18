import { useRouter } from "next/router";
import React, { useContext, useState } from "react";
import { AuthContext } from "../../contexts/auth";
import { Container2, Form } from "../../styles/GlobalStyles";

const LoginComponent = () => {
  const [nome, setNome] = useState("");
  const [clas, setClas] = useState(false);
  const [password, setPassword] = useState("");
  const provider = useContext(AuthContext);
  const router = useRouter();

  const handleSubmit = (e: any) => {
    e.preventDefault();
    try {
      provider?.login(nome, password);
    } catch (error) {
      setClas(true);
    }
  };
  const dados = () => {
    router.replace("/dados");
  };
  return (
    <>
      {provider?.authenticated ? (
        <Container2>
          <button onClick={dados}>Ir para dados</button>
        </Container2>
      ) : (
        <Container2>
          <h1>Login</h1>
          <Form onSubmit={handleSubmit}>
            <label htmlFor="name">
              <input
                placeholder="Nome"
                value={nome}
                onChange={(e) => {
                  setNome(e.target.value);
                }}
              />
            </label>

            <label htmlFor="password">
              <input
                placeholder="Senha"
                type="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </label>
            {clas ? "Login incorreto" : ""}
            <button type="submit">Fazer Login</button>
          </Form>
        </Container2>
      )}
    </>
  );
};

export default LoginComponent;
