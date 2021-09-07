import React from 'react'
import {Link} from 'react-router-dom'
const Navbar = () => {
    return (
       <>
            <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/products'>Products</Link></li>
                    <li><Link to='/secret'>My Secret</Link></li>
            </ul>
       </>
    )
}

export default Navbar
