import './Home.scss'
import { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom";

import { } from '../api'

const Home = () => {
  const navigateTo = useNavigate() // navigateTo(`/rota/${parametro}`)

  useEffect(() => {
  }, [])

  return (
    <div className='container'>
      <div className="home">
        <h1>Home</h1>
      </div>
    </div>
  )
}

export default Home