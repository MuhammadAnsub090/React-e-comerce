import React, { useEffect, useState } from 'react'
import axios from 'axios';
import ProductCard from '../../components/ProductCard'
import { useParams } from 'react-router-dom';

const Products = () => {

  const params = useParams()

  // Getting Products Using API
  const [AllProducts, setAllProducts] = useState([])


  // UseEffect to Show All Products
  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then((res) => {
        console.log(res.data);
        setAllProducts(res.data)
      })
      .catch((err) => {
        console.log(err);
      })
  }, [])



  return (
    <>
      <h1 className='text-2xl font-bold text-center'> All Products </h1>


      {/* Product Card */}
      <div className='flex flex-wrap justify-evenly mt-10 gap-5 p-[40px] '>
        {AllProducts.length > 0 ? AllProducts.map((item) => {

          return <ProductCard key={item.id} src={item.image} title={item.title} price={item.price} id={item.id} />

        }) : <h1> Loading... </h1>}
      </div>

    </>
  )
}

export default Products