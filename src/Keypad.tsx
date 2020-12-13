import React from "react";
const keys = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "del", "0", "ok"];

class Input extends React.Component<InputProps, InputState> {
    constructor(props: InputProps) {
        super(props);
        this.state = {
            input: "",
            touchable: "ontouchstart" in window,
        };
        this.submit = this.submit.bind(this);
    }

    submit = () => {
        this.props.confirm(+this.state.input);
        this.setState({
            input: "",
        });
    };

    handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        event.key === "Enter" && this.submit();
    };

    handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (this.state.input.length >= 5) {
            this.setState({
                input: event.target.value[5],
            });
        } else {
            this.setState({
                input: event.target.value,
            });
        }
    };

    delete() {
        this.setState({
            input: this.state.input.slice(0, -1),
        });
    }

    componentDidUpdate(prevProps: InputProps) {
        const { value } = this.props;
        if (prevProps.value !== value) {
            const trueValue = value.replace(/-(.*)/g, "");
            if (trueValue) {
                if (trueValue === "del") {
                    this.delete();
                } else if (trueValue === "ok") {
                    this.submit();
                } else {
                    if (this.state.input.length >= 5) {
                        this.setState({
                            input: trueValue,
                        });
                    } else {
                        this.setState({
                            input: this.state.input + trueValue,
                        });
                    }
                }
            }
        }
    }

    render() {
        const { input } = this.state;
        if (this.state.touchable) {
            return (
                <input
                    id="input"
                    className="center"
                    value={input}
                    readOnly
                    type="number"
                ></input>
            );
        } else {
            return (
                <input
                    id="input"
                    className="center"
                    value={input}
                    autoFocus
                    onKeyDown={this.handleKeyDown}
                    onChange={this.handleChange}
                    type="number"
                ></input>
            );
        }
    }
}

class Keys extends React.Component<KeysProps, KeysState> {
    constructor(props: KeysProps) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick = (item: string) => {
        this.props.click(item);
    };

    render() {
        return (
            <div id="keys" className="flex center">
                {keys.map((item) => {
                    return (
                        <button
                            key={item}
                            onClick={() => {
                                this.handleClick(item);
                            }}
                        >
                            <span>{item}</span>
                        </button>
                    );
                })}
            </div>
        );
    }
}

export default class Keypad extends React.Component<KeypadProps, KeypadState> {
    constructor(props: KeypadProps) {
        super(props);
        this.state = {
            input: "",
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick = (item: string) => {
        this.setState({
            input: item,
        });
    };

    render() {
        const { input } = this.state;
        return (
            <>
                <Input
                    value={`${input}${
                        input === "ok" ? "" : `- ${performance.now()}`
                    }`}
                    confirm={this.props.confirm}
                />
                <Keys click={this.handleClick} />
            </>
        );
    }
}
