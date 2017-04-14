import React, {Component} from 'react';
import car from '../../img/car.jpg';
import price from '../../img/price.jpg';
import male from '../../img/male.png';
import female from '../../img/female.png';

class HomePage extends Component {
    render() {
        return (
            <main className="site-content">
                <section className="highlights">
                    <div className="highlight car">
                        <img src={car} width="900" height="506" alt="car"/>
                        <i className="icon-et-logo highlight-icon"/>
                        <span className="car-image-title">fully qualified, doe approved driving instruction</span>
                        <span className="car-image-subtitle-one">high quality driving lessons</span>
                        <span className="car-image-subtitle-two">affordable professional 1 on 1 tuition</span>
                    </div>
                    <div className="highlight price hidden">
                        <img src={price} width="900" height="506" alt="price"/>
                        <span className="price-image-title">professional belfast based driving school</span>
                        <span className="price-image-subtitle-one">unrivalled value for money</span>
                        <span className="price-image-subtitle-two">great deals including intensive courses</span>
                        <span className="price-image-intro">from</span>
                        <span className="price-image-price">£18</span>
                        <span className="price-image-lesson">per lesson</span>
                    </div>
                </section>
                <section className="intro">
                    <div className="intro-title">We are <span>ET Driving School</span>, offering the best driving
                        lessons in Belfast.
                    </div>
                    <div className="intro-text">Belfast based driving school specializing in providing high quality
                        affordable driving
                        lessons. We offer highly competetive prices from a DOE approved driving instructor.
                    </div>
                </section>
                <section className="features">
                    <div className="feature-group">
                        <div className="feature">
                            <div className="feature-icon"><i className="fa fa-users"/></div>
                            <div className="feature-title">Top driving school</div>
                            <div className="feature-text">ET driving school is DOE approved, with fully qualified
                                instructors. Find out
                                more details about us by visiting our About page.
                            </div>
                            <div className="feature-action"><a href="/about">About us</a></div>
                        </div>
                        <div className="feature">
                            <div className="feature-icon"><i className="fa fa-gbp"/></div>
                            <div className="feature-title">Affordable prices</div>
                            <div className="feature-text">ET driving school is DOE approved, with fully qualified
                                instructors. Find out
                                more details about us by visiting our About page.
                            </div>
                            <div className="feature-action"><a href="/price">Prices</a></div>
                        </div>
                    </div>
                    <div className="feature-group">
                        <div className="feature">
                            <div className="feature-icon"><i className="fa fa-book"/></div>
                            <div className="feature-title">Quality teaching</div>
                            <div className="feature-text">We provide all the knowledge and materials you need to pass
                                both the practical
                                and theory sections of the driving test.
                            </div>
                            <div className="feature-action"><a href="/learn">Learn</a></div>
                        </div>
                        <div className="feature">
                            <div className="feature-icon"><i className="fa fa-comments"/></div>
                            <div className="feature-title">Keep in touch</div>
                            <div className="feature-text">Don't heistate to get in touch. Contact us by visiting our
                                contact page, which
                                features multiple methods for contacting us
                            </div>
                            <div className="feature-action"><a href="/contact">Contact us</a></div>
                        </div>
                    </div>

                </section>
                <section className="testimonials">
                    <div className="testimonials-title"><span>testimonials</span></div>
                    <div className="testimonial">
                        <div className="testimonial-icon"><img src={female} alt="female"/></div>
                        <div className="testimonial-detail">
                            <div className="testimonial-quote"><i className="fa fa-quote-left"/><span>I would definitely recommend ET driving school for a driving instructor. I passed first time due to the encouragement I was given and the easy going attitude with each lesson. They gave me the confidence to drive with ease and get on the road ASAP...</span>
                                <i className="fa fa-quote-right"/></div>
                            <div className="testimonial-author">Aine Mc Crudden</div>
                        </div>
                    </div>
                    <div className="testimonial hidden">
                        <div className="testimonial-icon"><img src={male} alt="male"/></div>
                        <div className="testimonial-detail">
                            <div className="testimonial-quote"><i className="fa fa-quote-left"/><span>I've had multiple driving instructors before but I didn't feel like I was getting any closer to passing. From the first lesson ET Driving School had a clear path, and got me through the learning process as quickly as possible, I couldn't recommend them more...</span><i
                                className="fa fa-quote-right"/></div>
                            <div className="testimonial-author">Gerard Downes</div>
                        </div>
                    </div>
                    <div className="testimonial hidden">
                        <div className="testimonial-icon"><img src={male} alt="male"/></div>
                        <div className="testimonial-detail">
                            <div className="testimonial-quote">
                                <i className="fa fa-quote-left"/>
                                <span>I've had multiple driving instructors before but I didn't feel like I was getting any closer to passing. From the first lesson ET Driving School had a clear path, and got me through the learning process as quickly as possible, I couldn't recommend them more...</span>
                                <i className="fa fa-quote-right"/></div>
                            <div className="testimonial-author">Gerard Downes</div>
                        </div>
                    </div>
                    <div className="testimonial hidden">
                        <div className="testimonial-icon"><img src={male} alt="male"/></div>
                        <div className="testimonial-detail">
                            <div className="testimonial-quote"><i className="fa fa-quote-left"/><span>I've had multiple driving instructors before but I didn't feel like I was getting any closer to passing. From the first lesson ET Driving School had a clear path, and got me through the learning process as quickly as possible, I couldn't recommend them more...</span>
                                <i className="fa fa-quote-right"/></div>
                            <div className="testimonial-author">Gerard Downes</div>
                        </div>
                    </div>
                </section>
            </main>
        );
    }
}

export default HomePage;