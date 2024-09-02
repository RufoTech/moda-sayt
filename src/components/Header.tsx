import React from 'react'
import Button from './Button'

const Header:React.FC = () => {
  return (
    <nav className="navbar navbar-expand-lg  py-4 ">
  <div className="container">
    <a className="navbar-brand" href="#"><img src="/assets/images/header/header.svg" alt="" /></a>
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link px-4" aria-current="page" href="#">HOME</a>
        </li>
        <li className="nav-item">
          <a className="nav-link px-4" href="#">SHOP</a>
        </li>
        <li className="nav-item">
          <a className="nav-link px-4" href="#">FEATURES</a>
        </li>
        <li className="nav-item">
          <a className="nav-link px-4" href="#">CONTACT</a>
        </li>
     

      
      </ul>
     
    </div>
    <ul className='sebet-ul '>
       <li className="nav-item nav-items">
          <a className="  px-4" href="#"><img src="/assets/images/header/sebet.svg" alt=""  className='sebet'/></a>
         
        </li>
       </ul>
       <div className="header-buton">
           <Button inTextBtn={'LOGIN'} klassAdi='header-button ' img={""}/>
          </div>
  </div>
</nav>

  )
}

export default Header