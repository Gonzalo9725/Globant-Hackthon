import React from 'react'
import './Home.css'
import girl from '../img/girl.png'
import frutas from '../img/frutas.png'
import gente from '../img/gente.png'

const Home = () => {
    return (
        <div className='divHome'>
            <div className='divUs'>
                <div className='text'>
                <h2>Nosotros</h2>
                <p>Conocenos, cual es nuestra visión, misión, como funciona nuestra app y como puedes aportar tu granito de arena</p>
                <button className='btnUs'><strong>Conocer</strong></button>
                </div>
                <img src={girl} className='img' alt='joven sentada en sillón'/>
            </div> 
            <div className='give'>
                <div className='text'>
                <h2>Donar</h2>
                <p>Si tienes alimentos tanto perecederos como no perecederos que no vayas a consumir los puedes Donar
                    para que otra persona que los necesite los pueda adquirir</p>
                <button className='btnGive'><strong>Donar</strong></button>
                </div>
                <img src={frutas} className='img' alt='bandeja con frutas'/>
            </div>  
            <div className='receive'>
                <div className='text'>
                <h2>Recibir</h2>
                <p>Si deseas recibir alimentos ya sea para tu consumo personal o para llevarlos a alguna persona necesitada, ingresa aquí</p>
                <button className='btnReceive'><strong>Recibir</strong></button>
                </div>
                <img src={gente} className='img' alt='personas'/>
            </div>  
        </div>
    )
}

export default Home
