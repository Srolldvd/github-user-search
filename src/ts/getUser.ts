const API_URL = "https://api.github.com/users/";
const get = (param: string) => document.getElementById(`${param}`);
const searcherFormElem = get("form") as HTMLFormElement;

const userDataElems = {
  login: get("login"),
  github: get("github-link"),
  joined: get("joined"),
  bio: get("bio"),
  avatar: get("avatar"),
  repos: get("repos"),
  followers: get("followers"),
  following: get("following"),
  location: get("location"),
  twitter: get("twitter"),
  link: get("link"),
  company: get("company"),
};

searcherFormElem.addEventListener("submit", (e) => {
  e.preventDefault();
  const user = searcherFormElem.querySelector("[data-searcher]").value;
  getUser(API_URL, user);
});

const getUser = async (url: string, user: string) => {
  const resp = await fetch(url + user);
  const data = await resp.json();

  console.log(data);

  printUserData(data, userDataElems);
};

getUser(API_URL, "srolldvd");

const printUserData = (userData, elements: {}) => {
  elements.login.textContent = userData.login
    ? userData.login
    : "Not Available";
  elements.github.textContent = userData.html_url;
  elements.joined.textContent = userData.created_at;
  elements.bio.textContent = userData.bio ? userData.bio : "Not Available";
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
