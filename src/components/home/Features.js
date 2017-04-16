import React from 'react';
import {NavLink} from "react-router-dom";

export default () => (
    <section className="features">
        <div className="feature-group">
            <div className="feature">
                <div className="feature-icon"><i className="fa fa-users"/></div>
                <div className="feature-title">
                    Top driving school
                </div>
                <div className="feature-text">
                    ET driving school is DOE approved, with fully qualified instructors. Find out more
                    details about us by visiting our About page.
                </div>
                <div className="feature-action">
                    <NavLink to="about">About us</NavLink>
                </div>
            </div>
            <div className="feature">
                <div className="feature-icon"><i className="fa fa-gbp"/></div>
                <div className="feature-title">Affordable prices</div>
                <div className="feature-text">
                    ET driving school is DOE approved, with fully qualified instructors. Find out more
                    details about us by visiting our About page.
                </div>
                <div className="feature-action">
                    <NavLink to="price">Prices</NavLink>
                </div>
            </div>
        </div>
        <div className="feature-group">
            <div className="feature">
                <div className="feature-icon"><i className="fa fa-book"/></div>
                <div className="feature-title">Quality teaching</div>
                <div className="feature-text">
                    We provide all the knowledge and materials you need to pass both the practical and
                    theory sections of the driving test.
                </div>
                <div className="feature-action">
                    <NavLink to="learn">Learn</NavLink>
                </div>
            </div>
            <div className="feature">
                <div className="feature-icon"><i className="fa fa-comments"/></div>
                <div className="feature-title">Keep in touch</div>
                <div className="feature-text">
                    Don't heistate to get in touch. Contact us by visiting our contact page, which features
                    multiple methods for contacting us
                </div>
                <div className="feature-action">
                    <NavLink to="contact">Contact us</NavLink>
                </div>
            </div>
        </div>
    </section>
)