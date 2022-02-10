import "./Index.css";

import { useState } from "react";

import Home from "../Home/Home";
import Login from "./Login";
import Register from "./Register";

const Index = () => {
    const [comp, setComp] = useState("login");

    return (
        <div className="index">
            <div className="viewModal">
                <h3 className="title">Interactive Video Form App</h3>
                <div className="btnBoxx">
                    <button className="Tbtn" onClick={() => setComp("login")}>
                        Login
                    </button>
                    <button
                        className="Tbtn"
                        onClick={() => setComp("register")}
                    >
                        Register
                    </button>
                </div>

                {comp == "login" && <Login />}
                {comp == "register" && <Register />}
            </div>
        </div>
    );
};

export default Index;
