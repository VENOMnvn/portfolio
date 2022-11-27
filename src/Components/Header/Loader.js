import React from 'react'
import logo from './Logo.png'
import { useRef } from 'react'

const Loader = () => {
  let Loar = useRef();
    setTimeout(()=>{
    Loar.current.style.display = "none";
    },2000)


  return (
    <div className='Loader' ref={Loar}>
      <img src={logo} alt="" />
    </div>
  )
}

export default Loader
