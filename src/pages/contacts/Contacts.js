import React from 'react'
import z from './Contacts.module.css'

const Contacts = () => {
  return (
    <div className={z.main}>
      <div className={z.upPart}>
        <div className={z.leftPart}>
          <div className={z.adress}>
            440066, Россия, г. Пенза,
            3-й Рахманинова пр-д, 5,
            литера А
          </div>
          <div className={z.phone}>
            8 (8412) 59-45-45
          </div>
          <div className={z.mail}>
            info@it-soft.pro
          </div>
          <div className={z.inn}>
            3927982901
          </div>
        </div>
        <div className={z.rightPart}>
          <div className={z.adress}>
            1027739642281
          </div>
          <div className={z.phone}>
            Korochek.net
          </div>
          <div className={z.mail}>
            9 784 680,00 руб., дата изменения величины уставного капитала: 14.04.2025
          </div>
          <div className={z.inn}>
            Акционерное общество "КорочекНет"
          </div>
        </div>
      </div>
      <div className={z.bottomPart}>
        <div className={z.mapOne}>
          <div className={z.mapContainer}>
            <a 
              href="https://yandex.ru/maps/org/avtoservis/235645618852/?utm_medium=mapframe&utm_source=maps" 
              className={z.mapLink}
            >
              Автосервис
            </a>
            <a 
              href="https://yandex.ru/maps/10704/sharya/category/car_service_auto_repair/184105246/?utm_medium=mapframe&utm_source=maps" 
              className={z.mapLink}
            >
              Автосервис, автотехцентр в Шарье
            </a>
            <iframe 
              src="https://yandex.ru/map-widget/v1/?ll=45.506144%2C58.367756&mode=poi&poi%5Bpoint%5D=45.504328%2C58.367680&poi%5Buri%5D=ymapsbm1%3A%2F%2Forg%3Foid%3D235645618852&z=17.65" 
              width="560" 
              height="400" 
              frameBorder="0"
              allowFullScreen
              title="Карта автосервиса в Шарье"
              className={z.mapFrame}
            />
          </div>
        </div>
        <div className={z.mapTwo}>
          <div className={z.mapContainer}>
            <a 
              href="https://yandex.ru/maps/org/rosselkhozbank/1010242072/?utm_medium=mapframe&utm_source=maps" 
              className={z.mapLink}
            >
              Россельхозбанк
            </a>
            <a 
              href="https://yandex.ru/maps/11070/kirov-oblast/category/bank/184105398/?utm_medium=mapframe&utm_source=maps" 
              className={z.mapLink}
            >
              Банк в Кировской области
            </a>
            <iframe 
              src="https://yandex.ru/map-widget/v1/?ll=47.957944%2C58.766535&mode=poi&poi%5Bpoint%5D=47.956026%2C58.766151&poi%5Buri%5D=ymapsbm1%3A%2F%2Forg%3Foid%3D1010242072&z=17.1" 
              width="560" 
              height="400" 
              frameBorder="0"
              allowFullScreen
              title="Карта Россельхозбанка"
              className={z.mapFrame}
            />
          </div>
        </div>
        <div className={z.mapThree}>
          <div className={z.mapContainer}>
            <a 
              href="https://yandex.ru/maps/org/kezhemskaya_rayonnaya_bolnitsa_poliklinika/149040513213/?utm_medium=mapframe&utm_source=maps" 
              className={z.mapLink}
            >
              Кежемская районная больница, поликлиника
            </a>
            <a 
              href="https://yandex.ru/maps/20643/kodinsk/category/polyclinic_for_adults/184106014/?utm_medium=mapframe&utm_source=maps" 
              className={z.mapLink}
            >
              Поликлиника для взрослых в Кодинске
            </a>
            <iframe 
              src="https://yandex.ru/map-widget/v1/?ll=99.189048%2C58.601829&mode=poi&poi%5Bpoint%5D=99.186951%2C58.602034&poi%5Buri%5D=ymapsbm1%3A%2F%2Forg%3Foid%3D149040513213&z=16.66" 
              width="560" 
              height="400" 
              frameBorder="0"
              allowFullScreen
              title="Карта поликлиники в Кодинске"
              className={z.mapFrame}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contacts