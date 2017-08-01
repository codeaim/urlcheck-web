import React, {Component} from "react";
import {Route} from "react-router-dom";
import Header from "./common/Header";
import Footer from "./common/Footer";
import HomePage from "./home/HomePage";
import LoginPage from "./login/LoginPage";
import DashboardPage from "./dashboard/DashboardPage";

class App extends Component {
    render() {
        return (
            <div className="site">
                <Header/>
                <Route exact path="/" component={HomePage}/>
                <Route path="/login" component={LoginPage}/>
                <Route path="/dashboard" component={DashboardPage}/>
                <Footer/>
            </div>
        );
    }
}

export default App;
