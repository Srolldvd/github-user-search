import { get, getUser } from "./getUser";
import type { userData } from "./getUser";
import { GITHUB_USER_API } from "./constant";

const searcherFormElem = get("form") as HTMLFormElement;
const userSearcherElem = searcherFormElem.querySelector(
  "[data-searcher]",
) as HTMLInputElement;

export interface userDataElements {
  login: HTMLHeadingElement;
  github: HTMLAnchorElement;
  joined: HTMLParagraphElement;
  bio: HTMLParagraphElement;
  avatar: HTMLImageElement;
  repos: HTMLElement;
  followers: HTMLElement;
  following: HTMLElement;
  location: HTMLSpanElement;
  twitter: HTMLSpanElement;
  link: HTMLSpanElement;
  company: HTMLSpanElement;
}

const userDataElems = {
  login: get("login") as HTMLHeadingElement,
  github: get("github-link") as HTMLAnchorElement,
  joined: get("joined") as HTMLParagraphElement,
  bio: get("bio") as HTMLParagraphElement,
  avatar: get("avatar") as HTMLImageElement,
  repos: get("repos") as HTMLElement,
  followers: get("followers") as HTMLElement,
  following: get("following") as HTMLElement,
  location: get("location") as HTMLSpanElement,
  twitter: get("twitter") as HTMLSpanElement,
  link: get("link") as HTMLSpanElement,
  company: get("company") as HTMLSpanElement,
};

const dateFormater = (date: string) => {
  const joinedAt = date.split("T")[0];
  const parsedJoinedAt = joinedAt.split("-");
  const year = parseInt(parsedJoinedAt[0]);
  const month = parseInt(parsedJoinedAt[1]);
  const day = parseInt(parsedJoinedAt[2]);
  const d = new Date(year, month, day);
  d.setMonth(month - 1);

  const monthTxt = d.toLocaleString("en", { month: "short" });
  return `Joined ${day} ${monthTxt} ${year}`;
};

const printUserData = (userData: userData, elements: userDataElements) => {
  elements.login.textContent = userData.login
    ? userData.login
    : "Not Available";
  elements.github.textContent = `@${userData.login}`;
  elements.github.href = userData.html_url;
  elements.joined.textContent = dateFormater(userData.created_at);
  elements.bio.textContent = userData.bio
    ? userData.bio
    : "This profile has no bio";
  elements.avatar.src = userData.avatar_url;
  elements.repos.textContent = userData.public_repos;
  elements.followers.textContent = userData.followers;
  elements.following.textContent = userData.following;
  elements.location.textContent = userData.location
    ? userData.location
    : "Not Available";
  elements.twitter.textContent = userData.twitter_username
    ? userData.twitter_username
    : "Not Available";
  elements.link.textContent = userData.blog ? userData.blog : "Not Available";
  elements.company.textContent = userData.company
    ? userData.company
    : "Not Available";
};

searcherFormElem.addEventListener("submit", (e) => {
  e.preventDefault();
  const user = userSearcherElem.value.replace(/\s/g, "");
  if (!user) return;
  getUser(GITHUB_USER_API, user);
});

export { printUserData, userDataElems, userSearcherElem };
