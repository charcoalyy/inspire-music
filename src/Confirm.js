import { useNavigate } from "react-router-dom";

const Confirm = ({message, setExit}) => {
    const navigate = useNavigate();

    const handleExit = () => {
        console.log('exit now false')
        navigate('/');
        setExit(false)
    }

    return(
        <div className="confirm-modal">
            <div className="modal-content">
                <h4>{message}</h4>
                <p>Click outside to return to home.</p>
            </div>
            <div className="dark-screen" onClick={handleExit}></div>
        </div>
    )
}

export default Confirm