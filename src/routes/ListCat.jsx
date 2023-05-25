import './ListCat.scss'
import { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";

import { listCategoria } from '../api'
import CardProduct from '../components/CardProduct'

const ListCat = () => {
  const [data, setData] = useState()
  let params = useParams()

  const getCategoria = async () => {
    let res = await listCategoria(params.slug)
    setData(res.results)
  }

  useEffect(() => {
    getCategoria()
  }, [params])

  return (
    <div className='container'>
      <div className="listcat">
        { data ? (
          <>
            {/* <h1>{data.CategoryDisplayName}</h1> */}
            <br />
            <div className="row">
              {data.map((produto) => {
                return <CardProduct key={produto.code} data={produto} />
              })}
            </div>
          </>
        ) : <p>Carregando...</p> }
      </div>
    </div>
  )
}

export default ListCat