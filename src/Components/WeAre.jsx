import React, { Fragment } from "react";
import "./Home.css";
import NavBar from "./Widgets/NavBar";
import girl from "../img/girl.png";
import frutas from "../img/frutas.png";
import gente from "../img/gente.png";

const Home = () => {
  return (
    <Fragment>
      <NavBar />
      <div className="divHome">
        <div>
          <div className="text">
            <h2>Nosotros</h2>
            <p>
              Deseando cerrar la brecha de la hambruna en tiempos digitales es
              cuando nace Share Food, una app sin fines de lucro con la clara
              idea de reducir los costos y aumentar el libre acceso a alimentos
              rescatados que estaban destinados a ser desechados. Deseando
              cerrar la brecha de la hambruna en tiempos digitales es cuando
              nace Share Food, una app sin fines de lucro con la clara idea de
              reducir los costos y aumentar el libre acceso a alimentos
              rescatados que estaban destinados a ser desechados. Así
            </p>
            <button className="btnUs">
              <strong>Conocer</strong>
            </button>
          </div>
          <img src={girl} className="img" alt="joven sentada en sillón" />
        </div>
      </div>
    </Fragment>
  );
};

export default Home;