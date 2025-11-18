// src/pages/registration/Regist.js
import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { useNavigate, Link } from 'react-router-dom';
import z from './Regist.module.css';

const Regist = () => {
  const { register } = useAuth();
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    login: '',
    password: '',
    confirmPassword: '',
    firstName: '',
    lastName: '',
    phone: '',
    email: ''
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const validateForm = () => {
    const newErrors = {};

    // Валидация логина
    if (!/^[a-zA-Z0-9]{6,}$/.test(formData.login)) {
      newErrors.login = 'Логин должен содержать только латиницу и цифры, минимум 6 символов';
    }

    // Валидация пароля
    if (formData.password.length < 8) {
      newErrors.password = 'Пароль должен содержать минимум 8 символов';
    }

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Пароли не совпадают';
    }

    // Валидация имени
    if (!/^[а-яА-ЯёЁ\s]+$/.test(formData.firstName)) {
      newErrors.firstName = 'Имя должно содержать только кириллицу и пробелы';
    }

    // Валидация фамилии
    if (!/^[а-яА-ЯёЁ\s]+$/.test(formData.lastName)) {
      newErrors.lastName = 'Фамилия должна содержать только кириллицу и пробелы';
    }

    // Валидация телефона
    if (!/^8\(\d{3}\)\d{3}-\d{2}-\d{2}$/.test(formData.phone)) {
      newErrors.phone = 'Телефон должен быть в формате: 8(XXX)XXX-XX-XX';
    }

    // Валидация email
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Введите корректный email адрес';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handlePhoneChange = (e) => {
    let value = e.target.value.replace(/\D/g, '');
    
    if (value.length > 0) {
      value = value.replace(/^(\d{1})(\d{0,3})(\d{0,3})(\d{0,2})(\d{0,2})/, (match, p1, p2, p3, p4, p5) => {
        let result = `8(${p2}`;
        if (p3) result += `)${p3}`;
        if (p4) result += `-${p4}`;
        if (p5) result += `-${p5}`;
        return result;
      });
    }
    
    setFormData(prev => ({
      ...prev,
      phone: value
    }));
    
    if (errors.phone) {
      setErrors(prev => ({
        ...prev,
        phone: ''
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setLoading(true);
    setErrors({});
    
    try {
      await register(formData);
      navigate('/registpage', { replace: true });
    } catch (error) {
      console.error('Ошибка регистрации:', error);
      
      if (error.code === 'auth/email-already-in-use') {
        setErrors({ submit: 'Этот email уже используется' });
      } else if (error.code === 'auth/weak-password') {
        setErrors({ submit: 'Пароль слишком слабый' });
      } else if (error.code === 'auth/invalid-email') {
        setErrors({ submit: 'Неверный формат email' });
      } else {
        setErrors({ submit: 'Произошла ошибка при регистрации. Попробуйте еще раз.' });
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={z.main}>
      <div className={z.container}>
        <h2 className={z.title}>Регистрация</h2>
        
        {errors.submit && <div className={z.error}>{errors.submit}</div>}
        
        <form onSubmit={handleSubmit} className={z.form}>
          <div className={z.inputGroup}>
            <label className={z.label}>Логин*</label>
            <input
              type="text"
              name="login"
              value={formData.login}
              onChange={handleChange}
              className={errors.login ? z.inputError : z.input}
              placeholder="Только латиница и цифры, минимум 6 символов"
              required
            />
            {errors.login && <span className={z.errorText}>{errors.login}</span>}
          </div>

          <div className={z.formRow}>
            <div className={z.inputGroup}>
              <label className={z.label}>Пароль*</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className={errors.password ? z.inputError : z.input}
                placeholder="Минимум 8 символов"
                required
              />
              {errors.password && <span className={z.errorText}>{errors.password}</span>}
            </div>
            
            <div className={z.inputGroup}>
              <label className={z.label}>Подтвердите пароль*</label>
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                className={errors.confirmPassword ? z.inputError : z.input}
                placeholder="Повторите пароль"
                required
              />
              {errors.confirmPassword && <span className={z.errorText}>{errors.confirmPassword}</span>}
            </div>
          </div>

          <div className={z.formRow}>
            <div className={z.inputGroup}>
              <label className={z.label}>Имя*</label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className={errors.firstName ? z.inputError : z.input}
                placeholder="Только кириллица"
                required
              />
              {errors.firstName && <span className={z.errorText}>{errors.firstName}</span>}
            </div>
            
            <div className={z.inputGroup}>
              <label className={z.label}>Фамилия*</label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className={errors.lastName ? z.inputError : z.input}
                placeholder="Только кириллица"
                required
              />
              {errors.lastName && <span className={z.errorText}>{errors.lastName}</span>}
            </div>
          </div>

          <div className={z.inputGroup}>
            <label className={z.label}>Телефон*</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handlePhoneChange}
              className={errors.phone ? z.inputError : z.input}
              placeholder="8(XXX)XXX-XX-XX"
              maxLength="15"
              required
            />
            {errors.phone && <span className={z.errorText}>{errors.phone}</span>}
          </div>

          <div className={z.inputGroup}>
            <label className={z.label}>Email*</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={errors.email ? z.inputError : z.input}
              placeholder="example@mail.ru"
              required
            />
            {errors.email && <span className={z.errorText}>{errors.email}</span>}
          </div>

          <button 
            type="submit" 
            className={z.submitButton}
            disabled={loading}
          >
            {loading ? 'Создание пользователя...' : 'Создать пользователя'}
          </button>
        </form>

        <div className={z.loginLink}>
          <p>Уже зарегистрированы?</p>
          <Link to="/signin" className={z.link}>Войти в систему</Link>
        </div>
      </div>
    </div>
  );
};

export default Regist;