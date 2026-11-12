import apiFetch from './apiFetch';

export const addToCart = ({ plantId, quantity, potColor }) => {
  const body = {
    quantity,
    pot_color: potColor, // follow backend key naming "pot_color"
  };
  return apiFetch('POST', `/cart/plants/${plantId}`, body);
};

export const getCart = () => apiFetch('GET', '/cart');

// itemId is the id coming from the getCart api NOT plantId
export const removeItemFromCart = ({ itemId }) => {
  return apiFetch('DELETE', `/cart/${itemId}`);
};
