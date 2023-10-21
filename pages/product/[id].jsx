import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'

const ProductPage = () => {
  const { query } = useRouter() //para obtener el parámetro id de la url
  const id = query.id
  console.log(query.id)

  const [product, setProduct] = useState([])

  useEffect(() => {
    if (id) {
      window
        .fetch(`/api/avo/${id}`) //se hace petición a API
        .then(response => response.json()) //se recibe el resultado de promesa y se usa el helper JSON
        .then((avo) => {
          setProduct(avo)
          console.log(avo)
        }) //se recibe el JSON y se dispone de él, en este caso se muestra en consola
        //.then(console.log) la anterior línea se puede también escribir de esta manera
    }
  }, [id])

  return (
    <div>
      <h1>Página producto:</h1>
      <p>{product.name}</p>
      <Link href={'/'}>Home</Link>
    </div>
  )
}

export default ProductPage
