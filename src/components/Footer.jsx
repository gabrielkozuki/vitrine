import './Footer.scss'
import { useState, useEffect } from 'react'
import { useNavigate, Link } from "react-router-dom";

import logo from '../assets/ifpr-logo.png'

const Footer = () => {
  const navigateTo = useNavigate()
  
  useEffect(() => {
  }, [])

  return (
    <div className='footer'>
      <div className="row" style={{height: '100%'}}>
        <div className="col">
          <img src={logo} />
        </div>
        <div className="col">
          <div className="row">
            <p>2023 @ Feito por Gabriel Kozuki :)</p>
            <div className="col social-media">
              <i class="fa-brands fa-linkedin fa-3x" onClick={() => window.open('https://www.linkedin.com/in/gabriel-kozuki/', '_blank')}></i>
              <i class="fa-brands fa-square-github fa-3x" onClick={() => window.open('https://github.com/gabrielkozuki', '_blank')}></i>
              <i class="fa-brands fa-square-instagram fa-3x" onClick={() => window.open('https://www.instagram.com/kozuki1_/', '_blank')}></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer