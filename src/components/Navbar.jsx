import './Navbar.scss'
import { useState, useEffect } from 'react'
import { Link } from "react-router-dom";

import { getData } from '../api'

const Navbar = () => {
  const [categorias, setCategorias] = useState([]);

  const fetchCategorias = async() => {
    try {
      const res = await getData('/categories')
      setCategorias(res.data)

    } catch(err) {
      console.log(err)
    }
  }

  useEffect(() => {
    fetchCategorias()
  }, [])

  return (
    <header className='navbar-container'>
      <Link to="/">
        <h4>Vitrine</h4>
      </Link>
      
      <nav>
        <ul>
          {categorias?.map((cat) => {
            return (
              <li key={cat._id}>
                <Link to="/">{cat.name}</Link>
              </li>
            )
          })}
        </ul>
      </nav>
    </header>
  )
}

export default Navbar