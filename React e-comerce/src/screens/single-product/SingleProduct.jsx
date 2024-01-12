import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom'
import SingleProductDetails from '../../components/SingleProductDetails';

const SingleProduct = () => {

  const params = useParams()

  // Getting Product Details From API
  const [productDetails, setProductDetails] = useState()

  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${params.id}`)
      .then((res) => {
        console.log(res.data);
        setProductDetails(res.data)
      })
      .catch((err) => {
        console.log(err);
      })
  }, [])

  return (
    <>
      <h1 className='text-2xl font-bold text-center'> Product Details </h1>

      {productDetails ? <SingleProductDetails src={productDetails.image} title={productDetails.title} price={productDetails.price} desc={productDetails.description} /> : <h1> Loading... </h1>}


    </>
  )
}

export default SingleProduct