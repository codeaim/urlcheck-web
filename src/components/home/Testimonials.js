import React, {Component} from "react";

class Testimonials extends Component {
    render() {
        return (
            <section className="testimonials">
                <div className="testimonials-title"><span>testimonials</span></div>
                {this.props.testimonials.map((testimonial) =>
                    <div key={testimonial.id} className={"testimonial " + testimonial.status}>
                        <div className="testimonial-icon"><img src={testimonial.src} alt={testimonial.alt}/></div>
                        <div className="testimonial-detail">
                            <div className="testimonial-quote">
                                <i className="fa fa-quote-left"/>
                                <span>{testimonial.quote}</span>
                                <i className="fa fa-quote-right"/></div>
                            <div className="testimonial-author">{testimonial.author}</div>
                        </div>
                    </div>
                )}
            </section>
        )
    }
}

export default Testimonials;