import React from 'react';
import {NavLink} from 'react-router-dom';

export default () => (
    <footer className="site-footer">
        <div className="footer-top">
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
            <section className="tweets">
                <div className="footer-title">Latest tweets</div>
            </section>
            <section className="contact">
                <div className="footer-title">Contact us</div>
                <div><i className="fa fa-map-marker"/>Address: Stewartstown Road, Belfast</div>
                <div><i className="fa fa-phone"/>Phone: <a href="callto://07915611827">07915611827</a></div>
                <div><i className="fa fa-skype"/>Skype: <span><a href="callto://07915611827">ETDrivingSchool</a></span>
                </div>
                <div><i className="fa fa-envelope"/>Email: <span><a href="mailto:etdrivingschool@gmail.com">etdrivingschool@gmail.com</a></span>
                </div>
            </section>
        </div>
        <section className="social">
            <div className="copyright">
                Copyright © 2013 ET Driving School
            </div>
            <div className="social-icons">
                <a href="https://www.facebook.com/ET-Driving-School-990284154358320" target="_blank"><i className="fa fa-facebook-f"/></a>
                <a href="https://twitter.com/etdrivingschool" target="_blank"><i className="fa fa-twitter"/></a>
                <a href="callto://07915611827"><i className="fa fa-skype"/></a>
                <a href="mailto:etdrivingschool@gmail.com"><i className="fa fa-at"/></a>
            </div>
        </section>
    </footer>
)