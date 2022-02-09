import "./FormTemplates.css";
import { useState } from "react";
import { Link } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { FormDetail } from "../../store/actions/FormDetail";
const FormTemplates = () => {
    const dispatch = useDispatch();
    const [theme, setTheme] = useState("white");
    const [textColor, setTextColor] = useState("black");
    const [fSize, setFSize] = useState("14px");
    const [formposition, setFormposition] = useState("center");
    const [popTime, sePupTiime] = useState(500);

    const formDetails = {
        theme: theme,
        textColor: textColor,
        fontSize: fSize,
        formposition: formposition,
        popTime: popTime,
    };

    const saveDetaail = () => {
        dispatch(FormDetail(formDetails));
    };

    const mystyle1 = {
        margin: "20px auto",
        padding: "40px 2px 20px",

        position: "relative",
        top: "10%",
        maxWidth: "275px",
        height: "300px",
        backgroundColor: theme,
        bordeRadius: " 5px 40px",
    };

    const mystyle2 = {
        margin: "20px auto 3px",
        padding: "40px 2px 20px",

        position: "relative",
        top: "10%",
        maxWidth: "275px",
        height: "auto",
        backgroundColor: theme,
        borderRadius: "100%",
    };
    const [temp, setTemp] = useState(mystyle1);

    return (
        <div className="formTemplates">
            <div className="temp" id="temp1">
                <div className="tempbtnBox">
                    <button
                        className="tempbtn"
                        onClick={() => setTemp(mystyle1)}
                    >
                        Template 1
                    </button>

                    <button
                        className="tempbtn"
                        onClick={() => setTemp(mystyle2)}
                    >
                        Template 2
                    </button>
                </div>
                <form style={temp}>
                    <br /> <br />
                    <input
                        type="text"
                        placeholder="Name"
                        style={{ color: textColor, fontSize: fSize + "px" }}
                    />
                    <input
                        type="text"
                        placeholder="Email"
                        style={{ color: textColor, fontSize: fSize + "px" }}
                    />
                    <br /> <br />
                    <button type="submit" id="btn">
                        Submit
                    </button>
                    <br /> <br />
                </form>
            </div>

            <div className="temp" id="temp2">
                <div className="tempBox" action="">
                    <span>
                        <h5>Select Form Theme Color</h5>
                        <input
                            type="color"
                            id="favcolor"
                            name="favcolor"
                            // value={theme}
                            onChange={(e) => {
                                setTheme(e.target.value);
                                temp == mystyle2
                                    ? setTemp(mystyle2)
                                    : setTemp(mystyle1);
                            }}
                        />
                    </span>
                    <span>
                        <h5>Text Color</h5>
                        <input
                            type="color"
                            id="favcolor"
                            name="favcolor"
                            onChange={(e) => {
                                setTextColor(e.target.value);
                            }}
                        ></input>
                    </span>
                    <span>
                        <h5>Font Size</h5>
                        <input
                            type="number"
                            id="quantity"
                            name="quantity"
                            min="11"
                            max="28"
                            onChange={(e) => setFSize(e.target.value)}
                        />
                        <h5> px</h5>
                    </span>
                    <span>
                        <h5>Select position of form on screen</h5>
                        <select
                            name=""
                            id=""
                            onSelectCapture={(e) =>
                                setFormposition(e.target.value)
                            }
                        >
                            <option value="left">Span Left</option>
                            <option value="center"> Center</option>
                            <option value="right"> Span Right</option>
                        </select>
                    </span>
                    <span>
                        <h5>Select Form PopUp Time</h5>
                        <select
                            name=""
                            id=""
                            onSelectCapture={(e) => sePupTiime(e.target.value)}
                        >
                            <option value={300}>30s</option>
                            <option value={1000}> 1m</option>
                            <option value={2000}> 2m</option>
                            <option value={5000}> 5m</option>
                        </select>
                    </span>
                    <br /> <br />
                    <Link to={"/preview"}>
                        <button onClick={saveDetaail}>Next</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default FormTemplates;
