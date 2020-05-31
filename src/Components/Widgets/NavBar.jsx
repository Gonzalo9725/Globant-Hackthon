import React from 'react'
import './NavBar.css'
import logo from '../../img/Logo-Share.png'
import perfil from '../../img/default_profile.jpg'
import { auth } from '../../firebase-config'
import { useHistory } from 'react-router-dom'
import { connect } from 'react-redux';

const NavBar = ({user}) => {

  const history = useHistory();
   
  const closeSession = () => {
      auth.signOut()
      
      .then(() => {
          
          console.log('Saliendo');
          history.push("/")
          console.log('despues del historypush')
          
      })
      .catch((error) => {
          console.log(error);
      });
  };
    return (
        <div className='container-navbar'>
            <img className='navbar-logo' src={logo} alt="logoNavbar"/>

            <div className='dropdown'> 
            {user.photoURL != null ? (
                <img
                  className="navbar-profile"
                  alt="fotoperfil"
                  src={user.photoURL}
                />
              ) : (
            <img className="navbar-profile" alt="fotoperfil" src={perfil} />
            )}     
            
            <div className='dropdown-content'>
                 <a href="https://www.w3schools.com/tags/att_a_href.asp">Ver mi perfil</a>
                <a onClick={() => closeSession()}>Cerrar Sesión</a> 
            </div>
            </div>
        </div>
    )
}

const MapStateToProps = state => {
  return { user : state.user}
}

export default connect(MapStateToProps, null)(NavBar);
