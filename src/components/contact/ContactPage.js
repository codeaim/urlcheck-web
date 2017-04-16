import React, {Component} from "react";
import axios from "axios";
import Form from "./Form";
import Detail from "./Detail";
import GetInTouch from "./GetInTouch";

class ContactPage extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            contact: {
                status: "",
                title: "",
                email: "",
                message: ""
            }
        };

        this.titleChange = this.titleChange.bind(this);
        this.emailChange = this.emailChange.bind(this);
        this.messageChange = this.messageChange.bind(this);
        this.contactSubmit = this.contactSubmit.bind(this);
    }

    titleChange(event) {
        this.setState(Object.assign({}, this.state, {contact: {...this.state.contact, title: event.target.value}}));
    }

    emailChange(event) {
        this.setState(Object.assign({}, this.state, {contact: {...this.state.contact, email: event.target.value}}));
    }

    messageChange(event) {
        this.setState(Object.assign({}, this.state, {contact: {...this.state.contact, message: event.target.value}}));
    }

    contactSubmit(event) {
        event.preventDefault();
        axios.post('https://ehgb201ss5.execute-api.eu-west-1.amazonaws.com/prod/contact', this.state.contact)
            .then((response) => {
                this.setState(Object.assign({}, this.state, {
                    contact: {
                        ...this.state.contact,
                        email: "",
                        message: "",
                        title: "",
                        status: "Thank you for getting in touch. We will get back to you shortly."
                    }
                }))
            })
            .catch((error) =>
                this.setState(Object.assign({}, this.state, {
                    contact: {
                        ...this.state.contact,
                        status: error.toString()
                    }
                }))
            )
    }

    render() {
        return (
            <main className="site-content">
                <div className="contact-us">
                    <div className="contact-title">
                        <span>contact us</span>
                    </div>
                    <div className="contact-section">
                        <div className="contact-left">
                            <Form contact={this.state.contact}
                                  titleChange={this.titleChange}
                                  emailChange={this.emailChange}
                                  messageChange={this.messageChange}
                                  contactSubmit={this.contactSubmit}/>
                        </div>
                        <div className="contact-right">
                            <Detail/>
                            <GetInTouch/>
                        </div>
                    </div>
                </div>
            </main>
        )
    }
}

export default ContactPage;