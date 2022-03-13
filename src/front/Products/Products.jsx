import React from 'react';
import "./Products.css";
const Products = ({products,handleAddCart}) => {
  return (
      <>
    <div className="products">
          {products.map(p=>(
              <div className="card">
                <div className='product-img'><img src={p.img} alt={p.name}/></div> 
                <div className='product-name'><h3>{p.name}</h3></div>
                <div className='product-price'>${p.price}</div>
                <div>
                    <button onClick={()=>handleAddCart(p)} className='product-add-button'>Add to Cart</button>
                </div>
              </div>
            
          ))}  
    </div>
      </>
  )
}

export default Products