import Header from "../../components/Header/Header.tsx";
import changeRoute from "../../utils/changeRoute.ts";
import MobilePageWrapper from "../../components/MobilePageWrapper/MobilePageWrapper.tsx";

const Login = () => (
    <MobilePageWrapper>
        <Header />
        <section className="login--pictures">
        </section>
        <section>
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <button onClick={(e) => changeRoute(e, 'snap')}>Login</button>
        </section>
    </MobilePageWrapper>)

export default Login;
