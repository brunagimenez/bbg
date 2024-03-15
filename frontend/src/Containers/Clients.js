import React, { useState, useEffect, useRef } from 'react';
import '../style/Clients.css';
import { feedbacks } from '../utils/feedbacks';
import estrela from '../image/estrela.png';
import verificad from '../image/verificad.png';
import { effectScroll } from '../utils/Effectscroll';

export default function Clients() {
    const [currentFeedbackIndex, setCurrentFeedbackIndex] = useState(0);
    const touchStartX = useRef(0);
    const touchEndX = useRef(0);

    useEffect(() => {
        effectScroll('.feedback-container');
        const handleSwipe = () => {
            const swipeThreshold = 50;
            const swipeDistance = touchEndX.current - touchStartX.current;

            if (swipeDistance > swipeThreshold) {
                handlePrevFeedback();
            } else if (swipeDistance < -swipeThreshold) {
                handleNextFeedback();
            }
        };

        const feedbackContainer = document.querySelector('.feedback-container');

        const touchStartHandler = (e) => {
            touchStartX.current = e.touches[0].clientX;
        };

        const touchEndHandler = (e) => {
            touchEndX.current = e.changedTouches[0].clientX;
            handleSwipe();
        };

        feedbackContainer.addEventListener('touchstart', touchStartHandler);
        feedbackContainer.addEventListener('touchend', touchEndHandler);

        return () => {
            feedbackContainer.removeEventListener('touchstart', touchStartHandler);
            feedbackContainer.removeEventListener('touchend', touchEndHandler);
        };
    }, []);

    const handleNextFeedback = () => {
        setCurrentFeedbackIndex((prevI) => (prevI + 1) % feedbacks.length);
    };
    
    const handlePrevFeedback = () => {
        setCurrentFeedbackIndex((prevI) => (prevI - 1 + feedbacks.length) % feedbacks.length);
    };

    const currentFeedback = feedbacks[currentFeedbackIndex];

    return (
        <section className="client-section">
            <h2 className="title-clients">O QUE NOSSOS<br /><span className="imp-clients">CLIENTES DIZEM:</span></h2>
            <p className='phone-feed'>Arraste para a lateral e veja mais feedbacks ...</p>
            <div className="feedback-container">
                <button className="next-feed" onClick={handlePrevFeedback}>⬅</button>
                <div className='feedback'>
                    <div className='feedback-img'>
                        <img src={currentFeedback.photo} className="photo-client" alt="foto cliente" />
                        <div className="name-client">
                            <h3>{currentFeedback.name}</h3>
                            <p>{currentFeedback.date}</p>
                        </div>
                    </div>
                    <div>
                        {Array.from({ length: currentFeedback.rating }, (_, i) => (<img key={i} className='star' src={estrela} alt='estrela' width={30} />))}
                        {currentFeedback.verified && <img src={verificad} className="verificad" alt='verificado' width={30} />}
                    </div>
                    <p className="text-feedback">{currentFeedback.text}</p>
                </div>
                <button className="next-feed" onClick={handleNextFeedback}>➡</button>
            </div>
            <button className="button-mkt zoom-button"><a href="#form-free">QUERO CRESCER MAIS!</a></button>
        </section>
    );
}