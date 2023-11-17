import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../../HelpComponents/Header/Header'
import NavBar from '../../HelpComponents/Navbar/NavBar'

export default function Layout() {
  return <>
  <Header></Header>
  <NavBar></NavBar>
  <Outlet></Outlet>
  </>
}
