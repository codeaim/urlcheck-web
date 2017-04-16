import React from "react";

export default () => (
    <section className="contact-details">
        <div className="contact-subtitle">Contact Details</div>
        <div>
            <i className="fa fa-map-marker"/>
            Address: Stewartstown Road, Belfast
        </div>
        <div>
            <i className="fa fa-phone"/>
            Phone:
            <a href="callto://07915611827">07915611827</a>
        </div>
        <div>
            <i className="fa fa-skype"/>
            Skype:
            <span>
                <a href="callto://07915611827">ETDrivingSchool</a>
            </span>
        </div>
        <div>
            <i className="fa fa-envelope"/>
            Email:
            <span>
                <a href="mailto:etdrivingschool@gmail.com">etdrivingschool@gmail.com</a>
            </span>
        </div>
    </section>
)