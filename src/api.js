const URL = "https://jsonplaceholder.typicode.com";
export const POSTS = "posts";
export const COMMENTS = "comments";
export const AMOUNT = 10;

export async function requestApi(endpoint) {
  return await fetch(`${URL}/${endpoint}`).then((res) => res.ok && res.json());
}
