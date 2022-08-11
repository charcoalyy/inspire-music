import { gapi } from 'gapi-script'
import { useEffect, useState } from 'react';

const Calendar = () => {

    const [events, setEvents] = useState([]);

    let apiKey = "AIzaSyBoRzqTgmRxEQ99C3X9RNF5JVCDO82n6nM"
    let calendarID = "fhkbtcs80q9sjvok0m0m7n94tg@group.calendar.google.com"

    const getEvents = (calendarID, apiKey) => {
        function initiate() {
            gapi.client
              .init({
                apiKey: apiKey,
                calendarID: calendarID
              })
        
              .then(function () {
                return gapi.client.request({
                  path: `https://www.googleapis.com/calendar/v3/calendars/${calendarID}/events`,
                });
              })
        
              .then(
                (response) => {
                  let events = response.result.items;
                  return events;
                },
                function (err) {
                  return [false, err];
                }
              );
          }
        
          gapi.load("client", initiate);
    }

    useEffect(() => {
        const events = getEvents(calendarID, apiKey);
        setEvents(events);
      }, []);

    return(
        <div>
            UMMM
            {events?.map((event) => (
            <li key={event.id} >
                {event.summary}
            </li>
          ))}
        </div>
    )

}

export default Calendar;