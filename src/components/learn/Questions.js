import React, {Component} from "react";

class Questions extends Component {
    render() {
        return (
            <section className="questions">
                <div className="questions-title"><span>show & tell</span></div>
                {this.props.questions.map((question) =>
                    <div key={question.id} className="question">
                        <div className="question-title">{"Question " + question.id}</div>
                        <div className="question-text">{question.text}</div>
                        <div className="question-action" id={question.id} onClick={this.props.answerClick}>
                            Answer
                            <div className={"answer " + question.status}>{question.answer}</div>
                        </div>
                    </div>
                )}
            </section>
        )
    }
}

export default Questions;