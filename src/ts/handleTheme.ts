import { get } from "./getUser";
const themeSwitcherElem = get("theme-switcher") as HTMLDivElement;

const themeInit = () => {
  const root = document.firstElementChild as HTMLHtmlElement;
  let getTheme = localStorage.getItem("theme");

  if (!getTheme) {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      root.setAttribute("data-theme", "dark");
      getTheme = "dark";
    } else return;
  }

  if (getTheme === "dark") {
    root.setAttribute("data-theme", "dark");
    themeSwitcherElem.innerHTML = `
    <span>DARK</span>
    <i class="fa-solid fa-moon"></i>
    `;
  } else {
    root.setAttribute("data-theme", "light");
    themeSwitcherElem.innerHTML = `
    <span>LIGHT</span>
    <i class="fa-solid fa-sun"></i>
`;
  }
};

themeInit();

const setTheme = () => {
  const root = document.firstElementChild as HTMLHtmlElement;
  const getTheme = root.getAttribute("data-theme");

  if (!getTheme) {
    root.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark");
    themeSwitcherElem.innerHTML = `
    <span>DARK</span>
    <i class="fa-solid fa-moon"></i>
    `;
    return;
  }
  if (getTheme === "dark") {
    root.setAttribute("data-theme", "light");
    localStorage.setItem("theme", "light");
    themeSwitcherElem.innerHTML = `
        <span>LIGHT</span>
        <i class="fa-solid fa-sun"></i>
    `;
  } else {
    root.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark");
    themeSwitcherElem.innerHTML = `
    <span>DARK</span>
    <i class="fa-solid fa-moon"></i>
    `;
  }
};

themeSwitcherElem?.addEventListener("click", setTheme);

export { themeInit };
