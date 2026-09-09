import * as userService from 'services/user';

const { VITE_API_BASE_URL, VITE_API_KEY } = import.meta.env;

const apiFetch = (method, path, body = null) => {
  const options = {
    method,
    credentials: 'include',
    headers: {
      Authorization: 'Bearer ' + VITE_API_KEY,
      'Content-Type': 'application/json',
    },
  };

  // assign header token if present
  const token = userService.getSessionTokenStorage();
  if (token) {
    options.headers['Capstone-Session'] = token; // create new key and assign value
  }

  if (body) {
    options.body = JSON.stringify(body);
  }

  return fetch(VITE_API_BASE_URL + path, options);
};

export default apiFetch;
