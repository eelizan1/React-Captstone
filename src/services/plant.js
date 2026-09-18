import apiFetch from './apiFetch';

export const getPlants = () => {
  return apiFetch('GET', '/plants');
};

export const getPlantById = (id) => {
  return apiFetch('GET', `/plants/${id}`);
};
