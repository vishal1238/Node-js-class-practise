import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'

function App() {
  const [product, setProduct] = useState([])


  const fetchProducts = async() => {
    const res = await
  }

  useEffect(() => {
    const res.get("http://localhost:8000/api/products");
  },{})

  return (
    <div>
      <h1>Hello World</h1>
      {product.map{product => (
        <li>{product.name}</li>
      )}}

    </div>
  )
}

export default App
