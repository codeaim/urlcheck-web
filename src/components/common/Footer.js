import React, {Component} from "react";
import axios from "axios";
import About from "./About";
import Tweets from "./Tweets";
import Contact from "./Contact";
import Social from "./Social";

class Footer extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            tweets: []
        };
    }

    componentDidMount() {
        axios.get(`https://ehgb201ss5.execute-api.eu-west-1.amazonaws.com/prod/tweet`)
            .then(res => {
                this.setState({tweets: res.data});
            });
    }

    render() {
        return (
            <footer className="site-footer">
                <div className="footer-top">
                    <About/>
                    <Tweets tweets={this.state.tweets}/>
                    <Contact/>
                </div>
                <Social/>
            </footer>
        )
    }
}

export default Footer;