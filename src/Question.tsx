import React from "react";

export default class Question extends React.Component<
    QuestionProps,
    QuestionState
> {
    constructor(props: QuestionProps) {
        super(props);
        const { questionDifficulty } = this.props;
        this.state = {
            index: 0,
            min: questionDifficulty[0],
            max: questionDifficulty[1],
            first: this.randomNumber(),
            second: this.randomNumber(),
            start: new Date().getTime(),
        };
    }

    randomNumber(): number {
        const { questionDifficulty } = this.props;
        return (
            Math.round(
                Math.random() * (questionDifficulty[0] - questionDifficulty[1])
            ) + questionDifficulty[1]
        );
    }

    generateQuestion = (lastResult: number) => {
        let tmp1, tmp2;
        const generateNumbers = () => {
            tmp1 = this.randomNumber();
            tmp2 = this.randomNumber();

            if (tmp1 * tmp2 === lastResult) {
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

    componentDidUpdate(prevProps: QuestionProps) {
        const { value } = this.props;
        const { index } = this.state;
        if (prevProps.value !== value) {
            if (value) {
                if (this.state.first * this.state.second === value) {
                    if (index === this.props.questionLength - 1) {
                        this.props.done(
                            (new Date().getTime() - this.state.start) / 1000
                        );
                    } else {
                        this.setState({
                            index: index + 1,
                        });
                        this.generateQuestion(value);
                    }
                } else {
                    this.props.wrong();
                }
            }
        }
    }

    render() {
        return (
            <div id="question">
                {`${this.state.first} * ${this.state.second} = ?`}
            </div>
        );
    }
}
