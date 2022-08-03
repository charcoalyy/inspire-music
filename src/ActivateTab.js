import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ActivateTab = ({ setActiveTab }) => {
    const location = useLocation();
    const locationName = location.pathname.toString();
    const wantedTab = locationName.split('/');

    useEffect(() => {
        setActiveTab(wantedTab[1]);
    }, [location])

    return null;
}

export default ActivateTab;