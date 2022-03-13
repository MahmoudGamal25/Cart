import React, { useState } from 'react';
import Header from './front/Header/Header';
import {BrowserRouter as Router} from "react-router-dom";
import DirectionRoutes from './front/Directions/DirectionRoutes';
import './App.css';
const App=()=>{
  const Data ={
    products:[
        {id:1,name:"Acer",img:"./images/acer.png" ,price:1099},
        {id:2,name:"Beats HeadPhone",img:"./images/beats-headphone.jpg",price:1500},
        {id:3,name:"Iphone Pro Max 13",img:"./images/iphonepromax13.png",price:2000},
        {id:4,name:"Macbook Pro",img:"/ima",price:3000},
        {id:5,name:"One Plus",img:"./images/oneplus.png",price:1050},
        {id:6,name:"Samsung S20",img:"./images/samsung.jpg",price:2070},
        {id:7,name:"Sennheister",img:"./images/sennheister.png",price:500},
        {id:8,name:"Sol Headphone",img:"./images/sol-headphone.jpg",price:890},
        {id:9,name:"Asus",img:"./images/asus.jpg",price:2750}
    ]
}
  const products=Data.products;
  const [cart,setCart]=useState([]);
  const handleAddCart=(product)=>{
    const productExist=cart.find(item=>item.id===product.id);
    if(productExist)
    {
      setCart(cart.map(item=>item.id===product.id?(
        {...productExist,quentity:productExist.quentity +1 }
      ):item));
    }else{
      setCart([...cart,{...product,quentity:1}]);
    }
  };
  const handleClear =()=>{
    setCart([]);
  }
  const handleRemoveCart=product=>{
    const productExist=cart.find(item=>item.id===product.id);
    if(productExist.quentity === 1 )
    setCart(cart.filter(item => item.id !== product.id));
    else
     setCart( cart.map( item =>item.id===product.id?({...productExist,quentity:productExist.quentity - 1}):item));
  }
  return (
    <div className="App">
    <Router>
      <Header />
      <DirectionRoutes handleClear={handleClear} handleRemoveCart={handleRemoveCart} products={products} handleAddCart={handleAddCart} cart={cart} />       
    </Router>

    </div>
  );
}

export default App;
