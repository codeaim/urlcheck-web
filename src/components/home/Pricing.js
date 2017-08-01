import React from 'react';
import {NavLink} from "react-router-dom";

export default () => (
    <section className="pricing">
        <div className="title">simple pricing</div>
        <div className="model">
            <div className="request">
                <div className="icon icon-network"/>
                1 request
            </div>
            <div className="equals">=</div>
            <div className="credit">
                <div className="icon icon-pound-sign-circle"/>
                1 credit
            </div>
        </div>
        <div className="heading large">100,000 free credits</div>
        <NavLink className="button large" exact to="/register">
            <span className="icon icon-person-add"/>
            register
        </NavLink>
    </section>
)