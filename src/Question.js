import React from "react";

class Question extends React.Component {
    constructor(props) {
        super(props);
        console.log(this.props.questionList);
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
                console.log(value, result);
                if (result === +value) {
                    this.setState({
                        index: this.state.index + 1,
                    });
                }
            }
        }
    }

    render() {
        return <div>{this.props.questionList[this.state.index]}</div>;
    }
}

export default Question;
