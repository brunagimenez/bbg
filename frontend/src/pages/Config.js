import React, { useEffect, useState } from "react";
import { useHistory } from 'react-router-dom';
import Cookies from 'js-cookie';
import Menu from "../Containers/Menu";
import Footer from "../Containers/Footer";
import '../style/Config.css';
import { clientUpdateEmail, clientUpdateName, clientUpdatePhone } from "../services/clients";
import { usersApiUpDatePassword, usersUpDateUsername } from "../services/users";
import { authApi } from "../services/auth";

export default function Config() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [nameUp, setNameUp] = useState('');
  const [phoneUp, setPhoneUp] = useState(false);
  const [emailUp, setEmailUp] = useState(false);
  const [usernameUp, setUsernameUp] = useState(false);
  const [newPasswordUp, setNewPasswordUp] = useState(false);

  const history = useHistory();

  const authResponseFromCookies = Cookies.get('authResponse');
  const authResponse = authResponseFromCookies ? JSON.parse(authResponseFromCookies) : null;

  useEffect(() => {
    if (!authResponseFromCookies || !authResponse) {
      history.push('/');
    }
  }, [authResponseFromCookies, authResponse, history]);

  const handleExitLogin = () => {
    Cookies.remove('authResponse');
    history.push('/');
  };

  const handleSave = async(e, label) => {
    e.preventDefault();
    if (!password ) {
      return alert('Digite sua senha')
    }
    const response = await authApi(authResponse.username, password);
    if (typeof response === 'string' || response.message === 'Visiting user') {
      if (label === 'Nome') {
        await clientUpdateName(authResponse.client.id, name);
        history.push('/login');
      } else if (label === 'E-mail'){
        await clientUpdateEmail(authResponse.client.id, email);
        history.push('/login');
      } else if (label === 'Telefone'){
        await clientUpdatePhone(authResponse.client.id, phone);
        history.push('/login');
      } else if (label === 'Senha Atualizada:'){
        await usersApiUpDatePassword(authResponse.client.id, newPassword);
        console.log('SENHA ANTIGA = '+password);
        console.log('SENHA ATUAL = '+newPassword);
        history.push('/login');
      } else if (label === 'Usuário'){
        await usersUpDateUsername(authResponse.client.id, username);
        history.push('/login');
      } 
      return alert('Atualizado!')
    } else {
      return alert('Senha incorreta!')
    }
  };
  

  const formUpDate = (label, funSet, value, setValue, isPassword) => (
    <section>
      <label> {label}
        <input type={isPassword ? "password" : "text"} value={value} onChange={(e) => setValue(e.target.value)} />
      </label>
      <label> {isPassword ? 'Senha Antiga:' : 'Senha:'}
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </label>
      <div className="bt-Up">
        <button className="bt-Update" onClick={(e) => handleSave(e, label)}>Atualizar</button>
        <button className="bt-Update" onClick={funSet}>Voltar</button>
      </div>
    </section>
  );

  const renderConfigContainer = (label, value, setFunction) => (
    <div className="config-container" onClick={(e) => setFunction(e, true)}>
      <p id={label.toLowerCase()}>{label}</p>
      <p className="config-client">{value}</p>
      <ion-icon class="hydrated-config" name="caret-forward-outline" role="img"></ion-icon>
    </div>
  );



  return (
    <div className="config">
      <Menu />
      <section className="config-pg">
        <form className='form-free form-config'>
          <h2>Informações básicas</h2>
          {nameUp || phoneUp || emailUp || usernameUp || newPasswordUp ? (
            <>
              {nameUp && <p>{formUpDate('Nome', () => setNameUp(false), name, setName)}</p>}
              {phoneUp && <p>{formUpDate('Telefone', () => setPhoneUp(false), phone, setPhone)}</p>}
              {emailUp && <p>{formUpDate('E-mail', () => setEmailUp(false), email, setEmail)}</p>}
              {usernameUp && <p>{formUpDate('Usuário', () => setUsernameUp(false), username, setUsername)}</p>}
              {newPasswordUp && <p>{formUpDate('Senha Atualizada:', () => setNewPasswordUp(false), newPassword, setNewPassword, true)}</p>}
            </>
          ) : (
            <div className="info-cg">
              {renderConfigContainer('Nome', authResponse.client.name, setNameUp)}
              {renderConfigContainer('Telefone', authResponse.client.phone, setPhoneUp)}
              {renderConfigContainer('E-mail', authResponse.client.email, setEmailUp)}
              {renderConfigContainer('Usuário', authResponse.username, setUsernameUp)}
              {renderConfigContainer('Senha', '••••••••', setNewPasswordUp, true)}
              <button className="bt-Update canceled-sheduled" onClick={handleExitLogin}>Sair</button>
            </div>
          )}
        </form>
      </section>
      <Footer />
    </div>
  );
}
