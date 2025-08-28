import React from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Weather from "./components/Weather/Weather";

import "./style.css";

const App = () => {
    return (
        <div className="card">
            <Header />
            <Weather />
            <Footer />
        </div>
    );
};

export default App;
