import React from "react";

class DarkTheme extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dark: window.darkTheme,
        };
    }

    toggleTheme = () => {
        const { dark } = this.state;
        const html = document.documentElement;

        dark
            ? this.setState(
                  {
                      dark: false,
                  },
                  html.classList.remove("dark")
              )
            : this.setState(
                  {
                      dark: true,
                  },
                  html.classList.add("dark")
              );
    };

    render() {
        const { dark } = this.state;
        return (
            <>
                <button className="darkThemeButton" onClick={this.toggleTheme}>
                    <span role="img" aria-label="Light Mode">
                        {dark ? "🌙" : "☀️"}
                    </span>
                </button>
            </>
        );
    }
}

export default DarkTheme;
