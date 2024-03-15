import React, { useState, useEffect } from 'react';
import Footer from '../Containers/Footer';
import Menu from '../Containers/Menu';
import DatePicker from '../calendar/DatePicker/DatePicker';
import '../style/Meeting.css';
import { meetingApiGetId } from '../services/meeting';
import { useHistory } from 'react-router-dom';
import Sheduled from '../Containers/Sheduled';
// import Courses from '../Containers/Courses';
import Cookies from 'js-cookie';

export default function Meeting() {
  const [scheduled, setScheduled] = useState(false);
  const [hasScheduledMeeting, setHasScheduledMeeting] = useState([]);
  const history = useHistory();

  // Obtendo o authResponse dos cookies
  const authResponseFromCookies = Cookies.get('authResponse');
  const authResponse = authResponseFromCookies ? JSON.parse(authResponseFromCookies) : null;

  useEffect(() => {
    async function fetchMeetingData() {
      try {
        if (authResponse && authResponse.client.id) {
          const response = await meetingApiGetId(authResponse.client.id);
          const currentDate = new Date();

          const upcomingMeetings = response.filter(meeting => {
            const meetingDate = new Date(meeting.dateMeeting);
            return meetingDate >= currentDate;
          });

          setHasScheduledMeeting(upcomingMeetings);
          setScheduled(upcomingMeetings.length > 0);
        } else {
          history.push('/');
        }
      } catch (error) {
        console.error('Error fetching meeting data:', error);
      }
    }

    fetchMeetingData();
  }, [authResponse, history]);

  return (
    <div className='meeting-page'>
      <Menu />
      <section className="meeting">
        {authResponse ? (
          scheduled ? (
            <Sheduled hasScheduledMeeting={hasScheduledMeeting} authResponse={authResponse} />
          ) : (
            <DatePicker />
          )
        ) : (
          history.push('/')
        )}
      </section>
      {/* <Courses /> */}
      <Footer />
    </div>
  );
}
