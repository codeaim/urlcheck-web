import React, {Component} from "react";

class Tweets extends Component {
    render() {
        return (
            <section className="tweets">
                <div className="footer-title">Latest tweets</div>
                {this.props.tweets.map((tweet) =>
                    <div key={tweet.id} className='tweet'>
                        <div className='tweet-icon'>
                            <i className='icon-et-logo'/>
                        </div>
                        <div className='tweet-details'>
                            <div className='tweet-header'>
                                <div className='tweet-title'>ET Driving School</div>
                                <div className='tweet-author'>@etdrivingschool</div>
                            </div>
                            <div className='tweet-text'>{tweet.text}</div>
                        </div>
                    </div>
                )}
            </section>
        )
    }
}

export default Tweets;