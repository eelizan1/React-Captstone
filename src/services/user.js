import apiFetch from './apiFetch';

export const createUser = ({ username, password }) => {
  return apiFetch('POST', '/users', {
    username,
    password,
  });
};

export const createSession = ({ username, password }) => {
  return apiFetch('POST', '/users/session', {
    username,
    password,
  });
};
