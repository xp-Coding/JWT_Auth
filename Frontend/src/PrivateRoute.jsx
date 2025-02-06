import React, { Children } from 'react'
import { Navigate } from 'react-router-dom'

function PrivateRoute({children}) {
    const token = localStorage.getItem("token")
    if(!token){
        return <Navigate to="/login" replace={true} />
    } else {
        return children
    }
}

export default PrivateRoute