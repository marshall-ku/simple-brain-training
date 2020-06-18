import React from "react";
import Keypad from "./Keypad";
import Question from "./Question";

const randomNumber = (min, max) => {
    return Math.round(Math.random() * (max - min)) + min;
};

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            question: undefined,
            difficulty: undefined,
            count: undefined,
        };
        this.confirm = this.confirm.bind(this);
    }

    confirm = (number) => {
        this.setState({
            answer: number,
        });
    };

    setDifficulty = (min, max) => {
        this.setState({
            difficulty: [min, max],
        });
    };

    setCount = (number) => {
        this.setState(
            {
                count: number,
            },
            this.generateQuestions
        );
    };

    generateQuestions() {
        const arr = [];
        const difficulty = this.state.difficulty;
        const min = difficulty[0];
        const max = difficulty[1];
        const count = this.state.count;
        console.log("hi", difficulty, count);

        for (let i = 0; i < count; i++) {
            arr.push(`${randomNumber(min, max)} * ${randomNumber(min, max)}`);
        }

        this.setState({
            question: arr,
        });
    }

    render() {
        if (this.state.difficulty && this.state.count && this.state.question) {
            return (
                <React.Fragment>
                    <Question
                        questionList={this.state.question}
                        questionLength={this.state.count}
                        value={this.state.answer}
                    />
                    <Keypad confirm={this.confirm} />
                </React.Fragment>
            );
        } else {
            if (!this.state.difficulty) {
                return (
                    <ul id="select">
                        <li onClick={() => this.setDifficulty(2, 10)}>
                            쉬움 (2 ~ 10)
                        </li>
                        <li onClick={() => this.setDifficulty(2, 20)}>
                            보통 (2 ~ 20)
                        </li>
                        <li onClick={() => this.setDifficulty(11, 20)}>
                            어려움 (11 ~ 20)
                        </li>
                        <li onClick={() => this.setDifficulty(11, 30)}>
                            아주 어려움 (11 ~ 30)
                        </li>
                    </ul>
                );
            } else {
                return (
                    <ul id="select">
                        <li onClick={() => this.setCount(10)}>10</li>
                        <li onClick={() => this.setCount(20)}>20</li>
                        <li onClick={() => this.setCount(50)}>50</li>
                        <li onClick={() => this.setCount(100)}>100</li>
                    </ul>
                );
            }
        }
    }
}

export default App;
