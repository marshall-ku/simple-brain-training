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
                  html.classList.remove("dark"),
                  localStorage.setItem("dark", "false")
              )
            : this.setState(
                  {
                      dark: true,
                  },
                  html.classList.add("dark"),
                  localStorage.setItem("dark", "true")
              );
    };

    render() {
        const { dark } = this.state;
        return (
            <>
                <button id="darkThemeButton" onClick={this.toggleTheme}>
                    <span
                        role="img"
                        aria-label={dark ? "밝은 모드" : "어두운 모드"}
                    >
                        {dark ? "☀️" : "🌙"}
                    </span>
                </button>
            </>
        );
    }
}

export default DarkTheme;
