import React, {Component} from "react";
import {Route} from "react-router-dom";
import Header from "./common/Header";
import Footer from "./common/Footer";
import HomePage from "./home/HomePage";
import AboutPage from "./about/AboutPage";
import PricePage from "./price/PricePage";
import LearnPage from "./learn/LearnPage";
import ContactPage from "./contact/ContactPage";

class App extends Component {
    render() {
        return (
            <div className="site">
                <Header/>
                <Route exact path="/" component={HomePage}/>
                <Route path="/about" component={AboutPage}/>
                <Route path="/price" component={PricePage}/>
                <Route path="/learn" component={LearnPage}/>
                <Route path="/contact" component={ContactPage}/>
                <Footer/>
            </div>
        );
    }
}

export default App;
