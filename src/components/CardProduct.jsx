import { useEffect, useState } from 'react'

import './CardProduct.scss'

const CardProduct = ({ data }) => {
    const [produto, setProduto] = useState(data)

    useEffect(() => {
        console.log(data);
    }, [])

    return (
        <div className="card" style={{ width: '18rem' }}>
            <img className="card-img-top" src={produto.imageSource ? produto.imageSource : "https://www.macmillandictionary.com/us/external/slideshow/full/Grey_full.png"}   />
            <div className="card-body">
                <div className="linha">
                    <h5 className="card-title">{produto.title}</h5>
                    <h5>R${parseFloat(produto.price).toFixed(2)}</h5>
                </div>
                <p className="card-text">{produto.description ? produto.description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus consectetur sapien sed faucibus varius."}</p>
            </div>
        </div>
    )
}

export default CardProduct