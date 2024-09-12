import "./Home.scss";
import BackgroundVideo from "../Components/BackgroundVideo";
import Clock from "../Components/Clock";
import videoLight from "../Assets/bg.mp4";

function Home() {
    return (
        <>
            <BackgroundVideo video={videoLight} />
            <main className="UI__Layer">
                <h1>Sam Alexander</h1>
                <Clock />
            </main>
        </>
    );
}
export default Home;
