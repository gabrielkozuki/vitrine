import './Home.scss'
import { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom";

import { } from '../api'

const Home = () => {

  useEffect(() => {
  }, [])

  return (
    <div className='container'>
      <div className="home">
        <h3>Ofertas</h3>
        <br />

        {/* banner de anuncio <img src="" alt="" /> */}

        <h3>Produtos mais vendidos</h3>
        <br />
      </div>
    </div>
  )
}

export default Home