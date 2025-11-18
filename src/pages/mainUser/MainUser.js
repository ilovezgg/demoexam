import React from 'react'
import z from './MainUser.module.css'
import { useNavigate } from 'react-router-dom';
const MainUser = () => {
     const navigate = useNavigate();
  return (
    <div className={z.main}>
     <div className={z.containerForChoose}>
         <div className={z.title}>
         Оставьте свой отзыв или просмотрите ранее оставленные вами заявки
        </div>
      <div className={z.watch} onClick={() => navigate('/whyus')}>
      Ранее оставленные заявки
      </div>
      <div className={z.form}onClick={() => navigate('/order')}>
      Заполнить заявку
      </div>
      
     </div>
     <div className={z.containerForBig}>
       <div className={z.otziv}>
<div className={z.titleOtziv}>
 Оставьте отзыв о нашей работе
</div>
<div className={z.otzivText}>
<textarea 
   className={z.textarea}
   placeholder="Напишите ваш отзыв здесь..."
   maxLength={500}
 ></textarea>
</div>
<div className={z.buttonSend}>
 Отправить отзыв
</div>
       </div>
      </div>
    </div>
  )
}

export default MainUser