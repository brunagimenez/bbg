import '../style/Marketing.css';
import React, { useEffect } from 'react';
import certo from '../image/certo.png';
import eye from '../image/eye.png';
import hand from '../image/hand.png';
import rocket from '../image/rocket.png';
import people from '../image/3.png';
import bruna from '../image/bruna.png';
import nelbiti from '../image/nelbiti.png';
import { effectScroll } from '../utils/Effectscroll';

export default function Marketing() {
    useEffect(() => {
        effectScroll('.list-scroll');
        effectScroll('.about-mkt');
        effectScroll('.scroll-ceo');
    }, []);
    return (
        <section className="marketing">
            <h3 className="p-action marketing-title"> Por que investir em <span className="important">Marketing</span> ? </h3>
            <div className='list-mkt list-scroll'>
                <div className='container-mkt zoom-mkt'>
                    <img src={certo} alt="certo" width={70} className="mkt-icon"/>
                    <p>Diferenciar-se da<br/> concorrência</p>
                </div>
                <div className='container-mkt zoom-mkt'>
                    <img src={eye} alt="olho" width={70} className="mkt-icon"/>
                    <p>Aumentar a<br/>visibilidade e <br/>presença no <br/> mercado</p>
                </div>
                <div className='container-mkt zoom-mkt'>
                    <img src={hand} alt="aperto de mão" width={70} className="mkt-icon"/>
                    <p>fidelizar clientes</p>
                </div>
                <div className='container-mkt zoom-mkt'>
                    <img src={rocket} alt="foguete" width={70} className="mkt-icon"/>
                    <p>Aumentar o <br/>retorno financeiro</p>
                </div>
            </div>
            <div className="blue-mkt">
                <div className="about-mkt">
                    <p className="p-action p-mkt text-mkt">O marketing é fundamental 
                    para o sucesso de qualquer
                    empresa. Ele ajuda a criar uma 
                    identidade única para a marca,
                    promover seus
                    produtos/serviços e conquistar
                    clientes. Investir em marketing
                    é importante para se destacar
                    no mercado, aumentar a
                    visibilidade, ﬁdelizar clientes e
                    obter um retorno ﬁnanceiro
                    positivo.</p>
                    <img src={people} className="people" alt="pessoa" width={700}/>
                </div>
            </div>
            <button className="button-mkt zoom-button"><a href="#form-free">EU QUERO SABER COMO VENDER MAIS!</a></button>
            <div className="about-nb">
                <div className="about-value">
                    <div>
                        <h3 className="important about" >Quem nós somos?</h3>
                        <p className="text-mkt p-action about-bbg">A BBG Marketing Solutions é uma empresa fundada há quatro anos focada em fornecer serviços de marketing especializados para empresas de vestuário, ajudando-as a alcançar o sucesso em seus negócios.</p>
                    </div>
                    <div className="value-bbg">
                        <h3 className="important value-mkt" >VALORES</h3>
                        <ul className="text-mkt value-bbg p-action">
                            <li>• Foco no cliente</li>
                            <li>• Inovação</li>
                            <li>• Trabalho em equipe</li>
                            <li>• Excelência</li>
                            <li>• Integridade</li>
                        </ul>
                    </div>
                </div>
                <div className="about-img scroll-ceo">
                    <img src={bruna} alt="bruna" width={320}/>
                    <img src={nelbiti} alt="nelbiti" width={350}/>
                </div>
            </div>
        </section>
    );
};
