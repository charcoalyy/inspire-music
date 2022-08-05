import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const TabTitle = () => {
    const location = useLocation();
    const locationName = location.pathname.toString();

    const lessons = ['Instrumental', 'Other', 'Theory'];
    const teachers = ['Piano', 'Strings', 'Woodwinds', 'Voice', 'Guitar', 'Drums']

    useEffect(() => {
      let tabTitle = window.location.toString().split('/');
      tabTitle = tabTitle[tabTitle.length - 1];
      tabTitle = tabTitle.charAt(0).toUpperCase() + tabTitle.slice(1);
      if (tabTitle.length > 1) {
        if (lessons.includes(tabTitle)) { 
          document.title = `${tabTitle} Lessons | Inspire Music Academy`
        } else if (teachers.includes(tabTitle)) {
          document.title = `${tabTitle} Teachers | Inspire Music Academy`
        } else {
          document.title = `${tabTitle} | Inspire Music Academy`
        }
      } else {
        document.title = `Inspire Music Academy`
      }
    }, [location])

    return null;
}

export default TabTitle;