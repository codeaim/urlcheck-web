import React, {Component} from "react";
import Intro from "./Intro";
import Features from "./Features";
import Pricing from "./Pricing";

class PricePage extends Component {
    render() {
        return (
            <main>
                <div className="landing">
                    <Intro/>
                    <Features/>
                    <Pricing/>
                </div>
            </main>
        );
    }
}

export default PricePage;