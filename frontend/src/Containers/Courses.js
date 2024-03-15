import React, { useEffect, useState } from 'react';
import '../style/Courses.css';
import { courses } from '../utils/Courses';
import Cookies from 'js-cookie';

export default function Courses() {
    const [startIndex, setStartIndex] = useState(0);
    const [coursesPerPage, setCoursesPerPage] = useState(3);
    const [authResponse, setAuthResponse] = useState(null);

    useEffect(() => {
        const authResponseFromCookies = Cookies.get('authResponse');
        if (authResponseFromCookies) {
            setAuthResponse(JSON.parse(authResponseFromCookies));
        }
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [authResponse]);
    
    const handleResize = () => {
        // Atualiza o número de cursos por página com base na largura da tela
        if (window.innerWidth < 1180) {
            setCoursesPerPage(2);
        } else {
            setCoursesPerPage(3);
        }
    };

    const handleClickNext = () => {
        // Avança para o próximo conjunto de cursos ou reinicia quando estiver no final
        setStartIndex((prevIndex) => (prevIndex + coursesPerPage) % courses.length);
    };

    const handleClickPrev = () => {
        // Retrocede para o conjunto anterior ou reinicia quando estiver no início
        setStartIndex((prevIndex) => (prevIndex - coursesPerPage + courses.length) % courses.length);
    };

    const premium = () => {
        if (authResponse && (authResponse.role !== "Premium" && authResponse.role !== "Admin")) {
          return true;
        } else {
          return false
        }
      }

    return (
        <section className='course-pg'>
            <p className='title-courses action-phrase'> Acesse nossos cursos !</p>
            <div className='courses-page'>
                <button className='btn-course' onClick={handleClickPrev}><ion-icon class="arrow-icon" name="caret-back-outline"></ion-icon></button>
                {courses.slice(startIndex, startIndex + coursesPerPage).map((item, index) => (
                    <div className={premium() === "Premium" ? 'course' : 'course block-course'} key={index}>
                        <a href={item.url} target="_blank" rel="noopener noreferrer" >
                            {premium() !== "Premium" && <ion-icon class='lock' name="lock-closed-outline"></ion-icon>}
                            <img src={item.img} alt={item.name} width={300} />
                            <p className='star-course'>{item.type}</p>
                            <p className='name-course'>{item.name}</p>
                            <p className='access-course'>Acessar {item.type}</p>
                        </a>
                    </div>
                ))}
                <button className='btn-course' onClick={handleClickNext}><ion-icon class="arrow-icon" name="caret-forward-outline"></ion-icon></button>
            </div>
        </section>
    );
}
