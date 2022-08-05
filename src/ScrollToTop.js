import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { scrollToDesired } from './SpecificLists';

const ScrollToTop = () => {
    const location = useLocation();
    const locationName = location.pathname.toString();

    const lessons = ['instrumental', 'theory', 'other'];
    const teachers = ['piano', 'strings', 'woodwinds', 'voice', 'guitar', 'drums']

    useEffect(() => {
      if (!lessons.some(word => locationName.includes(word)) && !teachers.some(word => locationName.includes(word))) {
        window.scrollTo(0, 0)
      } else {
        scrollToDesired();
      }
    }, [location])

    return null;
}

export default ScrollToTop;