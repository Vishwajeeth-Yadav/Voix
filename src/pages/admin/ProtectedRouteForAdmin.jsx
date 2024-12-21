import React from 'react'
import { Navigate } from 'react-router-dom'

const ProtectedRouteForAdmin = ({ children }) => {
  const user = localStorage.getItem('role')

  if (user === 'admin') {
    return children
  }

  return <Navigate to="/adminLogin" />
}

export default ProtectedRouteForAdmin
