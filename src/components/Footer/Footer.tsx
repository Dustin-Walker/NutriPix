import "./Footer.scss";
import changeRoute from "../../utils/changeRoute.ts";

const Footer = () => (
    <footer className="footer">
        <button>Reports</button>
        <button>Notes</button>
        <button onClick={(e) => changeRoute(e, 'snap')}>Snap</button>
        <button>Plate</button>
        <button>Profile</button>
    </footer>
);

export default Footer;
