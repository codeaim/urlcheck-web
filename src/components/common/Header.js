import React from 'react';
import {NavLink} from 'react-router-dom';

export default () => (
    <header>
        <div className="navbar">
            <div className="logo">
                <NavLink exact to="/">
                    <i className="icon-urlcheck"/>
                    urlcheck.io
                </NavLink>
            </div>
            <div className="actions">
                <NavLink to="/login" className="button">
                    <span className="icon icon-login"/>sign in
                </NavLink>
            </div>
        </div>
    </header>
)