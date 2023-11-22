import React from 'react'
import Home from '../components/Home'
import { Outlet } from 'react-router-dom'

function Root() {
  return (
    <>
    <Home/>
    <Outlet></Outlet>
    </>
    
  )
}

export default Root