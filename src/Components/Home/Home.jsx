import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getAllProducts, increment } from '../../Redux/Slices/CounterSlice'
import Header from '../../HelpComponents/Header/Header'
import NavBar from '../../HelpComponents/Navbar/NavBar'



export default function Home() {
    // const dispatch=useDispatch()
    // useEffect(()=>{
    // dispatch(getAllProducts())
    // },[])
  return<>
  <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      {/* <img src='./images/banner.5d002eef3c2ca31636eb.webp' class="d-block w-100" alt="..." /> */}
      <div className={`title`}>
        <h3><em>TRAINING COURSES, BOOKS</em></h3>
      <h1>MAKE YOUR HEALTHY BODY STRONG IS OUR RESPONSIBILITY</h1>
      <button className='btn btnPay'>About Us</button>
      </div>
    </div>
    <div class="carousel-item">
    <div className={`title`}>
        <h3><em>TRAINING COURSES, BOOKS</em></h3>
      <h1>MAKE YOUR HEALTHY BODY STRONG IS OUR RESPONSIBILITY</h1>
      <button className='btn btnPay'>About Us</button>
      </div>
      {/* <img src='./images/banner.5d002eef3c2ca31636eb.webp' class="d-block w-100" alt="..." /> */}
    </div>
    <div class="carousel-item">
    <div className={`title`}>
        <h3><em>TRAINING COURSES, BOOKS</em></h3>
      <h1>MAKE YOUR HEALTHY BODY STRONG IS OUR RESPONSIBILITY</h1>
      <button className='btn btnPay'>About Us</button>
      </div>
      {/* <img src='./images/banner.5d002eef3c2ca31636eb.webp' class="d-block w-100" alt="..."/> */}
    </div>
  </div>
</div>
  
    {/* <NavBar></NavBar> */}
  </>
}
