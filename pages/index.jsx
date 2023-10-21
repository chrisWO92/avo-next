import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar/Navbar'
import Link from 'next/link'

const HomePage = () => {

  const [productList, setProductList] = useState([])

  useEffect(() => {
    window
      .fetch('api/avo') //se hace petición a API
      .then(response => response.json()) //se recibe el resultado de promesa y se usa el helper JSON
      .then(({data, length}) => {
        setProductList(data)
        console.log(data)
      }) //se recibe el JSON y se dispone de él, en este caso se muestra en consola
      //.then(console.log) la anterior línea se puede también escribir de esta manera
  }, [])

  return (
    <div>
      <Navbar />
      <div>Platzi and Next.js!</div>
      <ul>
      {productList.map((product) => (
        <li key={product.id}>
          <Link href={`/product/${product.id}`}>{product.name}</Link>
          
        </li>
      ))}
      </ul>
      
    </div>
  )
}

export default HomePage
