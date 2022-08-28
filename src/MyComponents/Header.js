import React from 'react'
import { Link } from 'react-router-dom';
import './Header.css';



export default function Header(props) {
  
  
   
  return (
    <div className='Herohading'>
       <nav className="navbar navbar-expand-lg navbar nav">
  <Link className="navbar-brand heading" to="/">{props.title} <i className="fab fa-typo3" /></Link>
 
  <button className="navbar-hrefggler" type="buthrefn" data-hrefggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="hrefggle navigation">
    <span className="navbar-hrefggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auhref man">
      <li className="nav-item active">
        <Link className="Home" to="/">Home </Link>
 
      </li>
      <li className="nav-item">
        <Link className="Service" to="/service">Service</Link>
      </li>
     
      <li className="nav-item">
        <Link className="product" to="/product">product</Link>
      </li>
    </ul>
  
      <button className="btn btn-outline-success button my-2 my-sm-0" type="submit">SIGN UP</button>
    
  </div>
</nav>
    </div>
  )
}
