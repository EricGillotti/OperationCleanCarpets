import React from "react"
import './App.css'
import Navbar from "./components/Navbar/Navbar"

function App() {
    return (
        <div className="App">
            <Navbar />
            <h6 className="App-header">
                <a
                className="App-link"
                href="https://www.facebook.com/Gparentisprofessionalcarpetcleaning/"
                target="_blank"
                rel="noopener noreferrer"
                >
                Visit our Facebook page!
                </a>
            </h6>
        </div>
    );
}

export default App;