import './Navbar.scss'
import { useState, useEffect } from 'react'
import { Link } from "react-router-dom";

import { getCategorias } from '../api'

const Navbar = () => {
  const [categorias, setCategorias] = useState([]);

  const fetchCategorias = async() => {
    try {
      const res = await getCategorias()
      setCategorias(res[0].CategoriesArray[4].CategoriesArray)

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
        <i className="fa-solid fa-store"></i>
      </Link>
      
      <nav>
        <ul>
          {categorias?.map((cat) => {
            return (
              <li key={cat.CatName}>
                <Link to={`/categoria/${cat.tagCodes[0]}`}>{cat.CatName}</Link>
              </li>
            )
          })}
        </ul>
      </nav>
    </header>
  )
}

export default Navbar