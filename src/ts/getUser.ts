import { printUserData, userDataElems } from "./printUser";
const get = (param: string) => document.getElementById(`${param}`);

export interface userData {
  login: string;
  html_url: string;
  created_at: string;
  bio: string;
  avatar_url: string;
  public_repos: string;
  followers: string;
  following: string;
  location: string;
  twitter_username: string;
  blog: string;
  company: string;
}

const getUser = async (url: string, user: string) => {
  try {
    const resp = await fetch(url + user);
    const data: userData = await resp.json();
    console.log(data);
    printUserData(data, userDataElems);
  } catch (err) {
    console.warn(err);
  }
};

export { get, getUser };
