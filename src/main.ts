import "./main.scss";
import "./ts/handleLabel";
import { getUser } from "./ts/getUser";
import { GITHUB_USER_API, DEFAULT_USER } from "./ts/constant";
import { themeInit } from "./ts/handleTheme";

const Init = () => {
  getUser(GITHUB_USER_API, DEFAULT_USER);
  themeInit();
};

Init();
