import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import logo from '../image/BBG.png';
import star from '../image/estrela.png';
import '../style/Menu.css';
import '../style/Header.css';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

export default function Menu() {
  const [ menuResponse, setMenuResponse ] = useState(false);
  const [authResponse, setAuthResponse] = useState(null);
  const history = useHistory();

  // Efeito para buscar o authResponse dos cookies quando o componente é montado
  useEffect(() => {
    const authResponseFromCookies = Cookies.get('authResponse');
    if (authResponseFromCookies) {
      // Se existir nos cookies, atualize o estado local
      setAuthResponse(JSON.parse(authResponseFromCookies));
    }
  }, []);

  const handleHomeClick = () => {
    history.push('/');
  };

  const premium = () => {
    if (authResponse && (authResponse.role !== "Premium" && authResponse.role !== "Admin")) {
      return (
        <p className='not-premium'>Seja premium</p>
      );
    } else {
      return (
        <p className='premium'>
          Premium
          <img src={star} alt="Cliente Premium" width={50} />
        </p>
      );
    }
  }

  return (
    <>
      <headers className='menu-header'>
          <img src={logo} alt="Logo" width={150} className="header-icon" onClick={handleHomeClick} />
          {menuResponse ?
          <ion-icon class="menu-icon" onClick={()=>setMenuResponse(false)} name="close-outline"></ion-icon>:
          <ion-icon class="menu-icon" onClick={()=>setMenuResponse(true)} name="menu-outline"></ion-icon>
          }
          <section className='menu'>
            <Link to="/meeting" className="menu-hover">Reunião</Link>
            <Link to="/not_premium" className="menu-hover">Financeiro</Link>
            <Link to="/not_premium" className="menu-hover">Calendário de entregas</Link>
            <Link to="/config" className="menu-hover">Login</Link>
            <div className='login-act'>
              <p className='hello'>Olá, <span>{authResponse?.client.name.split(' ')[0] || 'Visitante'}</span> !</p>
              <p>{premium()}</p>
            </div>
          </section>
      </headers>
      {menuResponse && <section className='menu-resp'>
        <Link to="/meeting" className='menu-link'>Reunião</Link>
        <Link to="/not_premium" className='menu-link'>Financeiro</Link>
        <Link to="/not_premium" className='menu-link'>Calendário de entregas</Link>
        <Link to="/config" className='menu-link'>Login</Link>
      </section> }
    </>
  );
}
