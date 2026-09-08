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

const CAPSTONE_SESSION_STORAGE_KEY = 'capstone_session_token';

export const setSessionTokenStorage = (capstoneSessionToken) => {
  localStorage.setItem(CAPSTONE_SESSION_STORAGE_KEY, capstoneSessionToken);
};

export const getSessionTokenStorage = () => {
  return localStorage.getItem(CAPSTONE_SESSION_STORAGE_KEY);
};

export const removeSessionTokenStorage = () => {
  localStorage.removeItem(CAPSTONE_SESSION_STORAGE_KEY);
};
