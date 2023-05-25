import './Produto.scss'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { getProduto } from '../api'

const Produto = () => {
  const [produto, setProduto] = useState({})
  let params = useParams()

  async function recuperarProduto() {
    let res = await getProduto(params.id) 
    setProduto(res.product)
    console.log(res)
  }

  useEffect(() => {
    recuperarProduto()
  }, [])

  return (
    <div className='container'>
      <div className="produto">
        {
          produto ? 
          <div className="row">
            <div className="col col-img">
              {
                produto.articlesList ? 
                  <img src={produto.articlesList[0].galleryDetails[0].baseUrl} />
                : <img src="https://www.macmillandictionary.com/us/external/slideshow/full/Grey_full.png" />
              }
            </div>
            <div className="col">
              <h3>{produto.name}</h3>
              {produto.whitePrice ? <p>$ {produto.whitePrice.price}</p> : null}
              {produto.mainCategory ? <p>Categoria: {produto.mainCategory.name}</p> : null}
              {
                produto.measurements?.map((medida) => {
                  return <p style={{color: 'gray'}}>{medida}</p>
                })
              }
              {
                produto.description ?
                  produto.description
                  : <p>Descrição não encontrada.</p>
              }
              <div className="row-pics">
                {produto.articlesList ? produto.articlesList.galleryDetails ? <img className='mini-photo' src={produto.articlesList[1].galleryDetails[0].baseUrl} /> : null : null}
                {produto.articlesList ? produto.articlesList.galleryDetails ? <img className='mini-photo' src={produto.articlesList[2].galleryDetails[0].baseUrl} /> : null : null}
                {produto.articlesList ? produto.articlesList.galleryDetails ? <img className='mini-photo' src={produto.articlesList[3].galleryDetails[0].baseUrl} /> : null : null}
                {produto.articlesList ? produto.articlesList.galleryDetails ? <img className='mini-photo' src={produto.articlesList[4].galleryDetails[0].baseUrl} /> : null : null}
              </div>
            </div>
          </div>
          : <p>Carregando...</p>
        }
      </div>
    </div>
  )
}

export default Produto