import './Footer.scss'
import { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro'

import { } from '../api'

const Footer = () => {
  const navigateTo = useNavigate()
  useEffect(() => {
  }, [])

  return (
    <div className='footer'>
      <div className="row">
        <div className="col">
          <img src="" />
        </div>
        <div className="col"></div>
      </div>
    </div>
  )
}

export default Footer