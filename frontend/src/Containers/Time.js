import '../style/Time.css';
import { useEffect } from 'react';
import { effectScroll } from '../utils/Effectscroll';
import { marketingData } from '../utils/Marketing';

export default function Time() {
    
    const MarketingItem = ({ icon, title, description }) => (
        <div className='flip-container container-mkt'>
          <div className="initial-text">
            <img src={icon} alt={`icon ${title}`} width={70} className="mkt-icon"/>
            <p>{title}</p>
          </div>
          <p className="hover-text">{description}</p>
        </div>
    );
      
    const MarketingList = () => (
        <div className='list-mkt scroll-mkt'>
          {marketingData.map((item, index) => (
            <MarketingItem key={index} {...item} />
          ))}
        </div>
    );

    useEffect(() => {
        effectScroll('.scroll-mkt');
    }, []);
    return (
        <section className="marketing">
            <div class="action title-time">
                <h3 className="action-phrase">Nós temos no nosso <span className="important">TIME</span> proﬁssionais especializados para <span className="important">GARANTIR</span> seu <span className="important">SUCESSO!</span></h3> 
            </div>
            <MarketingList />
            <button className="button-time zoom-button"><a href="#form-free">EU QUERO!</a></button>
        </section>
    );
};