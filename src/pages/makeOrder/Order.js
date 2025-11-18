import React from 'react'
import z from './Order.module.css'
const Order = () => {
  return (
    <div className={z.main}>
    <div className={z.container}>
 <div className={z.containerForText}>
     <textarea 
        className={z.textarea}
        placeholder="Введите название курса который вы бы хотели пройти"
        maxLength={500}
      ></textarea>
       <input type='date'id="birthdate" name="birthdate" className={z.data}/>
    </div>
    </div>
    <div className={z.choosePay}>
    <button className={z.leftPart}>
     Оплата наличными
    </button>
    <button className={z.rightPart}>
     Оплата переводом по номеру телефона
    </button>
    </div>
    <div className={z.sendButton}>

    </div> 

   

    </div>
  )
}

export default Order