import React from 'react'
import {Link} from 'react-router-dom'

const Products = ({data}) => {
    
    return (
        <div>
            {
                data.map(e => <Link to={`/products/${e.id}`}><h1>{e.name}</h1></Link>)
            }
        </div>
    )
}

export default Products
