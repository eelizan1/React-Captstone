import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-regular-svg-icons';
import React from 'react';

const CartItem = ({ item, handleRemoveCartItem }) => {
  return (
    <div className="flex">
      <img className="rounded-md w-28" src={item.image_src} />
      <div className="flex justify-between flex-1 mx-4">
        <div className="">
          <div className="text-xl font-playfair text-emerald-700">
            {item.plant_name}
          </div>
          <div className="flex my-1 text-slate-500">
            <div className="w-14 text-slate-400">color:</div>
            {item.pot_color}
          </div>
          <div className="flex my-1 text-slate-500">
            <div className="w-14 text-slate-400">qty:</div>
            {item.quantity}
          </div>
        </div>
        <div className="flex flex-col justify-between">
          <div className="text-slate-500">
            ${item.price_per_unit * item.quantity}
          </div>
          <button
            className="text-sm text-slate-400 hover:text-red-800"
            onClick={() => handleRemoveCartItem(item.id)}
          >
            <FontAwesomeIcon icon={faTrashCan} className="mr-1 text-base" />
            remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
