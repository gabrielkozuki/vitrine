import './ListCat.css'
import { useState, useEffect } from 'react'
import { Container } from 'react-bootstrap'
import { useNavigate } from "react-router-dom";

import { } from '../api'

const ListCat = () => {
  const navigateTo = useNavigate()

  useEffect(() => {
  }, [])

  return (
    <div className='listcat'>
      <Container>
        
      </Container>
    </div>
  )
}

export default ListCat