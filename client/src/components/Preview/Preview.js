import "./Preview.css";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
const Preview = () => {
    const dispatch = useDispatch();
    const formStyle = useSelector((state) => state.FormDetail);

    const [videoUrl, setVideoUrl] = useState();
    const [videofile, setVideofile] = useState();
    const [videoPlaceH, setVideoPlaceH] = useState(true);
    const [vidCurrentTime, setVidCurrentTime] = useState();
    const [form, setForm] = useState(false);
    const uploadVideo = (e) => {
        setVideoUrl(false);
        const file = e.target.files[0];
        const vidUrl = URL.createObjectURL(file);
        setVideofile(vidUrl);

        setVideoPlaceH(false);
    };

    // useEffect(
    //     () => (vidCurrentTime == 3 ? setForm(true) : null),
    //     [vidCurrentTime]
    // );
    return (
        <div className="preview">
            <h5>Preview</h5>
            {vidCurrentTime < 20 && form == true && (
                <div className="template">
                    <form style={{ backgroundColor: formStyle.theme }}>
                        <br /> <br />
                        <input
                            type="text"
                            placeholder="Name"
                            style={{
                                color: formStyle.textColor,
                                fontSize: formStyle.fontSize,
                            }}
                        />
                        <input
                            type="text"
                            placeholder="Email"
                            style={{
                                color: formStyle.textColor,
                                fontSize: formStyle.fontSize,
                            }}
                        />
                        <br /> <br />
                        <button
                            type="submit"
                            id="btn"
                            onClick={(e) => {
                                e.preventDefault();
                                setForm(false);

                                console.log(formStyle.theme);
                            }}
                        >
                            Submit
                        </button>
                        <br /> <br />
                    </form>
                </div>
            )}

            <div className="videoBox">
                {videoPlaceH && (
                    <div className="placeholder">
                        <p>&#10052;</p>
                    </div>
                )}
                {videofile && (
                    <video
                        src={videofile}
                        controlsList=""
                        controls
                        id="video"
                        onPlay={(e) => {
                            setInterval(() => {
                                setVidCurrentTime(e.target.currentTime);
                            }, 1000);

                            setTimeout(() => {
                                setForm(true);
                            }, formStyle.popTime);
                        }}
                        onPause={(e) => {
                            setVidCurrentTime(e.target.currentTime);
                            console.log(vidCurrentTime);
                        }}
                    ></video>
                )}

                {videoUrl && (
                    <iframe
                        width="560"
                        height="315"
                        src={`https://www.youtube.com/embed/${videoUrl}`}
                        title="YouTube video player"
                        allow="accelerometer;  clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        onChange={() => {
                            // setVidCurrentTime(e.target.currentTime);
                            console.log("e.target.getDuration()");

                            // console.log(player.getDuration());
                        }}
                    ></iframe>
                )}
            </div>
            <input
                type="text"
                placeholder="Past YouTube Video Url"
                onChange={(e) => {
                    let url = e.target.value.split("v=")[1];
                    setVideoPlaceH(false);
                    setVideofile(false);
                    setVideoUrl(url);
                }}
            />
            <h4 style={{ margin: "0px", color: "blue" }}>Or</h4>
            <input
                type="file"
                name=""
                id=""
                onChange={(e) => {
                    uploadVideo(e);
                }}
            />
            <input
                type="button"
                name=""
                id=""
                value={"Preview"}
                onClick={() => {}}
            />
        </div>
    );
};

export default Preview;
