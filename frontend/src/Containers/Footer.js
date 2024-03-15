import '../style/Footer.css';
import reservado from '../image/reservado.png'
import facebook from '../image/facebook.png'
import instagram from '../image/instagram.png'
import whatsapp from '../image/whatsapp.png'

export default function Footer() {
  return (
    <section className="footer">
        <img className='bbg-footer' src={reservado} alt='Todos os direitos reservados a BBG' width={190} />
        <div>
            <a href="https://www.facebook.com/design.bbg" target="_blank" rel="noopener noreferrer">
              <img className="social-media" src={facebook} alt='ícone facebook' width={70} />
            </a>
            <a href="https://www.instagram.com/solutionsbbg/" target="_blank" rel="noopener noreferrer">
              <img className="social-media" src={instagram} alt='ícone instagram' width={70} />
            </a>
            <a href="https://api.whatsapp.com/send?phone=5519981470706" target="_blank" rel="noopener noreferrer">
              <img className="social-media" src={whatsapp} alt='ícone whatsapp' width={70} />
            </a>
        </div>
    </section>
  );
}