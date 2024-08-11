import "./Footer.scss";
import {useNavigate} from "react-router-dom";

const Footer = () => {
        const navigate = useNavigate();
        return (
            <footer className="footer">
                    <button onClick={() => navigate("/")}>Home</button>
                    <button onClick={() => navigate("/login")}>Log In</button>
                    <button onClick={() => navigate("/snap")}>Snap</button>
                    <button>Plate</button>
                    <button>Profile</button>
            </footer>
        );
}

export default Footer;
