import React ,{useState} from 'react'
import { Link, useNavigate,Navigate } from 'react-router-dom'
function Product() {
  const navigate = useNavigate();

  const [goToProduct,setGoToProduct] = useState(()=>{
      return false;
  });

  return (
    <div>
      Product
      <button onClick={()=>{
         navigate("/product/create")
      }}>Add Product</button>
      <Link to="/product/details/5">
        S<button>Navigate to Product Detail - 5</button>
      </Link>
      {
        goToProduct && <Navigate to ="/product/details/3"/>
      }
        <button onClick={()=>{
        setGoToProduct({goToProduct : true})
      }}>Navigate to Product -3 {useState}</button>
    </div>
  );
}

export default Product
