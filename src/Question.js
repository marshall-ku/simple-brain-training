import React from "react";

class Question extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            index: 0,
        };
    }

    componentDidUpdate(nextProps) {
        const { value } = this.props;
        if (nextProps.value !== value) {
            if (value) {
                const question = this.props.questionList[this.state.index];
                const split = question.split(" * ");
                const result = split[0] * split[1];

                if (result === +value) {
                    if (this.state.index === this.props.questionLength - 1) {
                        this.setState({
                            done: true,
                        });
                        alert("done!");
                    } else {
                        this.setState({
                            index: this.state.index + 1,
                        });
                    }
                }
            }
        }
    }

    render() {
        return (
            <div id="question">
                {this.state.done
                    ? "done"
                    : `${this.props.questionList[this.state.index]} = ?`}
            </div>
        );
    }
}

export default Question;
