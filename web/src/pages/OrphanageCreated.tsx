import React from "react";
import "../styles/pages/orphanage-created.css";
import { Link } from "react-router-dom";
import successImg from "../images/success.png";

function OrphanageCreated() {
  return (
    <div id="page-Container">
      <div id="contentText">
        <h1>Ebaaa!</h1>
        <p>
          O Cadastro deu certo e foi enviado ao administrador para ser aprovado.{" "}
          <br />
          Agora é só esperar :)
        </p>
        <Link to="/app" className="backMapButton">
          Voltar para o Mapa
        </Link>
      </div>

      <div id="contentImage">
        <img src={successImg} alt="Orfanato Criado com Sucesso" />
      </div>
    </div>
  );
}

export default OrphanageCreated;
