import './Produto.css'
import { useState, useEffect } from 'react'
import { Container } from 'react-bootstrap'
import { useNavigate } from "react-router-dom";

import { } from '../api'

const Produto = () => {
  const navigateTo = useNavigate()

  useEffect(() => {
  }, [])

  return (
    <div className='produto'>
      <Container>
        
      </Container>
    </div>
  )
}

export default Produto