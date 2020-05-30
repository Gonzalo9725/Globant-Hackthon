import React from 'react'
import './NavBar.css'
import logo from '../../img/Logo-Share.png'
import perfil from '../../img/default_profile.jpg'

const NavBar = () => {
    return (
        <div className='container-navbar'>
                <img src={logo} alt="logoNavbar"/>
                <img src={perfil} alt="defaultProfile"/>
                
        </div>
    )
}

export default NavBar
