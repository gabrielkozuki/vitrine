import './Footer.css'
import { useState, useEffect } from 'react'
import { Container } from 'react-bootstrap'
import { useNavigate } from "react-router-dom";

import { } from '../api'

const Footer = () => {
  const navigateTo = useNavigate()
  useEffect(() => {
  }, [])

  return (
    <div className='footer'>
      <Container>
        
      </Container>
    </div>
  )
}

export default Footer