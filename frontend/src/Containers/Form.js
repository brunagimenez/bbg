import { useEffect, useState } from 'react';
import photo from '../image/foto.png';
import '../style/Form.css';
import '../style/effectImg.css';
import { effectScroll } from '../utils/Effectscroll';
import { sendEmailApi } from '../services/sendEmail';

export default function Form() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [confirmeEmail, setConfirmeEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [company, setCompany] = useState('');
  const [sizeCompany, setSizeCompany] = useState('');
  const [invoicing, setInvoicing] = useState('');
  const [loading, setLoading] = useState(false);

  const sendEmail = async (e) => {
    e.preventDefault();

    if (name.length < 3) {
      alert("Por favor, corrija o nome.");
      return;
    }

    if (email !== confirmeEmail) {
      alert("Por favor, corrija o email. Os campos de email não coincidem.");
      return;
    }
      const phoneRegex = /^\d{10,}$/;
    if (!phoneRegex.test(phone)) {
      alert("Por favor, insira um número de telefone válido. Apenas números");
      return;
    }
    
    try {
      setLoading(true);
      const response = await sendEmailApi(name, email, phone, company, sizeCompany, invoicing);
      
      console.log('Resposta da API:', response);

      setName('');
      setEmail('');
      setPhone('');
      setCompany('');
      setSizeCompany('');
      setInvoicing('');

      alert("Formulário enviado com sucesso!");
    } catch (error) {
      alert("Cliente já cadastrado caso tenha algum problema entre em contato: brunagimenez97@gmail.com");
      console.error('Erro ao enviar formulário:', error);
    } finally {
      setLoading(false);
    }
  }

  const handlePaste = (e) => {
    e.preventDefault();
    setConfirmeEmail('');
  };

  useEffect(() => {
    effectScroll('.scroll');
  }, []);

  return (
    <section className='form-home'>
      <h3 className='p-action form-p' id="form-free" >Preencha o formulário para ter uma </h3>
      <span className="important form-imp">CONSULTORIA PERSONALIZADA!</span>
      <section className='form-img'>
        <div className='form-title'>
          <p>CADASTRE-SE ENTRAREMOS EM CONTATO EM BREVE PELO EMAIL</p>
          <form className='form-free moving-image' onSubmit={sendEmail}>
            <input
              name="name"
              type="text"
              placeholder="Qual seu nome ?"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <input
              name="email"
              type="email"
              placeholder="E-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              name="confirmeEmail"
              type="email"
              placeholder="Confirme seu email"
              value={confirmeEmail}
              onChange={(e) => setConfirmeEmail(e.target.value)}
              onPaste={handlePaste}
              required
            />
            <input
              name="phone"
              type="tel"
              placeholder="Telefone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
            <input
              name="company"
              type="text"
              placeholder="Qual o nome da Empresa ?"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              required
            />
            <select id="sizeCompany" name="sizeCompany" value={sizeCompany} onChange={(e) => setSizeCompany(e.target.value)} required >
              <option value="" disabled selected hidden>
                Quantos funcionários você tem atualmente?
              </option>
              <option value="0-10">0-10 funcionários</option>
              <option value="11-100">11-100 funcionários</option>
              <option value="+100">+100 funcionários</option>
            </select>
            <select id="invoicing" name="invoicing" value={invoicing} onChange={(e) => setInvoicing(e.target.value)} required>
              <option value="" disabled selected hidden>
                Qual o faturamento mensal da sua empresa?
              </option>
              <option value="10k">Até 10 mil</option>
              <option value="11k-50k">11 mil à 50 mil</option>
              <option value="51k-100k">51 mil à 100 mil</option>
              <option value="+101k">+101 mil</option>
            </select>
            <button
              type="submit"
              id="btn-enter"
              data-testid="login-submit-btn"
              className='button-login form-button'
              disabled={loading}
            >
              {loading ? 'Enviando...' : <>EU QUERO RECEBER UMA<br/>CONSULTORIA GRATUITA!</>}
            </button>
          </form>
        </div>
        <div>
          <img src={photo} alt="Venha fazer parte da nossa Equipe! Seu Sucesso é a Nossa Prioridade" width={350} id={"img-bform"} className="scroll" />
        </div>
      </section>
    </section>
  );
};