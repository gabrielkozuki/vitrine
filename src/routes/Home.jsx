import './Home.css'
import { useState, useEffect } from 'react'
import { Container } from 'react-bootstrap'
import { useNavigate } from "react-router-dom";

import { } from '../api'

const Home = () => {
  const navigateTo = useNavigate() // navigateTo(`/rota/${parametro}`)

  useEffect(() => {
  }, [])

  return (
    <div className='home'>
      <Container>
        
      </Container>
    </div>
  )
}

export default Home