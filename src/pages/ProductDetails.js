import React from 'react'
import { useParams } from 'react-router-dom'

function ProductDetails() {
    const params = useParams()
  return (
    <section>
        <div>ProductDetails</div>
        {/* // ! getting(extracting) the query params using useParams() react hook */}
        <p>{params.productId}</p> 
    </section>
  )
}

export default ProductDetails