import React from "react";
import './App.css';
import {Route, Routes} from "react-router-dom";
import Header from "./components/Header/Header";
import PageRGB from "./components/PageRGB/PageRGB";
import PageCMYK from "./components/PageCMYK/PageCMYK";
import Footer from "./components/Footer/Footer";

function App() {
    return (
        <div className="App">
            <Header />

            <Routes>
                <Route path="/"
                       element={<PageCMYK />} />
                <Route path="/rgb/"
                       element={<PageRGB />} />
                <Route path="/cmyk/"
                       element={<PageCMYK />} />
            </Routes>

            <Footer />
        </div>
    );
}

export default App;
