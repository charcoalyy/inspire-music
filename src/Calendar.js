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


    let what = (eve) => {
      let test = eve.date.startTime
      return test
    }

    return(
        <div className="times-list">

            { events?.map((ev) => {
                let start = ev.start.dateTime
                let end = ev.end.dateTime

                return(<div className="times-button">
                  <h4>{ev.summary}</h4>
                  <p>{start.slice(0, 10)}</p>
                  <p>{`${start.slice(11, 16)} to ${end.slice(11, 16)}`}</p>
                </div>)
              
            })}
        </div>
    )

}

export default Calendar;