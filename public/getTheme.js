const darkTheme =
    localStorage.getItem("dark") === "true" ||
    window.matchMedia("(prefers-color-scheme: dark)").matches ||
    false;
