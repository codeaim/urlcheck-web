import React, {Component} from "react";
import Login from "./Login";

class LoginPage extends Component {
    render() {
        return (
            <main>
                <div className="landing">
                    <Login/>
                </div>
            </main>
        );
    }
}

export default LoginPage;