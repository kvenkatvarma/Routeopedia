import React from 'react'
import { Link, useNavigate,Navigate } from 'react-router-dom'

function ProductList() {
    const navigate = useNavigate();
  return (
    <div>
      Product List
      <button onClick={()=>{
         navigate("/product/create")
      }}>Add Product</button>
    </div>
  )
}

export default ProductList
