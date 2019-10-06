import React, { useState } from "react";

import { Container } from "./styles";

import api from "../../services/api";

import ButtonComponent from "../../components/ButtonComponent";
import FormComponent from "../../components/FormComponent";

function LoginPage({ history }) {
  const [email, setEmail] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();
    api
      .post("/sessions", {
        email
      })
      .then(({ data }) => {
        const { _id } = data;
        localStorage.setItem("user", _id);
        history.push("/dashboard");
      });
  }

  return (
    <Container>
      <p>
        Ofereça <strong>spots</strong> para programadores e encontre{" "}
        <strong> talentos</strong> para sua empresa
      </p>
      <FormComponent onSubmit={handleSubmit}>
        <label htmlFor="email">E-MAIL *</label>
        <input
          type="email"
          id="email"
          placeholder="Seu melhor e-mail"
          onChange={event => setEmail(event.target.value)}
          value={email}
        />
        <ButtonComponent type="submit" className="btn">
          Entrar
        </ButtonComponent>
      </FormComponent>
    </Container>
  );
}

export default LoginPage;
