import React from 'react'
import z from './Do.module.css'
const Do = () => {
  return (
    <div className={z.main}>
    <div className={z.pic}>
    
    </div>
    <div className={z.containerForText}>
<div className={z.title}>
      Превращаем интерес к технологиям в профессиональные навыки
    </div>
    <div className={z.text}>
В мире, где технологии меняются ежедневно, важно не просто уметь пользоваться гаджетами, а понимать, как они работают, и создавать их самостоятельно.
    </div>
    <div className={z.ways}>
          <div className={z.wayItem}>Программирование: Python, JavaScript, Java, C#</div>
          <div className={z.wayItem}>Веб-разработка: Создание сайтов и веб-приложений</div>
          <div className={z.wayItem}>Game Dev: Разработка игр на Unity и Unreal Engine</div>
          <div className={z.wayItem}>Мобильная разработка: Приложения для iOS и Android</div>
          <div className={z.wayItem}>Data Science: Анализ данных и искусственный интеллект</div>
          <div className={z.wayItem}>Кибербезопасность: Основы защиты информации</div>
        </div>
    </div>
    </div>
  )
}

export default Do