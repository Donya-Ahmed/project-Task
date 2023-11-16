import React from 'react'
import { useSelector } from 'react-redux'
import { counterValue } from '../../Redux/Slices/CounterSlice'

export default function About() {
    const counterVal= useSelector(counterValue)
    

  return (
    <div>
      About {counterVal}
      <p>helllo</p>
      <p>hbjhhh</p>
    </div>
  )
}
