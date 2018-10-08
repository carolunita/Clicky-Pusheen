import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Default from "./components/Default";

const App = () => (
    <Router>
        <div>
            <Route path={"/"} component={Default} />
        </div>
    </Router>
)

export default App;