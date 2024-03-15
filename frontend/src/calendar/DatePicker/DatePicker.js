import React, { useEffect, useState } from 'react';
import '../style/DatePicker.css';
import { hours, monthNames } from '../utils/month';
import { getNumberOfDaysInMonth, getSortedDay, range } from '../utils/functionCalendar';
import { meetingApi, meetingApiGet } from '../../services/meeting';
import { formatDateAndTime, formatDateTimeForAPI } from '../utils/transformDate';
import { useHistory } from 'react-router-dom';
import Cookies from 'js-cookie';
import { sendEmail } from '../../services/sendEmail';
import { meetingConfirm } from '../../utils/emails/meetingConfirm';
import { meetingBBG } from '../../utils/emails/meetingBBG';
import { EMAIL_SEND_BBG } from '../../utils/env';


export default function DatePicker() {
    const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
    const [currentYear, setCurrentYear] = useState(new Date().getUTCFullYear());
    const [selectedDate, setSelectedDate] = useState(null);
    const [selectedHour, setSelectedHour] = useState(null);
    const [loading, setLoading] = useState(false);
    const [meetings, setMeetings] = useState([]);
    const history = useHistory();

    const authResponseFromCookies = Cookies.get('authResponse');
    const authResponse = authResponseFromCookies ? JSON.parse(authResponseFromCookies) : null;

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await meetingApiGet();
            const formattedMeetings = response.map(({date_meeting}) => {
                const {formattedDate} = formatDateAndTime(date_meeting);
                const [dia, mes, ano] = formattedDate.split('/');
                return [{
                    dia,
                    ano,
                    mes
                }]
            });
            setMeetings(formattedMeetings);
          } catch (error) {
            console.error('Error fetching meetings:', error);
          }
        };
    
        fetchData();
      }, []);

    const nextMonth = () => {
        if (currentMonth < 11) {
            setCurrentMonth(prev => prev + 1);
        } else {
            setCurrentMonth(0);
            setCurrentYear(prev => prev + 1);
        }
    }

    const prevMonth = () => {
        if (currentMonth > 0) {
            setCurrentMonth(prev => prev - 1);
        } else {
            setCurrentMonth(11);
            setCurrentYear(prev => prev - 1);
        }
    }
    
    const handleSelection = (e) => {
        if (e.target.id === 'day') {
            const selectedDay = parseInt(e.target.getAttribute('data-day'), 10);
            const selectedDate = new Date(currentYear, currentMonth, selectedDay);
    
            if (selectedDate.getDay() !== 0 && selectedDate.getDay() !== 6) {
                setSelectedDate((prevSelectedDate) => {
                    return prevSelectedDate && prevSelectedDate.getTime() === selectedDate.getTime() ? null : selectedDate;
                });
            }
        }
    }

    const handleSelectionHour = (e) => {
        const selectedHourValue = e.target.getAttribute('data-hour');
        setSelectedHour(prevSelectedHour => (prevSelectedHour === selectedHourValue ? null : selectedHourValue));
    }

    const handleSubmit = async(e) => {
        e.preventDefault();
        try {
            const {name, email, phone, id} = authResponse.client;
            const data = formatDateAndTime(selectedDate).formattedDate;
            const title = 'Decolagem Confirmada: Rumo à Nossa Reunião 🚀'
            setLoading(true);
            const date = formatDateTimeForAPI(selectedDate, selectedHour);
            await meetingApi(id, date);
            await sendEmail(email, title, meetingConfirm(name,data,selectedHour));
            await sendEmail(EMAIL_SEND_BBG, title, meetingBBG(name,data,selectedHour, phone, email))
            history.go(0);
        } catch (error) {
            
        } finally {
            setLoading(false);
        }

    }; 

    return (
        <>
        <h3 className="action-phrase">Agende aqui sua reunião!</h3>
        <section className='calendar-complete'>
            <div className='picker-wrapper'>
                <button className="next-btn" onClick={prevMonth}>⬅</button>
                <div className='calendar-main'>
                    <p className='month-name'>{monthNames[currentMonth]} {currentYear}</p>
                    <section>
                        <div className='sevenColGrid'>
                            {getSortedDay(currentYear, currentMonth).map((day) => <p>{day}</p>)}
                        </div>
                        <div className='sevenColGrid' onClick={handleSelection}>
                            {range(1, getNumberOfDaysInMonth(currentYear, currentMonth) + 1).map((day) => {
                                const currentDate = new Date(currentYear, currentMonth, day);
                                const isSelected = selectedDate?.getTime() === currentDate.getTime();
                                const isWeekend = currentDate.getDay() === 0 || currentDate.getDay() === 6;
                                const isPastDate = currentDate < new Date();
                                const isAlreadyScheduled = meetings.some(meetingDate => {
                                    return (
                                        meetingDate[0].ano == currentYear &&
                                        meetingDate[0].mes == currentMonth + 1 && // Adicionei +1 porque os meses começam do 0 no JavaScript
                                        meetingDate[0].dia == day
                                    );
                            });

    return (
        <p
            key={day}
            id='day'
            data-day={day}
            className={`${isSelected ? 'active' : ''} ${isWeekend ? 'not-selectable' : ''} ${isPastDate ? 'not-selectable' : ''} ${isAlreadyScheduled ? 'not-selectable' : ''}`}
        >
            {day}
        </p>
    );
})}

                        </div>
                    </section>
                </div>
                <button className="next-btn btn-dir" onClick={nextMonth}>➡</button>
            </div>
            <div className='hours' >
                <div onClick={handleSelectionHour} className='setHours'>
                    {hours.map((hour) => (
                        <p
                            key={hour}
                            id='hour'
                            data-hour={hour}
                            className={selectedHour === hour ? 'active-hour' : 'not-active'}
                        >
                            <ion-icon name="time-outline"/>
                            {hour}h
                        </p>
                    ))}
                </div>
                <div>
                    <button className='btn-meet' disabled={!selectedDate || !selectedHour} onClick={handleSubmit}>
                        {loading ? 'Enviando...' : 'Confirme o agendamento!'}
                    </button>
                </div>
            </div>
        </section>
        </>
    );
}
