import BackgroundVideo from "../Components/BackgroundVideo";
import videoLight from "../Assets/bg.mp4";

function Home() {
    return (
        <>
            <h1>Sam Alexander</h1>
            <BackgroundVideo video={videoLight} />
        </>
    );
}
export default Home;
