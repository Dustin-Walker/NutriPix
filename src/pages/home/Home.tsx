import MobilePageWrapper from "../../components/MobilePageWrapper/MobilePageWrapper.tsx";

const Home = () => {
    const date = new Date();
    const month = date.toLocaleString('en-us', { month: 'long' });
    const day = date.getDay();
    const dayName = date.toLocaleString('en-us', { weekday: 'long' });
    const dateString = `${month} ${day} | ${dayName}`;
    return (
    <MobilePageWrapper>
        <button>Log Food</button>
        <div>{dateString}</div>
        <section>
            <button>Breakfast</button>
            <button>Lunch</button>
            <button>Snack</button>
            <button>Dinner</button>
        </section>
    </MobilePageWrapper>
    )};

export default Home;
