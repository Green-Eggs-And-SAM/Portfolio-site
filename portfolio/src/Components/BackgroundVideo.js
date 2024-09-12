import "./BackgroundVideo.scss";
import video from "../Assets/bg.mp4";

function BackgroundVideo(props) {
    console.log(video);
    return (
        <div className={`video-container `}>
            <video
                src={props.video}
                autoPlay
                muted
                loop
                className={`videoPos `}
                typeof="video/mp4"
            >
                Your browser does not support HTML5 video.
            </video>
        </div>
    );
}
export default BackgroundVideo;
