import './Produto.scss'
import { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom";

import { } from '../api'

const Produto = () => {
  const navigateTo = useNavigate()

  useEffect(() => {
  }, [])

  return (
    <div className='container'>
      <div className="produto">
        <h1>Produto</h1>
      </div>
    </div>
  )
}

export default Produto