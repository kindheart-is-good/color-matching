import React from "react";
import './App.css';
import {Route, Routes} from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import PageWithColors from "./pages/PageWithColors/PageWithColors";
import PageRGB from "./pages/PageRGB/PageRGB";
import PageCMYK from "./pages/PageCMYK/PageCMYK";

function App() {
    return (
        <div className="App">
            <Header />

            <Routes>
                <Route path="/"
                       element={<PageWithColors />} />
                <Route path="/colors"
                       element={<PageWithColors />} />
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
