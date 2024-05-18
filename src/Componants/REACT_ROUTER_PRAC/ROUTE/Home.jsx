import React from 'react'
import { useLocation } from 'react-router-dom'

const Home = () => {
  const location = useLocation()
    console.log(location.pathname)
  return (
    <h1>This is Home</h1>
  )
}

export default Home