
import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { useNavigate, Link } from 'react-router-dom';
import z from './SignIn.module.css';

const SignIn = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const validateForm = () => {
    const newErrors = {};

    // Валидация email
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Введите корректный email адрес';
    }

    // Валидация пароля
    if (formData.password.length < 8) {
      newErrors.password = 'Пароль должен содержать минимум 8 символов';
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setLoading(true);
    setErrors({});
    
    try {
      await login(formData.email, formData.password);
      navigate('/registpage', { replace: true });
    } catch (error) {
      console.error('Ошибка входа:', error);
      
      if (error.code === 'auth/user-not-found') {
        setErrors({ submit: 'Пользователь с таким email не найден' });
      } else if (error.code === 'auth/wrong-password') {
        setErrors({ submit: 'Неверный пароль' });
      } else if (error.code === 'auth/invalid-email') {
        setErrors({ submit: 'Неверный формат email' });
      } else if (error.code === 'auth/too-many-requests') {
        setErrors({ submit: 'Слишком много попыток входа. Попробуйте позже.' });
      } else {
        setErrors({ submit: 'Произошла ошибка при входе. Попробуйте еще раз.' });
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={z.main}>
      <div className={z.container}>
        <h2 className={z.title}>Вход в систему</h2>
        
        {errors.submit && <div className={z.error}>{errors.submit}</div>}
        
        <form onSubmit={handleSubmit} className={z.form}>
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

          <div className={z.inputGroup}>
            <label className={z.label}>Пароль*</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className={errors.password ? z.inputError : z.input}
              placeholder="Введите ваш пароль"
              required
            />
            {errors.password && <span className={z.errorText}>{errors.password}</span>}
          </div>

          <button 
            type="submit" 
            className={z.submitButton}
            disabled={loading}
          >
            {loading ? 'Вход...' : 'Войти'}
          </button>
        </form>

        <div className={z.registLink}>
          <p>Еще не зарегистрированы?</p>
          <Link to="/regist" className={z.link}>Регистрация</Link>
        </div>
      </div>
    </div>
  );
};

export default SignIn;