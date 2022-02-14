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

    const [name, setName] = useState();
    const [email, setEmail] = useState();

    const [form, setForm] = useState(false);
    const uploadVideo = (e) => {
        setVideoUrl(false);
        const file = e.target.files[0];
        const vidUrl = URL.createObjectURL(file);
        setVideofile(vidUrl);

        setVideoPlaceH(false);
    };

    // useEffect(() => {
    //     console.log(myiframe);
    // }, []);
    return (
        <div className="preview">
            <h5>Preview</h5> <br />
            {vidCurrentTime < 20 && form == true && (
                <div
                    className="template"
                    style={
                        formStyle.formposition == "left"
                            ? { left: "5%" }
                            : { right: "1%" }
                    }
                >
                    <form
                        style={{
                            backgroundColor: formStyle.theme,
                            borderRadius: formStyle.formBorder,
                        }}
                    >
                        <h6
                            style={{
                                margin: " 0px 10px",
                                padding: "3px 6px",
                                backgroundColor: "silver",
                                display: "flex",
                                borderRadius: "50px",
                                float: "right",
                                color: "blue",
                                cursor: "pointer",
                                fontFamily: "sans-serif",
                            }}
                            onClick={() => {
                                setForm(false);
                            }}
                        >
                            X
                        </h6>
                        <br /> <br />
                        <input
                            type="text"
                            placeholder="Name"
                            style={{
                                color: formStyle.textColor,
                                fontSize: formStyle.fontSize,
                            }}
                            onChange={(e) => {
                                setName(e.target.value);
                            }}
                        />
                        <input
                            type="text"
                            placeholder="Email"
                            style={{
                                color: formStyle.textColor,
                                fontSize: formStyle.fontSize,
                            }}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <br /> <br />
                        <button
                            type="submit"
                            id="btn"
                            onClick={(e) => {
                                e.preventDefault();
                                setForm(false);
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
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen
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

                    setTimeout(() => {
                        setForm(true);
                    }, formStyle.popTime + 2000);
                }}
            />
            <h4 style={{ margin: "0px", color: "blue", display: "flex" }}>
                Or
            </h4>
            <input
                type="file"
                name=""
                id=""
                onChange={(e) => {
                    uploadVideo(e);
                }}
            />
            {/* <input
                type="button"
                name=""
                id=""
                value={"Preview"}
                onClick={() => {}}
            /> */}
            {!form && (
                <ul>
                    <li>{name}</li>
                    <li>{email}</li>
                </ul>
            )}
        </div>
    );
};

export default Preview;
