import React from "react";
import Keypad from "./Keypad";
import Question from "./Question";

const randomNumber = (min, max) => {
    return Math.round(Math.random() * max) + min;
};

const generateQuestion = (length, min, max) => {
    const arr = [];
    for (let i = 0; i < length; i++) {
        arr.push(`${randomNumber(min, max)} * ${randomNumber(min, max)}`);
    }
    return arr;
};

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            question: generateQuestion(19, 2, 8),
        };
        this.confirm = this.confirm.bind(this);
    }

    confirm = (number) => {
        this.setState({
            answer: number,
        });
    };

    render() {
        return (
            <React.Fragment>
                <Question
                    questionList={this.state.question}
                    value={this.state.answer}
                />
                <Keypad confirm={this.confirm} />
            </React.Fragment>
        );
    }
}

export default App;
