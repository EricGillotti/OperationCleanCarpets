import React from "react";
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Gallery from "./pages/Gallery";
import { SliderData } from './pages/SliderData';
import Services from "./pages/Services";
import SpecialOffers from "./pages/SpecialOffers";
import ContactUs from "./pages/ContactUs";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";


/*Different pages are just react components*/

function App() {
    return (
        <Router>
            <div className="App">
                <Navbar />
                <Switch>
                    <Route path="/" exact><Home /></Route>
                    <Route path="/AboutUs"><AboutUs /></Route>
                    <Route path="/Gallery"><Gallery slides={SliderData} /></Route>
                    <Route path="/Services"><Services /></Route>
                    <Route path="/SpecialOffers"><SpecialOffers /></Route>
                    <Route path="/ContactUs"><ContactUs /></Route>
                </Switch>
                <Footer />
            </div>
        </Router>
    );
}

export default App;