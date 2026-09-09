import apiFetch from './apiFetch';

export const getPlants = () => {
  return apiFetch('GET', '/plants');
};
