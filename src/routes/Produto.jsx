import './Produto.scss'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { getData } from '../api'

const Produto = () => {
  const [produto, setProduto] = useState({})
  let params = useParams()

  async function getProduto() {
    let res = await getData(`/products/${params.slug}`)
    setProduto(res.data)
    console.log(produto);
  }

  useEffect(() => {
    getProduto()
  }, [])

  return (
    <div className='container'>
      <div className="produto">
        {
          produto && produto.category ? 
          <div className="row">
            <div className="col col-img">
              {
                produto.image ? 
                  <img style={{width: 300}} src={produto.image} />
                : <img style={{width: 300}} src="https://www.macmillandictionary.com/us/external/slideshow/full/Grey_full.png" />
              }
            </div>
            <div className="col">
              <h3>{produto.title}</h3>
              <p>R$ {produto.price}</p>
              <p>Categoria: {produto.category.name}</p>
              {
                produto.description ?
                  <p>{produto.description}</p>
                  : <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id ultrices metus. Donec augue ex, pretium vel dolor tempus, convallis convallis odio. Duis a ullamcorper quam. Mauris commodo mi nec massa eleifend, quis lacinia est tempor.</p>
              }
            </div>
          </div>
          : null
        }
      </div>
    </div>
  )
}

export default Produto