window.onload = () => {
    const change = (mode) => {
        if(mode === "dark") {
            document.querySelector("html").classList.add("dark");
            document.querySelector("html").style["color-scheme"] = "dark";
            document.querySelector("#themeToggle").setAttribute("data-mode", "dark");
        }
        else {
            document.querySelector("html").classList.remove("dark");
            document.querySelector("html").style["color-scheme"] = "light";
            document.querySelector("#themeToggle").setAttribute("data-mode", "light");
        }
    }
    const detect = () => {
        if(!window.matchMedia) return "light";
        if(window.matchMedia("(prefers-color-scheme: dark)").matches) return "dark";
        else return "light";
    };
    const map = {"light": "dark", "dark": "light"};

    let mode = localStorage.getItem("mode");
    if(!mode) {
        const detected = detect();
        localStorage.setItem("mode", detected);
        mode = detected;
    }
    change(mode);
    
    const toggle = document.querySelector("#themeToggleInp");
    console.log(toggle);
    toggle.addEventListener("change", () => {
        mode = map[mode];
        localStorage.setItem("mode", mode);
        change(mode);
    });
    if (mode === "dark") toggle.toggle();

    const date = new Date();
    if(date.getMonth() + 1 === 4 && date.getDate() === 1) {
        const style = document.createElement("style");
        style.textContent = `
        *:not(body) {
            transition: filter 2s;
        }

        *:not(body):hover {
            animation: egg 1s infinite;
            filter: blur(4px);
        }

        @keyframes egg {
            0%, 100% {
                transform: rotate(0deg);
            }
            25% {
                transform: rotate(-1deg);
            }
            75% {
                transform: rotate(1deg);
            }
        }
        `;
        document.head.appendChild(style);
    }
};