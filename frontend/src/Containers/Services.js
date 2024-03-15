import React, { useContext, useEffect } from 'react';
import { ExpandedContext } from '../context/ExpandedContext';
import '../style/Services.css';
import { services } from '../utils/services';
import { effectScroll } from '../utils/Effectscroll';

export default function Services() {
  const { expanded, setExpanded } = useContext(ExpandedContext);
  useEffect(() => {
    effectScroll('.section-service');
  }, []);

  const handleServiceClick = (index) => {
    setExpanded((prev) => (prev === index ? null : index));
  };

  return (
    <section className="main-service">
      <h2 className="title-service">Nossos<br /><span className="important imp-service">SERVIÇOS</span></h2>
      <div className="section-service">          
        {services.map((service, i) => (
          <div key={i} className='group-service' onClick={() => handleServiceClick(i)}>
            <div className={expanded === i ? 
              'container-service-none'
              : 'container-service' }>
              <p>{service.title}</p>
              {expanded === i ? 
              <span>▼</span>
              : <span>❯</span> }
            </div>
            {expanded === i ? <p className='expanded'>{service.description}</p> : null}
          </div>
        ))}
      </div>
      <button className="button-mkt zoom-button"><a href="#form-free">QUERO SABER MAIS!</a></button>
    </section>
  );
}
