import React, {Component} from "react";
import car from "../../img/car.jpg";
import price from "../../img/price.jpg";

class Highlights extends Component {
    render() {
        return (
            <section className="highlights">
                <div className={"highlight car " + this.props.highlights.car}>
                    <img src={car} width="900" height="506" alt="car"/>
                    <i className="icon-et-logo highlight-icon"/>
                    <span className="car-image-title">fully qualified, doe approved driving instruction</span>
                    <span className="car-image-subtitle-one">high quality driving lessons</span>
                    <span className="car-image-subtitle-two">affordable professional 1 on 1 tuition</span>
                </div>
                <div className={"highlight price " + this.props.highlights.price}>
                    <img src={price} width="900" height="506" alt="price"/>
                    <span className="price-image-title">professional belfast based driving school</span>
                    <span className="price-image-subtitle-one">unrivalled value for money</span>
                    <span className="price-image-subtitle-two">great deals including intensive courses</span>
                    <span className="price-image-intro">from</span>
                    <span className="price-image-price">£18</span>
                    <span className="price-image-lesson">per lesson</span>
                </div>
            </section>
        )
    }
}

export default Highlights;