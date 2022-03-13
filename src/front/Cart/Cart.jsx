import React from 'react';
import "./cart.css";

const Cart = ({cart,handleRemoveCart,handleAddCart,handleClear}) => {
 
 const TotalPrice=cart.reduce((price,item)=>price + item.price * item.quentity,0);
  return (
    <div className='cart-items'>
      <div className="cart-items-header"> Cart Items </div>
      {cart.length !== 0 && <button onClick={()=>handleClear()} className="clear-button">Clear Cart</button>}
      <div className="clear"></div>
        {cart.length === 0 && <div className='empty-items'>there is no items to show</div> }
       <div>
        {cart.map(item=>(
          <div key={item.id} className='cart-items-list'>
              <div className='img'>
              <img className='cart-items-image' src={item.img} alt={item.name} />
              </div>
            <div className='cart-items-name'>
              <h3>{item.name}</h3>
            </div>
            <div className='cart-items-functions'>
              <button className='cart-items-add' onClick={()=>handleAddCart(item)}>+</button>
              <button className='cart-items-remove' onClick={()=>handleRemoveCart(item)}>-</button>
            </div>
            <div className='cart-items-price'>
              Quentity <span style={{color:"#000"}}>{item.quentity}</span>  <br/><br /> The Price for unit <span style={{color:"green"}}>${item.price}</span></div>  
          </div>
        ))}
      </div>
      {TotalPrice !== 0 && <div className='total'>Total ${TotalPrice}</div>}
    </div>
  )
}

export default Cart