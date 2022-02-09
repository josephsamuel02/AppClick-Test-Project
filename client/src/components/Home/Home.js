import "./Home.css";

import { useState } from "react";
import { Link } from "react-router-dom";
const Home = () => {
    const [comp, setComp] = useState("");

    return (
        <div className="home">
            <div className="viewModal">
                <h2>Welcome </h2>
                <Link to={"/templates"}>
                    <button>Create Interactive Video</button>
                </Link>
            </div>
        </div>
    );
};

export default Home;
