import React from 'react'
import z from './Teachers.module.css'
const Teachers = () => {
  return (
    <div className={z.main}>
        <div className={z.textTeachers}>
        Наши учителя
        </div>
        <div className={z.textCards}>
            <div className={z.teacherCard}>
      <div className={z.teacherPicOne}>

      </div>
      <div className={z.teacherText}>
      Вильям Голонский
      </div>
     </div>
      <div className={z.teacherCard}>
<div className={z.teacherPicTwo}>

      </div>
      <div className={z.teacherText}>
     Эдуард Кичигин
      </div>
     </div>
      <div className={z.teacherCard}>
<div className={z.teacherPicThree}>

      </div>
      <div className={z.teacherText}>
     ТУНТУНТУНСАХУР
      </div>
     </div>
        </div>
     
    </div>
  )
}

export default Teachers