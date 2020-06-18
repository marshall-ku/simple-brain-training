import React from "react";
import Keypad from "./Keypad";
import Question from "./Question";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
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

    render() {
        if (this.state.difficulty && this.state.count) {
            return (
                <React.Fragment>
                    <Question
                        questionDifficulty={this.state.difficulty}
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
                        <li onClick={() => this.setDifficulty(11, 30)}>
                            어려움 (11 ~ 30)
                        </li>
                        <li onClick={() => this.setDifficulty(21, 30)}>
                            아주 어려움 (21 ~ 40)
                        </li>
                    </ul>
                );
            } else {
                return (
                    <ul id="select">
                        <li onClick={() => this.setCount(10)}>10 문제</li>
                        <li onClick={() => this.setCount(20)}>20 문제</li>
                        <li onClick={() => this.setCount(50)}>50 문제</li>
                        <li onClick={() => this.setCount(100)}>100 문제</li>
                    </ul>
                );
            }
        }
    }
}

export default App;
