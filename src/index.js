import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from "./Home";
import About from "./About";
import Product from "./Pages/Product";
import CreateProduct from './Pages/CreateProduct';
import ProductDetails from "./Pages/ProductDetails";
import ProductList from "./Pages/ProductList";
import CryptoDetail from './CryptoDetail';
import NotFound from './NotFound';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
        <Header/>
        <Routes>
           <Route path='/' element={<Home/>}></Route>
           <Route path='/about' element={<About/>}></Route>
           <Route path='/cryptodetail/:cryptoSymbol/:id' element={<CryptoDetail/>}></Route>
           <Route path='/cryptodetail/:cryptoSymbol/' element={<CryptoDetail/>}></Route>
            <Route path='product'>
              <Route path ="" element={<Product/>}></Route>
              <Route path ="create" element={<CreateProduct/>}></Route>
              <Route path ="details/:productId" element={<ProductDetails/>}></Route>
              <Route path ="list" element={<ProductList/>}></Route>
           </Route>
           <Route path='*' element={<NotFound/>}></Route>
        </Routes>
    </BrowserRouter>   
  </React.StrictMode>
);

