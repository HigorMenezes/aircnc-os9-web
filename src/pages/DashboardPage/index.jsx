import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import api from "../../services/api";

import { Container } from "./styles";

import ButtonComponent from "../../components/ButtonComponent";

function DashboardPage() {
  const [spots, setSpots] = useState([]);

  useEffect(() => {
    async function loadSpots() {
      const user_id = localStorage.getItem("user_id");
      const response = await api.get("/dashboard", {
        headers: { user_id }
      });

      setSpots(response.data);
    }

    loadSpots();
  }, []);

  return (
    <Container>
      <ul className="spot-list">
        {spots.map(spot => (
          <li key={spot._id}>
            <header>
              <img src={spot.thumbnailUrl} alt="thumbnail"></img>
            </header>
            <strong>{spot.company}</strong>
            <span>{spot.price ? `R$ ${spot.price}/dia` : "GRATUITO"}</span>
          </li>
        ))}
      </ul>

      <Link to="/new">
        <ButtonComponent>Cadastrar novo spot</ButtonComponent>
      </Link>
    </Container>
  );
}

export default DashboardPage;
