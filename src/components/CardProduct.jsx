import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import './CardProduct.scss'

const CardProduct = ({ data }) => {
    const [produto, setProduto] = useState(data)
    const navigate = useNavigate()

    useEffect(() => {
    }, [])

    return (
        <div className="card" style={{ width: '18rem' }} onClick={ () => { navigate(`/produto/${produto.articles[0].code}`) } }>
            <img className="card-img-top" src={produto.galleryImages[0].baseUrl ? produto.galleryImages[0].baseUrl : "https://www.macmillandictionary.com/us/external/slideshow/full/Grey_full.png"}   />
            <div className="card-body">
                <div className="linha">
                    <h5 className="card-title">{produto.name}</h5>
                    <h5>{produto.price.formattedValue}</h5>
                </div>
                <p className="card-text">Brand: {produto.brandName}</p>
            </div>
        </div>
    )
}

export default CardProduct