import React, { Fragment } from "react";
import "./WeAre.css";
import we_are from "../img/we_are.png";



const Home = () => {
  return (
    <Fragment>
      <div className="divWe">
      <div className='divWeAre'>
        <div>
          <div className="textWe">
            <h2 className="title">¿Qué es share food?</h2>
            <div className="line"> </div>
            <p className="parrafo">
              Deseando cerrar la brecha de la hambruna en tiempos digitales es
              cuando nace Share Food, una app sin fines de lucro con la clara
              idea de reducir los costos y aumentar el libre acceso a alimentos
              rescatados que estaban destinados a ser desechados. Deseando
              cerrar la brecha de la hambruna en tiempos digitales es cuando
              nace Share Food, una app sin fines de lucro con la clara idea de
              reducir los costos y aumentar el libre acceso a alimentos
              rescatados que estaban destinados a ser desechados. 
            </p>
            <h2 className="title">¿Cómo puedes ayudarnos?</h2>
            <div className="line"> </div>
            <p className="parrafo">
              Siempre estamos recibiendo donaciones de comida o cualquier información 
              útil para poder recopilar alimentos que esten en buen estado.

              Puedes llenar nuestros formularios en la sección donar poder donar
              los alimentos que ya no utilices.
            </p>
        
          <img src={we_are} className="imgWe" alt="Grupo de personas" />
          </div>
        </div>

        </div>

      </div>
    </Fragment>
  );
};

export default Home;