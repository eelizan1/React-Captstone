import apiFetch from './apiFetch';

export const addToCart = ({ plantId, quantity, potColor }) => {
  const body = {
    quantity,
    pot_color: potColor, // follow backend key naming "pot_color"
  };
  return apiFetch('POST', `/cart/plants/${plantId}`, body);
};
