import React from 'react'
import {useParams, Redirect} from 'react-router-dom'

const Product = ({data}) => {
    const params= useParams()
    
    const findProduct = data.find(el => el.id === parseInt(params.id))
    return (
        <div>
            <h1>{findProduct.name}</h1>
            <h1>{findProduct.description}</h1>
        </div>
    )
}

export default Product
