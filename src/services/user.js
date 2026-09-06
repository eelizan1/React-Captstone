import apiFetch from './apiFetch';

export const createUser = ({ username, password }) => {
  console.log(username, password);
  return apiFetch('POST', '/users', {
    username,
    password,
  });
};
