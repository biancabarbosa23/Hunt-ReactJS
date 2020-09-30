import React, { useEffect, useState } from 'react'
import api from '../../services/api'
import { Link } from 'react-router-dom'

import './style.css'

export default function Product({ match }) {

    const [product, setProduct] = useState({})

    useEffect(() => {
        parametro()

    })


    async function parametro() {
        const { id } = match.params

        const response = await api.get(`/products/${id}`)
        setProduct(response.data)

    }

    return (
        <div className="page">
            <div className="product-info">
                <h1>{product.title}</h1>
                <p>{product.description}</p>
                <p>
                    URL: <a href={product.url}>{product.url}</a>
                </p>
            </div>
            <div className="action">
                <Link to={'/'}>Voltar</Link>

            </div>
        </div>
    )
}
