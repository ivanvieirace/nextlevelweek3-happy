import React from "react";
import "../styles/pages/login.css";
import mapMarkerImg from "../images/map-marker.svg";

function Login() {
  return (
    <div id="contentContainer">
      <main className="loginBackground">
        <div className="contentLogo">
          <img src={mapMarkerImg} alt="logoHappy" />
          <h1>happy</h1>
        </div>
        <footer>
          <h3>Fortaleza</h3>
          <h4>Ceará</h4>
        </footer>
      </main>
      <aside className="loginForm">
        <form action="">
          <fieldset>
            <legend>Fazer Login</legend>

            <div className="input-block">
              <label htmlFor="email">E-mail</label>
              <input
                id="email"
                // value={email}
                // onChange={(event) => setEmail(event.target.value)}
              />
            </div>

            <div className="input-block">
              <label htmlFor="senha">Senha</label>
              <input
                id="senha"
                // value={email}
                // onChange={(event) => setEmail(event.target.value)}
              />
            </div>

            <div className="footer-form">
              <input type="checkbox" />
            </div>
          </fieldset>

          <button className="confirm-button" type="submit">
            Entrar
          </button>
        </form>
      </aside>
    </div>
  );
}

export default Login;
