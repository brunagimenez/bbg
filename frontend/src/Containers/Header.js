import React, { useEffect, useState } from 'react';
import logo from '../image/BBG.png';
import login from '../image/login.png';
import '../style/Header.css';
import { useHistory } from 'react-router-dom';
import Cookies from 'js-cookie';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

function Header() {
  const history = useHistory();
  const [authResponse, setAuthResponse] = useState(null);

  useEffect(() => {
    const authResponseFromCookies = Cookies.get('authResponse');
    if (authResponseFromCookies) {
      // Se existir nos cookies, atualize o estado local
      setAuthResponse(JSON.parse(authResponseFromCookies));
    }
  }, []);

  const handleLoginClick = () => {
    history.push('/login');
  };

  const handleHomeClick = () => {
    history.push('/');
  };

  return (
    <headers>
        <img src={logo} alt="Logo" width={150} className="home-icon" onClick={handleHomeClick} />
        {authResponse ?
         <Link to="/meeting" className='name'>Olá, <span>{authResponse?.client.name.split(' ')[0]} </span> ! </Link>:
        <img src={login} alt="login cliente" className="login-icon" onClick={handleLoginClick} />
        }
    </headers>
  );
}

export default Header;
