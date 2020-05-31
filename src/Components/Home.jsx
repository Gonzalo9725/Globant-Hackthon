import React, { Fragment,useEffect } from "react";
import "./Home.css";
import NavBar from "./Widgets/NavBar";
import girl from "../img/girl.png";
import frutas from "../img/frutas.png";
import gente from "../img/gente.png";
import { setUser } from "../actions/action";
import { connect } from "react-redux";
import { Link } from "react-router-dom"


const Home = ({ setUser }) => {
  
    // obtiene al usuario en el localStorage
    useEffect(() => {
    if (localStorage.getItem("user")) {
      let currentUser = localStorage.getItem("user");
      setUser({ user: JSON.parse(currentUser) });
    }
  }, []);

  return (
    <Fragment>
      <NavBar />
      <div className="divHome">
        <div className="divUs">
          <div className="text">
            <h2>Nosotros</h2>
            <p>
              Conocenos, cual es nuestra visión, misión, como funciona nuestra
              app y como puedes aportar tu granito de arena
            </p>
            <Link to='/weare' style={{textDecoration: 'none'}}>
              <button className="btnUs">
                <strong>Conocer</strong>
              </button>
            </Link>
          </div>
          <img className='girl-img' src={girl}  alt="joven sentada en sillón" />
        </div>
        <div className="give">
          <div className="text">
            <h2>Donar</h2>
            <p>
              Si tienes alimentos tanto perecederos como no perecederos que no
              vayas a consumir los puedes Donar para que otra persona que los
              necesite los pueda adquirir
            </p>
            <Link to='/Donar' style={{textDecoration: 'none'}}>
              <button className="btnGive">
                <strong>Donar</strong>
              </button>
            </Link>
          </div>
          <img className='frutas-img'src={frutas}  alt="bandeja con frutas" />
        </div>
        <div className="receive">
          <div className="text">
            <h2>Recibir</h2>
            <p>
              Si deseas recibir alimentos ya sea para tu consumo personal o para
              llevarlos a alguna persona necesitada, ingresa aquí
            </p>
            <Link to='/Donaciones' style={{textDecoration: 'none'}}>
              <button className="btnReceive">
                <strong>Recibir</strong>
              </button>
            </Link>
          </div>
          <img className='gente-img' src={gente}  alt="personas" />
        </div>
      </div>
    </Fragment>
  );
};

const MapStateToProps = (state) => {
  return { user: state.user };
};

const MapDispatchToProps = { setUser };

export default connect(MapStateToProps, MapDispatchToProps)(Home);
