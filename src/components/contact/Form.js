import React, {Component} from "react";

class Form extends Component {
    render() {
        return (
            <section className="contact-form">
                <div className="contact-subtitle">Contact Form</div>
                <div className={"contact-message" + (this.props.contact.status.length > 0 ? "" : "hidden")  }>
                    {this.props.contact.status}
                </div>
                <form id="contact" onSubmit={this.props.contactSubmit}>
                    <label htmlFor="title">title</label>
                    <input id="title" type="text" value={this.props.contact.title} onChange={this.props.titleChange} required/>
                    <label htmlFor="email-address">email address</label>
                    <input id="email-address" type="email" value={this.props.contact.email} onChange={this.props.emailChange} required/>
                    <label htmlFor="message">message</label>
                    <textarea id="message" rows="5"  value={this.props.contact.message} onChange={this.props.messageChange} required/>
                    <button type="submit" ><i className="fa fa-send"/> Send</button>
                </form>
            </section>
        )
    }
}

export default Form;
