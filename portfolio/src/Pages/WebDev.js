import "./WebDev.scss";
import BackgroundVideo from "../Components/BackgroundVideo";
import Clock from "../Components/Clock";
import videoLight from "../Assets/bg.mp4";
import Menu from "../DockAndMenu Components/menu";
import Dock from "../DockAndMenu Components/dock";

function WebDev() {
    return (
        <>
            <BackgroundVideo video={videoLight} />
            <header>
                <Menu />
            </header>
            <main className="UI__Layer">
                <div className="title">
                    <h1>Sam Alexander</h1>

                    <Clock />
                </div>
                <Dock />
            </main>
        </>
    );
}
export default WebDev;
