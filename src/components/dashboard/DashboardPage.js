import React, {Component} from "react";
import Status from "./Status";
import Checks from "./Checks";

class DashboardPage extends Component {
    render() {
        return (
            <main>
                <div className="dashboard">
                    <Status/>
                    <Checks/>
                </div>
            </main>
        );
    }
}

export default DashboardPage;