import React from 'react'
import z from './Footer.module.css'

const Footer = () => {
  return (
    <div className={z.main}>
      <div className={z.containerForButtons}>
        <div className={z.buttonAboutUs}>
          О нас
        </div>
        <div className={z.buttonContacts}>
          Контакты
        </div>
        <div className={z.buttonInfo}>
          Почему мы?
        </div>
      </div>
      <div className={z.containerForMap}>
        <div style={{ position: 'relative', overflow: 'hidden' }}>
          <a 
            href="https://yandex.ru/maps?utm_medium=mapframe&utm_source=maps" 
            style={{ 
              color: '#eee', 
              fontSize: '12px', 
              position: 'absolute', 
              top: '0px' 
            }}
          >
            Яндекс Карты
          </a>
          <a 
            href="https://yandex.ru/maps/?ll=46.143368%2C59.112723&utm_medium=mapframe&utm_source=maps&z=16.74" 
            style={{ 
              color: '#eee', 
              fontSize: '12px', 
              position: 'absolute', 
              top: '14px' 
            }}
          >
            Яндекс Карты
          </a>
          <iframe 
            src="https://yandex.ru/map-widget/v1/?ll=46.143368%2C59.112723&z=16.74" 
            width="560" 
            height="330" 
            frameBorder="1" 
            allowFullScreen 
            title="Яндекс Карта - расположение нашего офиса"
            style={{ position: 'relative' }}
          />
        </div>
      </div>
    </div>
  )
}

export default Footer