export const loadUser = (currentPage) => {
  return fetch(
    `https://randomuser.me/api/?results=2&seed=abc&page=${currentPage}`
  ).then((response) => response.json());
};

export const getData = () => {
  return fetch("https://jsonplaceholder.typicode.com/posts").then((res) =>
    res.json()
  );
};
