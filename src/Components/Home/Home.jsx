import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getAllProducts, increment } from '../../Redux/Slices/CounterSlice'



export default function Home() {
    const dispatch=useDispatch()
    useEffect(()=>{
    dispatch(getAllProducts())
    },[])
  return (
    <div>
      Home <button onClick={()=>dispatch(increment())}>add</button>
    </div>
  )
}
