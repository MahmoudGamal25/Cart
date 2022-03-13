import React from 'react';
import {Link} from "react-router-dom";
import "../../../node_modules/@fortawesome/fontawesome-free/css/all.css";
import "./header.css";
const Header=()=> {
  return (
    <>
        <div className="header">
                <div>
                    <h1>
                        <Link to="/"  className='logo'>Electronic Cart</Link>
                    </h1>
                </div>
                 <div className='header-links'>
                    <ul>
                        <li>
                            <Link to="/home">Home</Link>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <Link to="/signup">Signup</Link>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <Link to="/cart" className='cart'>
                            <i className="fa-solid fa-cart-shopping"></i>
                            </Link>
                        </li>
                    </ul>
                </div>
        </div>
    </>
  )
}

export default Header
