import React, { useState } from 'react';
import { formatDateAndTime } from '../calendar/utils/transformDate';
import '../style/Sheduled.css';
import { meetingApiDelete } from '../services/meeting';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { sendEmail } from '../services/sendEmail';
import { EMAIL_SEND_BBG } from '../utils/env';
import { canceledMeetBBG } from '../utils/emails/canceledMeetBBG';
import { canceledMeet } from '../utils/emails/canceledMeet';

export default function Sheduled({ hasScheduledMeeting, authResponse }) {
    const [deleteSheduled, setDeleteSheduled] = useState(false);
    const history = useHistory();

    const data = formatDateAndTime(hasScheduledMeeting[0].dateMeeting);

    const handleDelete = async(e) => {
        e.preventDefault();
        try {
            const title = 'Um Pit Stop Inesperado 😢: Notificação de Cancelamento da Reunião '

            const {name, email, phone} = authResponse.client;
            const {formattedDate, formattedTime} = data;
            
            await meetingApiDelete(hasScheduledMeeting[0].id);
            await sendEmail(email, title,canceledMeet(name));
            await sendEmail(EMAIL_SEND_BBG, title,canceledMeetBBG(name, formattedDate, formattedTime, phone, email));
            history.go(0);
        } catch (error) {
            console.error('Erro ao enviar formulário:', error);
        } finally {
        }

    };

    return (
        <section className="sheduled">
            {deleteSheduled &&
            <section className='overlay'>
                <div className='popup'>
                    <h3>Tem certeza de que deseja cancelar o seu agendamento?</h3>
                    <div>
                        <button className='popup-btn canceled-sheduled' onClick={handleDelete}> Sim </button>
                        <button className='popup-btn' onClick={() => setDeleteSheduled(false)}> Não </button>
                    </div>
                </div>
            </section>
            }
            <h3 className="action-phrase meeting-p">{authResponse.client.name},<br/>sua Reunião está agendada!</h3>
            <div className="sheduled-date">
                <p>DATA: {data.formattedDate}</p>
                <p>ÁS {data.formattedTime}h</p>
            </div>
            <p className="sheduled-notice">O link para a reunião será enviado no dia, por favor fique atento ao seu E-mail e WhatsApp</p>
            <div>
                <button className="btn-sheduled canceled-sheduled" onClick={() => setDeleteSheduled(true)}>Cancelar agendamento</button>
            </div>
        </section>
    );
}