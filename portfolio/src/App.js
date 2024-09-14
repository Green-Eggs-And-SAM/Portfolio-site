import "./App.css";
import WebDev from "./Pages/WebDev";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// https://codepen.io/vihanga/pen/gOmXvRr
function App() {
    return (
        <div className="App">
            <header className="App-header">
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<WebDev />} />
                    </Routes>
                </BrowserRouter>
            </header>
        </div>
    );
}

export default App;
