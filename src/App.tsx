import React from "react";
import Keypad from "./Keypad";
import Question from "./Question";

class App extends React.Component<AppProps, AppState> {
    constructor(props: AppProps) {
        super(props);
        this.state = {
            difficulty: [0, 0],
            difficultyString: "",
            count: 0,
            done: false,
            wrong: 0,
        };
        this.confirm = this.confirm.bind(this);
        this.done = this.done.bind(this);
        this.wrong = this.wrong.bind(this);
    }

    confirm = (number: number) => {
        this.setState({
            answer: number,
        });
    };

    setDifficulty = (min: number, max: number, string: string) => {
        this.setState({
            difficulty: [min, max],
            difficultyString: string,
        });
    };

    setCount = (number: number) => {
        this.setState({
            count: number,
        });
    };

    wrong() {
        this.setState({
            wrong: this.state.wrong + 1,
        });
    }

    done = (time: number) => {
        this.setState({
            done: true,
            doneTime: time,
        });
    };

    restart = () => {
        this.setState({
            difficulty: [0, 0],
            difficultyString: "",
            count: 0,
            done: false,
            wrong: 0,
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
            wrong,
        } = this.state;

        if (done && doneTime) {
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
                            오답 : <span>{wrong} 회</span>
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
                <>
                    <Question
                        questionDifficulty={difficulty}
                        questionLength={count}
                        wrong={this.wrong}
                        done={this.done}
                        value={answer}
                    />
                    <Keypad confirm={this.confirm} />
                </>
            );
        } else {
            if (!difficulty[0]) {
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
