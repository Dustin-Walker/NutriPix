import MobilePageWrapper from "../../components/MobilePageWrapper/MobilePageWrapper.tsx";
import "./Login.scss";
import {useNavigate} from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();
    return (<MobilePageWrapper omitFooter>
        <article className="login">
            <section className="login--pictures">
                <img className="login--picture" src="./assets/breakfast.jpg" alt="Full english breakfast"/>
                <img className="login--picture" src="./assets/spaghetti.jpg" alt="Spaghetti"/>
                <img className="login--picture" src="./assets/donut.jpg" alt="Donut"/>
            </section>
            <section className="login--credentials">
                <input type="email" placeholder="Email"/>
                <input type="password" placeholder="Password"/>
                <button onClick={() => navigate("/")}>Login</button>
            </section>
        </article>
    </MobilePageWrapper>)}

export default Login;
