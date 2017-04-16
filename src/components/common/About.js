import React from 'react';
import {NavLink} from 'react-router-dom';

export default () => (
    <section className="about-footer">
        <div className="footer-title">About us</div>
        <div>ET driving school is a Belfast based DOE approved driving school, offering first class driving
            lessons
            at
            an affordable price. Featuring fully qualified professional and friendly driving instructors. Based
            in
            Belfast the driving school covers all local test centres.
        </div>
        <NavLink to="about">Read more...</NavLink>
    </section>
)