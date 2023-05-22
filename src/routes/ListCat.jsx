import './ListCat.scss'
import { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";

import { getData } from '../api'
import CardProduct from '../components/CardProduct'

const ListCat = () => {
  const [data, setData] = useState()
  let params = useParams()

  const getCategorias = async () => {
    let res = await getData(`/categories/${params.slug}`)
    setData(res.data)
    console.log(data);
  }

  useEffect(() => {
    getCategorias()
  }, [params])

  return (
    <div className='container'>
      <div className="listcat">
        { data ? (
          <>
            <h1>{data.name}</h1>
            <br />
            <div className="row">
              {data.products.map((produto) => {
                return <CardProduct key={produto._id} data={produto} />
              })}
            </div>
          </>
        ) : null }
      </div>
    </div>
  )
}

export default ListCat