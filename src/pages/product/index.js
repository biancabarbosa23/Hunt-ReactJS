import React, { useEffect, useState } from 'react'
import api from '../../services/api'
import { Link, useParams } from 'react-router-dom'

import './style.css'

export default function Product() {

    const { id } = useParams()
    const [product, setProduct] = useState({})

    useEffect(() => {
        parametro()
        //eslint-disable-next-line
    }, [])


    async function parametro() {
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
