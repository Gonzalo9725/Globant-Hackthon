import React from 'react'
import NavBar from './Widgets/NavBar'

const Layout = ({children}) => (
    <>
    <NavBar />
    {children}
    </>
)


export default Layout
