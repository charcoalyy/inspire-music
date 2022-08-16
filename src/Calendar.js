import { gapi } from 'gapi-script'
import { useEffect, useState } from 'react'

const Calendar = ({setLessonTime, lessonType}) => {

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

    const handleClick = (e) => {
      setLessonTime(e.currentTarget.id)
      let buttons = document.querySelectorAll('.times-button');
      buttons.forEach(button => button.classList.remove('active-selection'))
      e.currentTarget.classList.add('active-selection');
    }

    let test = []

    const showRelevantTimes = (type, eve) => {
      let start = eve.start.dateTime
      let end = eve.end.dateTime

      if (type === 'Woodwinds' && ['Flute', 'Clarinet', 'Saxophone'].includes(eve.summary)) {
          return(
            <div className="times-button" onClick={handleClick} id={eve.id} key={eve.id}>
              <h4>{eve.summary}</h4>
              <p>{start.slice(0, 10)}</p>
              <p>{`${start.slice(11, 16)} to ${end.slice(11, 16)}`}</p>
            </div>
          )
      } else if (type === eve.summary) {
          return(
            <div className="times-button" onClick={handleClick} id={eve.id} key={eve.id}>
              <h4>{eve.summary}</h4>
              <p>{start.slice(0, 10)}</p>
              <p>{`${start.slice(11, 16)} to ${end.slice(11, 16)}`}</p>
            </div>
          )
      }
    }

    return(
        <div className="times-list">
            { events?.map((ev) => {
                let relevantEvent = showRelevantTimes(lessonType, ev)
                relevantEvent && test.push(relevantEvent)
            })}
            { test && test }
            { test.length === 0 && <div className="placeholder">No current available lessons</div>}
        </div>
    )

}

export default Calendar;