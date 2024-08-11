import MobilePageWrapper from "../../components/MobilePageWrapper/MobilePageWrapper.tsx";
import "./Home.scss";

const Home = () => {
    const date = new Date();
    const month = date.toLocaleString('en-us', { month: 'long' });
    const day = date.getDay();
    const dayName = date.toLocaleString('en-us', { weekday: 'long' });
    const dateString = `${month} ${day} | ${dayName}`;
    return (
    <MobilePageWrapper>
        <article className="home">
            <div className="home--title">Log Food</div>
            <div className="home--date">{dateString}</div>
            <section className="home--meals">
                <button className="breakfast">Breakfast</button>
                <button className="breakfast">Lunch</button>
                <button className="breakfast">Snack</button>
                <button className="breakfast">Dinner</button>
            </section>
        </article>
    </MobilePageWrapper>
    )
};

export default Home;
