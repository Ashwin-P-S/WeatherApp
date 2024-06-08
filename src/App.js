import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Weather from "./components/Weather";

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
