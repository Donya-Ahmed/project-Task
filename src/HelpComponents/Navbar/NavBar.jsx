import React from 'react'
import { Link } from 'react-router-dom'
export default function NavBar() {
  return <>
<nav class="navbar navbar-expand-lg navbar-light bg-dark ">

 <div className='container'>
 <button className="navbar-toggler d-lg-none text-white" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId"
        aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon text-white"></span>
      </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto text-white">
      <li class="nav-item active">
      <Link className="nav-link text-white" to="/">Home</Link>
      </li>
     
      <li class="nav-item dropdown">
      <Link className="nav-link text-white dropdown-toggle " to="/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">News</Link>

        {/* <a class="nav-link dropdown-toggle text-white" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          News
        </a> */}
        <div class="dropdown-menu text-white" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="#">All News</a>
          <a class="dropdown-item" href="#">Olympia Tournaments</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">Something else here</a>
        </div>
      </li>
      <li class="nav-item">
      <Link className="nav-link text-white" to="/courses">Courses</Link>

       
      </li>
      <li class="nav-item">
      <Link className="nav-link text-white" to="/">E-book</Link>

      </li>
      <li class="nav-item">
      <Link className="nav-link text-white" to="/">Contact Us</Link>
     
      </li>
     
    </ul>
    <ul class="navbar-nav ms-auto mt-2 mt-lg-0">
        <li>cart</li>
        <li><i className="fa-solid fa-cart-shopping fa-lg "></i></li>
    </ul>
  </div>
 </div>
</nav>
  </>
}
