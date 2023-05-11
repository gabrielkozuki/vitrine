import './Navbar.css'
import { useState, useEffect } from 'react'
import { Container } from 'react-bootstrap'
import { useNavigate } from "react-router-dom";

import { } from '../api'

const Navbar = () => {
  const navigateTo = useNavigate()

  useEffect(() => {
  }, [])

  return (
    <div className='Navbar'>
      <Container>
        
      </Container>
    </div>
  )
}

export default Navbar