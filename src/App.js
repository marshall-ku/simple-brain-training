import React from "react";
import Keypad from "./Keypad";
import Question from "./Question";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            difficulty: undefined,
            difficultyString: "",
            count: undefined,
            done: false,
        };
        this.confirm = this.confirm.bind(this);
        this.done = this.done.bind(this);
    }

    confirm = (number) => {
        this.setState({
            answer: number,
        });
    };

    setDifficulty = (min, max, string) => {
        this.setState({
            difficulty: [min, max],
            difficultyString: string,
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

    done = (time) => {
        this.setState({
            done: true,
            doneTime: time,
        });
    };

    restart = () => {
        this.setState({
            difficulty: undefined,
            difficultyString: "",
            count: undefined,
            done: false,
        });
    };

    render() {
        const {
            done,
            doneTime,
            difficulty,
            difficultyString,
            count,
            answer,
        } = this.state;
        if (done) {
            return (
                <div id="result">
                    <h1>끝났습니다!</h1>
                    <div className="result">
                        모든 문제를 푸는데 {doneTime}초가 걸리셨네요.
                    </div>
                    <div className="small">
                        <span>
                            난이도 : <span>{difficultyString}</span>
                        </span>
                        <span>
                            문제 : <span>{count} 개</span>
                        </span>
                        <span>
                            문제당 :{" "}
                            <span>{(doneTime / count).toFixed(2)} 초</span>
                        </span>
                    </div>
                    <div>
                        <button className="button" onClick={this.restart}>
                            다시 시작
                        </button>
                    </div>
                </div>
            );
        } else if (difficulty && count) {
            return (
                <React.Fragment>
                    <Question
                        questionDifficulty={difficulty}
                        questionLength={count}
                        done={this.done}
                        value={answer}
                    />
                    <Keypad confirm={this.confirm} />
                </React.Fragment>
            );
        } else {
            if (!difficulty) {
                return (
                    <ul id="select">
                        <li onClick={() => this.setDifficulty(2, 10, "쉬움")}>
                            쉬움 (2 ~ 10)
                        </li>
                        <li onClick={() => this.setDifficulty(2, 15, "보통")}>
                            보통 (2 ~ 15)
                        </li>
                        <li onClick={() => this.setDifficulty(2, 20, "어려움")}>
                            어려움 (2 ~ 20)
                        </li>
                        <li
                            onClick={() =>
                                this.setDifficulty(11, 20, "아주 어려움")
                            }
                        >
                            아주 어려움 (11 ~ 20)
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
