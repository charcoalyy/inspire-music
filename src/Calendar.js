import { gapi } from 'gapi-script'
import { useEffect, useState } from 'react'

const Calendar = () => {

    const [events, setEvents] = useState([]);

    const getEvents = (calendarID, apiKey) => {
      function start() {
        gapi.client.init({
          'apiKey': apiKey,
          'calendarID': calendarID
        }).then(() => {
          return gapi.client.request({'path': `https://www.googleapis.com/calendar/v3/calendars/${calendarID}/events`})
        }).then((response) => {
          let tests = response.result.items
          setEvents(tests)
          return true
        }, (err) => {
          return err
        })
      }
      gapi.load('client', start)
    }


    useEffect(() => {
        getEvents(process.env.REACT_APP_CALENDAR_ID, process.env.REACT_APP_API_KEY)
      }, []);

    return(
        <div>
            {events?.map((event) => (
            <li key={event.id} >
                {event.summary}
            </li>
          ))}
        </div>
    )

}

export default Calendar;