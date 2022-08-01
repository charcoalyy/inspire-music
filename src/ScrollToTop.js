import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
    const location = useLocation();
    const locationName = location.pathname.toString();

    useEffect(() => {
      if (!locationName.includes('instrumental') && !locationName.includes('theory') && !locationName.includes('other')) {
        window.scrollTo(0, 0)
      }
    }, [location])

    return null;
}

export default ScrollToTop;