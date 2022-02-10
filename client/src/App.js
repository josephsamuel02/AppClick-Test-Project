import "./App.css";
import { useSelector } from "react-redux";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
    Link,
} from "react-router-dom";

import Index from "./components/UserId/Index";
import Home from "./components/Home/Home";
import FormTemplates from "./components/AppInputs/FormTemplates";
import Preview from "./components/Preview/Preview";
function App() {
    const theuser = useSelector((state) => state.RegisterUser.username);
    return (
        <div className="App">
            <div className="AppBackground">
                <div className="App-logo">
                    <Link to={"/"}>
                        <img
                            src="http://www.appclicktech.com/imgs/appclicktechnology-logo-website-developer-ibadan.png"
                            alt="AppClick-Logo"
                        />
                    </Link>
                </div>

                <Router>
                    <Routes>
                        <Route path="/home" element={<Home />} />
                        <Route path="/preview" element={<Preview />} />
                        <Route
                            path="/"
                            element={
                                theuser ? (
                                    <Navigate replace to="/home" />
                                ) : (
                                    <Index />
                                )
                            }
                        />

                        <Route path="/" element={<Index />} />
                        <Route path="/templates" element={<FormTemplates />} />
                    </Routes>
                </Router>
            </div>
        </div>
    );
}

export default App;
