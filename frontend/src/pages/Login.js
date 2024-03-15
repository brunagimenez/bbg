import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import logo from '../image/BBG.png';
import { useHistory } from 'react-router-dom';
import '../style/Login.css';
import { authApi } from '../services/auth';


export default function Login() {
    const [formData, setFormData] = useState({
        username: '',
        password: '',
        remember: false,
    });
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);

    const history = useHistory();
    
    useEffect(() => {
        const savedUsername = Cookies.get('rememberedUsername');
        const savedPassword = Cookies.get('rememberedPassword');
        if (savedUsername) {
            setFormData((prevData) => ({ password: savedPassword || '', username: savedUsername, remember: true }));
        }
    }, []);

    const handleHomeClick = () => {
        history.push('/');
    };

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value,
        });
    };

    const handleTogglePassword = () => {
        setShowPassword((prevShowPassword) => !prevShowPassword);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            setLoading(true);
            const response = await authApi(formData.username, formData.password);
            if (typeof response === 'string' || response.message === 'Visiting user') {
                setFormData({ username: '', password: '' });

                // Salve o authResponse nos cookies
                Cookies.set('authResponse', JSON.stringify(response));

                history.push('/meeting');
            } else {
                alert("Usuário ou senha inválido!");
                setFormData({ username: '', password: '' });
            }

        } catch (error) {
            console.error('Erro ao enviar formulário:', error);
        } finally {
            setLoading(false);
        }

        if (formData.remember) {
            Cookies.set('rememberedUsername', formData.username);
            Cookies.set('rememberedPassword', formData.password);
        } else {
            Cookies.remove('rememberedUsername');
            Cookies.remove('rememberedPassword');
        }
    };
    
    return (
        <div className="login-page">
            <img src={logo} alt="Logo" width={150} onClick={handleHomeClick} />
            <section className="login-container">
                <form className="login-form" onSubmit={handleSubmit}>
                    <label>
                        Nome do usuário
                        <input
                            name="username"
                            type="text"
                            placeholder="Nome do usuário"
                            value={formData.username}
                            onChange={handleInputChange}
                        />
                    </label>
                    <label>
                        Senha
                        <div className="password-input-container">
                            <input
                                name="password"
                                type={showPassword ? 'text' : 'password'}
                                className="toggle-password-input"
                                data-testid="password-input"
                                placeholder="Senha"
                                value={formData.password}
                                onChange={handleInputChange}
                            />
                            <button
                            type="button"
                            className="toggle-password-btn"
                            onClick={handleTogglePassword}
                            >
                                {showPassword ? <ion-icon  class="ion-icon toggle-password-icon" name="eye-off-outline"></ion-icon> : <ion-icon class="ion-icon toggle-password-icon" name="eye-outline"></ion-icon>}
                            </button>
                        </div>
                    </label>
                    <div className='left-login'>
                        <label className='left-login'>
                            <input
                                name="remember"
                                type="checkbox"
                                placeholder="Lembre-me"
                                checked={formData.remember}
                                onChange={handleInputChange}
                            />
                            Lembre-me
                        </label>
                        <p className='click-login'>Esqueceu sua senha?</p>
                    </div>
                    <label htmlFor="btn-enter">
                        <button
                            type="submit"
                            id="btn-enter"
                            data-testid="login-submit-btn"
                            className='button-login'
                        >
                            {loading ? 'Enviando...' : 'Conecte-se'}
                        </button>
                    </label>
                </form>
                <div className='left-login'>Não tem uma Conta?<p className='click-login'>Inscreva-se</p></div>
            </section>
        </div>
    );
}

