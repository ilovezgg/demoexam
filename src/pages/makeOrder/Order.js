import React from 'react'
import z from './Order.module.css'
const Order = () => {
  return (
    <div className={z.main}>
    <div className={z.container}>
 <div className={z.containerForText}>
  <div className={z.containerForArea}>
 <textarea 
        className={z.textarea}
        placeholder="Введите название курса который вы бы хотели пройти"
        maxLength={500}
      ></textarea>
  </div>
  <div className={z.containerForInput}>
<div className={z.title}>
Введите желаемую дату начала обучения
</div>
       <input type='date'id="birthdate" name="birthdate" className={z.data}/>
  </div>

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
      Отправить заявку
    </div> 

   

    </div>
  )
}

export default Order