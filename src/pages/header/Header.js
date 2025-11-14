import React from 'react'
import z from './Header.module.css'
const Header = () => {
  return (
    <div className={z.main}>
     <div className={z.logo}>
     Korochek.net
     </div>
     <div className={z.navigation}>
     <div className={z.whyUs}>
      Почему мы?
     </div>
     <div className={z.contacts}>
     Контакты
     </div>
     <div className={z.info}>
    Информация
     </div>
     </div>
    </div>
  )
}

export default Header