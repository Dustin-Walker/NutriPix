import MobilePageWrapper from "../../components/MobilePageWrapper/MobilePageWrapper.tsx";
import "./Home.scss";
import Title from "../../components/Title/Title.tsx";

const Home = () => {
    const date = new Date();
    const month = date.toLocaleString('en-us', { month: 'long' });
    const day = date.getDay();
    const dayName = date.toLocaleString('en-us', { weekday: 'long' });
    const dateString = `${month} ${day} | ${dayName}`;
    return (
    <MobilePageWrapper>
        <article className="home">
            <Title title="Home" />
            <div className="home--date">{dateString}</div>
            <section className="home--meals">
                <div className="home--meal">
                    <img className="home--meal--image" src="/assets/donut.jpg" alt="Full English breakfast" />
                    <div className="home--meal--label">Breakfast</div>
                </div>
                <div className="home--meal">
                    <img className="home--meal--image" src="/assets/salad.jpg" alt="Salad" />
                    <div className="home--meal--label">Lunch</div>
                </div>
                <div className="home--meal">
                    <img className="home--meal--image" src="/assets/apple.jpg" alt="Apple" />
                    <div className="home--meal--label">Snack</div>
                </div>
                <div className="home--meal">
                    <img className="home--meal--image" src="/assets/spaghetti.jpg" alt="Spaghetti" />
                    <div className="home--meal--label">Dinner</div>
                </div>
            </section>
        </article>
    </MobilePageWrapper>
    )
};

export default Home;
