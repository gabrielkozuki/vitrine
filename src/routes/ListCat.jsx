import './ListCat.scss'
import { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom";

import { } from '../api'

const ListCat = () => {
  const navigateTo = useNavigate()

  useEffect(() => {
  }, [])

  return (
    <div className='container'>
      <div className="listcat">
        <h1>ListCat</h1>
      </div>
    </div>
  )
}

export default ListCat