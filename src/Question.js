import React from "react";

class Question extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            index: 0,
            min: this.props.questionDifficulty[0],
            max: this.props.questionDifficulty[1],
            first: this.randomNumber(),
            second: this.randomNumber(),
            start: new Date().getTime(),
        };
    }

    randomNumber() {
        return (
            Math.round(
                Math.random() *
                    (this.props.questionDifficulty[0] -
                        this.props.questionDifficulty[1])
            ) + this.props.questionDifficulty[1]
        );
    }

    generateQuestion = (lastResult) => {
        let tmp1, tmp2;
        const generateNumbers = () => {
            tmp1 = this.randomNumber();
            tmp2 = this.randomNumber();

            if (tmp1 * tmp2 === +lastResult) {
                generateNumbers();
            } else {
                this.setState({
                    first: tmp1,
                    second: tmp2,
                });
            }
        };
        generateNumbers();
    };

    componentDidUpdate(prevProps) {
        const { value } = this.props;
        if (prevProps.value !== value) {
            if (value) {
                if (this.state.first * this.state.second === +value) {
                    if (this.state.index === this.props.questionLength - 1) {
                        this.props.done(
                            (new Date().getTime() - this.state.start) / 1000
                        );
                    } else {
                        this.setState({
                            index: this.state.index + 1,
                        });
                        this.generateQuestion(value);
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
                    : `${this.state.first} * ${this.state.second} = ?`}
            </div>
        );
    }
}

export default Question;
