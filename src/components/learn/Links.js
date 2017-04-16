import React, {Component} from "react";

class Links extends Component {
    render() {
        return (
            <section className="useful-link">
                <div className="useful-link-title"><span>useful links</span></div>
                {this.props.links.map((link) =>
                    <div key={link.id} className="link">
                        <a href={link.href} target="_blank">
                            {link.text}
                        </a>
                    </div>
                )}
            </section>
        )
    }
}

export default Links;