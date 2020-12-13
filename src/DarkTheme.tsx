import React from "react";

declare global {
    interface Window {
        darkTheme: boolean;
    }
}

export default class DarkTheme extends React.Component<
    DarkThemeProps,
    DarkThemeState
> {
    constructor(props: DarkThemeProps) {
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
                  () => {
                      html.classList.remove("dark");
                      localStorage.setItem("dark", "false");
                  }
              )
            : this.setState(
                  {
                      dark: true,
                  },
                  () => {
                      html.classList.add("dark");
                      localStorage.setItem("dark", "true");
                  }
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
