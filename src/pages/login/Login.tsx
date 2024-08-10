import Header from "../../components/Header/Header.tsx";
import changeRoute from "../../utils/changeRoute.ts";
import MobilePageWrapper from "../../components/MobilePageWrapper/MobilePageWrapper.tsx";
import "./Login.scss";

const Login = () => (
    <MobilePageWrapper>
        <Header />
        <article className="login">
            <section className="login--pictures">
                <img className="login--picture" src="/assets/breakfast.jpg" alt="Full english breakfast"/>
                <img className="login--picture" src="/assets/spaghetti.jpg" alt="Spaghetti"/>
                <img className="login--picture" src="/assets/donut.jpg" alt="Donut"/>
            </section>
            <section className="login--credentials">
                <input type="email" placeholder="Email"/>
                <input type="password" placeholder="Password"/>
                <button onClick={(e) => changeRoute(e, 'snap')}>Login</button>
            </section>
        </article>
    </MobilePageWrapper>)

export default Login;
