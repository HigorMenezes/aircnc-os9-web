import React, { useState } from "react";

import { Container } from "./styles";

import api from "../../services/api";

function MainPage() {
  const [email, setEmail] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();
    const response = await api.post("/sessions", {
      email
    });

    const { _id } = response.data;

    localStorage.setItem("userId", _id);
  }

  return (
    <Container>
      <p>
        Ofereça <strong>spots</strong> para programadores e encontre{" "}
        <strong> talentos</strong> para sua empresa
      </p>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">E-MAIL *</label>
        <input
          type="email"
          id="email"
          placeholder="Seu melhor e-mail"
          onChange={event => setEmail(event.target.value)}
          value={email}
        />
        <button type="submit" className="btn">
          Entrar
        </button>
      </form>
    </Container>
  );
}

export default MainPage;
