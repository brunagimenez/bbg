import { useEffect, useState } from 'react';
import '../style/Action.css';
import { effectTyping } from '../utils/EffectTyping';

export default function Action() {
  const [text, setText] = useState('');
  const phrase = 'NÃO DESPERDICE MAIS TEMPO!';

  useEffect(()=>{
    effectTyping(phrase, setText);
  }, []);

  return (
    <section className='action'>
        <img src='https://media.tenor.com/GocCvG7hs78AAAAi/rocket-joypixels.gif' alt='rocket' className='zoom-button rocket' width={250} />
        <h3 className="action-phrase">{text}</h3>
        <p className='p-action space'>Deixe a
            <span className="important"> BBG Solutions </span>
            moldar seu
            <span className="important"> SUCESSO.</span>
            <span className="important"> TRANSFORME </span>
            sua
            <span className="important"> MARCA </span> 
            e <span className="important">DOMINE </span>
            o mercado.
        </p>
        <button className='zoom-button'><a href="#form-free">EU QUERO!</a></button>
    </section>
  );
}
