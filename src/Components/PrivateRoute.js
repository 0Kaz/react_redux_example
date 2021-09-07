import React from 'react'
import {Route,Redirect} from 'react-router-dom'
const PrivateRoute = ({auth,children}) => {
    return (
        <div>
            <Route render={()=>
                auth ? (children) : <Redirect to='/'/>

            }/>
        </div>
    )
}

export default PrivateRoute
