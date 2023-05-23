import './Home.scss'
import { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import banner from '../assets/banner.webp'

import CardProduct from '../components/CardProduct'

import { getData } from '../api'

const Home = () => {
  const [ofertas, setOfertas] = useState()
  const [maisVendidos, setMaisVendidos] = useState()

  async function getHome() {
    let res1 = await getData(`/categories/mens-fashion`);
    let res2 = await getData(`/categories/womens-fashion`);
    setOfertas(res1.data.products);
    setMaisVendidos(res2.data.products);
  }

  useEffect(() => {
    getHome()
  }, [])

  return (
    <div className='container'>
      <div className="home">
        <h3>Ofertas</h3>
        <div className="row">
          {
            ofertas ?
              ofertas.map((produto) => {
                return (<CardProduct key={produto._id} data={produto} />)
              })
            : <p>Carregando...</p>
          }
        </div>
        <img className='banner' src={banner} onClick={null} /> {/* banner */} 
        <h3>Produtos mais vendidos</h3>
        <div className="row">
          {
            maisVendidos ?
              maisVendidos.map((produto) => {
                return (<CardProduct key={produto._id} data={produto} />)
              })
            : <p>Carregando...</p>
          }
        </div>
      </div>
    </div>
  )
}

export default Home