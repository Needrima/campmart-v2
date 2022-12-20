import React, {useState, useEffect} from 'react'
import Footer from '../Footer/Footer'
import Newsletter from '../NewsLetter/Newsletter'
import Products from '../Product/Products'
import { useContext } from 'react'
import { SingleProductContext } from '../../pages/SingleProduct'
import ProductDetails from './ProductDetails/ProductDetails'

const SingleProductLayout = () => {
      const {products, getProducts} = useContext(SingleProductContext)
    
      useEffect(() => {
        getProducts('4')
      }, [])
    
      return (
        <>
          <ProductDetails />
          <Products products={products} h2="People also buy" />
          <Newsletter />
          <Footer />
        </>
      )
}

export default SingleProductLayout