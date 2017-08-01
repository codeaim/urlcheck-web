import React from 'react';
import {NavLink} from "react-router-dom";

export default () => (
    <div className="login">
        <div className="title">sign in</div>
        <section className="account">
            <form className="no-bottom-margin">
                <div>
                    <label>
                        Email address:
                        <NavLink className="right" exact to="/confirm-email">
                            Confirmed?
                        </NavLink>
                    </label>
                    <input type="email" name="email" placeholder="email" required="required"/>
                </div>
                <div>
                    <label>
                        Password
                        <NavLink className="right" exact to="/forgot-password">
                            Forgot?
                        </NavLink>
                    </label>
                    <input type="password" name="password" placeholder="password" required="required"/>
                </div>
                <span>
                    <NavLink className="button" exact to="/dashboard">
                        <span className="icon icon-login"/>sign in
                    </NavLink>
                </span>
            </form>
        </section>
        <section className="or">or use</section>
        <section className="social">
            <NavLink className="button full facebook" exact to="/login">
                <span className="icon icon-logo-facebook"/>
                facebook
            </NavLink>
            <NavLink className="button full google" exact to="/login">
                <span className="icon icon-logo-google-plus"/>
                google
            </NavLink>
            <NavLink className="button full amazon" exact to="/login">
                <span className="icon icon-logo-amazon"/>
                amazon
            </NavLink>
        </section>
    </div>
)