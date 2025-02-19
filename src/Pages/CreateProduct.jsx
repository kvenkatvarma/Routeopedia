import React from 'react'
import { Link, useNavigate,Navigate } from 'react-router-dom'

function CreateProduct() {
   const navigate = useNavigate();

  return (
    <div>
      Create Product
      <button onClick={()=>{
         navigate(-1)
      }}>Go back</button>
    </div>
  )
}

export default CreateProduct
