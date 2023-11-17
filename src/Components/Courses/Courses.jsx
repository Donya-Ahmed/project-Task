import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { courses, getAllProducts } from '../../Redux/Slices/CounterSlice'
import styles from './Course.module.css'
import { Link } from 'react-router-dom'
export default function Courses() {
      const dispatch=useDispatch()
      const allCourses= useSelector(courses)
      const [loading,setLoading]=useState(false)
      console.log(allCourses);
    // async  function getCourses() {
    //     setLoading(true)
    //    await  dispatch(getAllProducts())
    //   await setLoading(false)
    //   }
    // useEffect(()=>{
    //     console.log('heloooooooo');
    //     getCourses()
    // },[])
  return <>
 <div className='container'>
<div className='row mt-5'>
{allCourses.length>0 ?allCourses.map((course ,index)=><div className='col-md-3 col-sm-12'>
  <div className='h-25'>
 
    <div><img src={``} alt='imgCourse' className=''/></div>
   <Link to={`/Course/${course.id}`}> <h3>Course {index+1}</h3></Link>
    <p>{course.attributes.currency} {course.attributes.price}</p>
    <div><button className={`btn btnPay w-25` }>Pay</button></div>
    <p></p>
  </div>
</div>):<p>loading....</p>}
</div>
 </div>
  </>
}
