import React, { Component } from 'react';
import male from '../../img/male.png';
import female from '../../img/female.png';

class AboutPage extends Component {
    render() {
        return (
            <main className="site-content">
                <section className="about">
                    <div className="about-title"><span>about</span></div>
                    <div className="about-detail">
                        ET driving school is a Belfast based DOE approved driving school, offering first class driving lessons at an affordable price. Featuring fully qualified professional and friendly driving instructors. Based in Belfast the driving school covers all local test centres. Our ambition is to provide high quality affordable driving lessons. We aim to swiftly give you the skills and confidence to pass. We facitate all clients, from complete beginners to veteran drivers, and fully support you through the entire process. Below features some testimonals from previous clients.
                    </div>
                </section>
                <section className="testimonials">
                    <div className="testimonials-title"><span>recent testimonials</span></div>
                    <div className="testimonial">
                        <div className="testimonial-icon"><img src={female} alt="female"/></div>
                        <div className="testimonial-detail">
                            <div className="testimonial-quote"><i className="fa fa-quote-left"/><span>I would definitely recommend ET driving school for a driving instructor. I passed first time due to the encouragement I was given and the easy going attitude with each lesson. They gave me the confidence to drive with ease and get on the road ASAP...</span><i
                                className="fa fa-quote-right"/></div>
                            <div className="testimonial-author">Aine Mc Crudden</div>
                        </div>
                    </div>
                    <div className="testimonial">
                        <div className="testimonial-icon"><img src={male} alt="male"/></div>
                        <div className="testimonial-detail">
                            <div className="testimonial-quote"><i className="fa fa-quote-left"/><span>I've had multiple driving instructors before but I didn't feel like I was getting any closer to passing. From the first lesson ET Driving School had a clear path, and got me through the learning process as quickly as possible, I couldn't recommend them more...</span><i
                                className="fa fa-quote-right"/></div>
                            <div className="testimonial-author">Gerard Downes</div>
                        </div>
                    </div>
                    <div className="testimonial">
                        <div className="testimonial-icon"><img src={male} alt="male"/></div>
                        <div className="testimonial-detail">
                            <div className="testimonial-quote"><i className="fa fa-quote-left"/><span>I've had multiple driving instructors before but I didn't feel like I was getting any closer to passing. From the first lesson ET Driving School had a clear path, and got me through the learning process as quickly as possible, I couldn't recommend them more...</span><i
                                className="fa fa-quote-right"/></div>
                            <div className="testimonial-author">Gerard Downes</div>
                        </div>
                    </div>
                    <div className="testimonial">
                        <div className="testimonial-icon"><img src={male} alt="male"/></div>
                        <div className="testimonial-detail">
                            <div className="testimonial-quote"><i className="fa fa-quote-left"/><span>I've had multiple driving instructors before but I didn't feel like I was getting any closer to passing. From the first lesson ET Driving School had a clear path, and got me through the learning process as quickly as possible, I couldn't recommend them more...</span><i
                                className="fa fa-quote-right"/></div>
                            <div className="testimonial-author">Gerard Downes</div>
                        </div>
                    </div>
                </section>
            </main>
        );
    }
}

export default AboutPage;