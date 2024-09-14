import "./BackgroundVideo.scss";

function BackgroundVideo(props) {
    return (
        <div className={`video-container `}>
            <div className={props.light ? `light-bg` : `dark-bg`}></div>
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
