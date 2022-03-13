import React from 'react'
import {Route , Routes,Navigate} from "react-router-dom";
import Signup from "../Signup/Signup";
import Cart from "../Cart/Cart";
import Products from '../Products/Products';
const DirectionRoutes = ({handleClear,products,cart,handleAddCart,handleRemoveCart}) => {
  return (
    <div>
        <Routes>
            <Route path='/' element={ <Navigate to="/home" /> }/>
            <Route path="/signup" element={<Signup />} />
            <Route path="/cart" element={<Cart handleClear={handleClear} cart={cart} handleAddCart={handleAddCart} handleRemoveCart={handleRemoveCart} />} />
            <Route path='/home' element={<Products handleAddCart={handleAddCart}  products={products}/>} />
        </Routes>
      
    </div>
  )
}

export default DirectionRoutes
