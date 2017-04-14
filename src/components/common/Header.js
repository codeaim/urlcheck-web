import React from 'react';
import {NavLink} from 'react-router-dom';

export default () => (
    <header>
        <div className="header-logo">
            <NavLink exact to="/" activeClassName="active">
                <i className="icon-et-logo"/>
                <div className="header-title">
                    <div>driving</div>
                    <div>school</div>
                </div>
            </NavLink>
        </div>
        <div className="header-actions">
            <NavLink exact to="/" activeClassName="active">
                <div className="header-action">
                    <i className="fa fa-home"/>
                    <div>home</div>
                </div>
            </NavLink>
            <NavLink to="/about" activeClassName="active">
                <div className="header-action">
                    <i className="fa fa-user"/>
                    <div>about</div>
                </div>
            </NavLink>
            <NavLink to="/price" activeClassName="active">
                <div className="header-action">
                    <i className="fa fa-gbp"/>
                    <div>prices</div>
                </div>
            </NavLink>
            <NavLink to="/learn" activeClassName="active">
                <div className="header-action">
                    <i className="fa fa-info-circle"/>
                    <div>learn</div>
                </div>
            </NavLink>
            <NavLink to="/contact" activeClassName="active">
                <div className="header-action">
                    <i className="fa fa-envelope"/>
                    <div>contact</div>
                </div>
            </NavLink>
        </div>
    </header>
)