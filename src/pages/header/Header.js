
import React from 'react';
import { useNavigate } from 'react-router-dom';
import z from './Header.module.css';

const Header = () => {
  const navigate = useNavigate();

  return (
    <div className={z.main}>
      <div className={z.logo} onClick={() => navigate('/')}>
        Korochek.net
      </div>
      <div className={z.navigation}>
        <div className={z.whyUs} onClick={() => navigate('/whyus')}>
          Почему мы?
        </div>
        <div className={z.contacts} onClick={() => navigate('/contacts')}>
          Контакты
        </div>
        <div className={z.info} onClick={() => navigate('/info')}>
          Информация
        </div>
        <div className={z.regist} onClick={() => navigate('/regist')}>
          Регистрация
        </div>
      </div>
    </div>
  );
}

export default Header;