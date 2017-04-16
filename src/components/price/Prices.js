import React from 'react';
import {NavLink} from 'react-router-dom';

export default () => (
    <section className="prices">
        <div className="price-title"><span>prices</span></div>
        <div className="price-secondary-title">driving lessons</div>
        <div className="price-group">
            <div className="price-top">
                <div className="price price-left">
                    <div className="price-icon"><i className="fa fa-gbp"/>25</div>
                    <div className="price-intro">single lesson</div>
                    <div className="price-text">standard rate</div>
                    <div className="price-action">
                        <NavLink to="contact">Contact us</NavLink>
                    </div>
                </div>
                <div className="price price-right">
                    <div className="price-icon"><i className="fa fa-gbp"/>65</div>
                    <div className="price-intro">3 Lessons</div>
                    <div className="price-text">First Time block booking</div>
                    <div className="price-action">
                        <NavLink to="contact">Contact us</NavLink>
                    </div>
                </div>
            </div>
            <div className="price-bottom">
                <div className="price price-left">
                    <div className="price-icon"><i className="fa fa-gbp"/>90</div>
                    <div className="price-intro">5 Lessons</div>
                    <div className="price-text">First Time block booking</div>
                    <div className="price-action">
                        <NavLink to="contact">Contact us</NavLink>
                    </div>
                </div>
                <div className="price price-right">
                    <div className="price-icon"><i className="fa fa-gbp"/>220</div>
                    <div className="price-intro">10 lessons</div>
                    <div className="price-text">first time block booking</div>
                    <div className="price-action">
                        <NavLink to="contact">Contact us</NavLink>
                    </div>
                </div>
            </div>
        </div>
        <div className="price-secondary-title">intensive driving courses</div>
        <div className="price-group">
            <div className="price-top price-group-bottom">
                <div className="price  price-left">
                    <div className="price-icon"><i className="fa fa-gbp"/>220</div>
                    <div className="price-intro">10 hours</div>
                    <div className="price-text">crash course</div>
                    <div className="price-action">
                        <NavLink to="contact">Contact us</NavLink>
                    </div>
                </div>
                <div className="price price-right">
                    <div className="price-icon"><i className="fa fa-gbp"/>350</div>
                    <div className="price-intro">15 hours</div>
                    <div className="price-text">crash course</div>
                    <div className="price-action">
                        <NavLink to="contact">Contact us</NavLink>
                    </div>
                </div>
            </div>
            <div className="price-bottom">
                <div className="price">
                    <div className="price-icon"><i className="fa fa-gbp"/>450</div>
                    <div className="price-intro">20 hours</div>
                    <div className="price-text">crash course</div>
                    <div className="price-action">
                        <NavLink to="contact">Contact us</NavLink>
                    </div>
                </div>
            </div>
        </div>
    </section>
)