import React from 'react'
import z from './Main.module.css'
import Do from '../whatWeDo/Do'
import Teachers from '../teachers/Teachers'
const Main = () => {
  return (
    <div className={z.main}>
      <div className={z.container}>
<div className={z.title}>
          Научим всему что нужно - и даже больше.
      </div>
      <div className={z.pic}>
       
      </div>
      </div>
      <Do/>
      <Teachers/>
    </div>
  )
}

export default Main