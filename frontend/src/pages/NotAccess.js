import React, { useEffect } from "react";
import Cookies from 'js-cookie';
import { useHistory } from 'react-router-dom';
import Footer from "../Containers/Footer";
import Menu from "../Containers/Menu";
import '../style/NotAccess.css';

export default function NotAccess() {

  const history = useHistory();

  const authResponseFromCookies = Cookies.get('authResponse');
  const authResponse = authResponseFromCookies ? JSON.parse(authResponseFromCookies) : null;

  useEffect(() => {
    if (!authResponseFromCookies || !authResponse) {
      history.push('/');
    }
  }, [authResponseFromCookies, authResponse, history]);

  return (
    <div className="not-acc">
      <Menu/>
      <section className="not-access" >
        <div className="not-access-p">
          <img src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExaDF6ZWVmeXoxMXVvZnBidm1sOTd1c2hseHc0ZjY3NnAxc2FpMDBlcyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/6v2UJRyFAsTXgvJrin/giphy.gif" width={350} alt="Homem chorando"/>
          <p>No momento você não tem acesso a esta página. No entanto, ao se tornar um cliente premium, garantimos acesso total a todas as funcionalidades !</p>
        </div>
      </section>
      <Footer/>
    </div>
  );
}
