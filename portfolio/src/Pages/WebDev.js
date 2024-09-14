import "./WebDev.scss";
import BackgroundVideo from "../Components/BackgroundVideo";
import Clock from "../Components/Clock";
import videoLight from "../Assets/bg.mp4";

function WebDev() {
    return (
        <>
            <BackgroundVideo video={videoLight} />
            <main className="UI__Layer">
                <header className="title">
                    <h1>Sam Alexander</h1>
                    <Clock />
                </header>
            </main>
        </>
    );
}
export default WebDev;
