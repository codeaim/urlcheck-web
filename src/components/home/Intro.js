import React from 'react';
import {NavLink} from "react-router-dom";

export default () => (
    <section className="intro">
        <div className="title">simple website monitoring</div>
        <NavLink exact to="/register" className="button large">
            <span className="icon icon-arrow-right"/>
            try now
        </NavLink>
    </section>
)