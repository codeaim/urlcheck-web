import React from 'react';
import {NavLink} from "react-router-dom";

export default () => (
    <section className="status hidden">
        <div className="title">create your first check</div>
        <NavLink className="button large hidden" exact to="/dashboard">
            <span className="icon icon-login"/>
            buy credits
        </NavLink>
    </section>
)