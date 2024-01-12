import React from 'react'
import { useNavigate } from 'react-router-dom'

const ProductCard = ({ id, src, title, price }) => {

  const navigate = useNavigate()

  // Navigate Single Product
  function showSingleProduct() {
    navigate(`/products/${id}`)
  }



  return (
    <>

      {/* Product Card */}
      <div  className="w-[300px] card card-compact bg-base-100 shadow-xl">
  <figure><img className='w-[300px] h-[200px] object-contain ' src={src} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{title}</h2>
    <p><strong> Price: </strong> {price} </p>
    <div className="card-actions justify-end">
      <button onClick={showSingleProduct} className="btn bg-black text-cyan-50 w-18 h-19 px-3 " >Buy Now</button>
    </div>
  </div>
</div>
     
    </>
  )
}

export default ProductCard