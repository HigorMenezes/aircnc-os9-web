import React, { useState, useMemo } from "react";

import { Container } from "./styles";

import api from "../../services/api";

import ButtonComponent from "../../components/ButtonComponent";
import FormComponent from "../../components/FormComponent";

import camera from "../../assets/camera.svg";

function NewPage({ history }) {
  const [thumbnail, setThumbnail] = useState(null);
  const [company, setCompany] = useState("");
  const [techs, setTechs] = useState("");
  const [price, setPrice] = useState("");

  const preview = useMemo(() => {
    return thumbnail ? URL.createObjectURL(thumbnail) : null;
  }, [thumbnail]);

  async function handleSubmit(event) {
    event.preventDefault();
    const data = new FormData();
    const user_id = localStorage.getItem("user");
    data.append("thumbnail", thumbnail);
    data.append("company", company);
    data.append("techs", techs);
    data.append("price", price);

    await api.post("/spots", data, { headers: { user_id } });

    history.push("/dashboard");
  }

  return (
    <Container>
      <FormComponent onSubmit={handleSubmit}>
        <div className="upload-field">
          <label
            className={preview ? "has-thumbnail" : ""}
            style={{ backgroundImage: `url(${preview})` }}
          >
            <input
              type="file"
              onChange={event => setThumbnail(event.target.files[0])}
            />

            <img src={camera} alt="select thumbnail" />
          </label>
        </div>

        <label htmlFor="company">EMPRESA *</label>
        <input
          id="company"
          placeholder="Sua empresa incrível"
          onChange={event => setCompany(event.target.value)}
          value={company}
        />

        <label htmlFor="techs">
          TECNOLOGIAS * <span>(separados por vírgula)</span>
        </label>
        <input
          id="techs"
          placeholder="Quais tecnologias usam"
          onChange={event => setTechs(event.target.value)}
          value={techs}
        />

        <label htmlFor="price">
          VALOR PARA DIÁRIA * <span>(em branco para GRATUITO)</span>
        </label>
        <input
          id="price"
          placeholder="Quais tecnologias usam"
          onChange={event => setPrice(event.target.value)}
          value={price}
        />
        <ButtonComponent type="submit">CADASTRAR</ButtonComponent>
      </FormComponent>
    </Container>
  );
}

export default NewPage;
