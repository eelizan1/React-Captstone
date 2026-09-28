import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBrush,
  faMinus,
  faPlus,
  faCartPlus,
  faSpinner,
} from '@fortawesome/free-solid-svg-icons';
import { POT_COLORS } from 'shared-components/util';
import { useState } from 'react';
import * as cartService from 'services/cart';

const PlantPurchaseOptions = ({ plant, imageIdx, setImageIdx }) => {
  const [quantity, setQuantity] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const handleSetImageIdx = (idx) => {
    setImageIdx(idx);
  };
  const plantColors = plant.images.map((image, idx) => {
    return (
      <div
        key={image.pot_color}
        className="mx-2 flex flex-col items-center"
        onMouseEnter={() => handleSetImageIdx(idx)}
      >
        <div
          className={`rounded-full w-10 h-10 ${POT_COLORS[image.pot_color]} ${idx === imageIdx && 'outline outline-offset-2 outline-slate-500'}`}
        ></div>
        <div
          className={`${imageIdx === idx ? 'text-slate-700' : 'text-slate-500'} 'mt-1 text-slate-500`}
        >
          {image.pot_color}
        </div>
      </div>
    );
  });

  const handleMinusButton = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleAddToCart = async () => {
    setIsLoading(true);
    const body = {
      plantId: plant.id,
      quantity,
      potColor: plant.images[imageIdx].pot_color,
    };

    const response = await cartService.addToCart(body);
    const data = await response.json();

    setIsLoading(false);

    console.log(data);
  };

  return (
    <>
      <div className="my-10">
        <div className="flex text-emerald-700">
          <FontAwesomeIcon icon={faBrush} className="mr-2 text-2xl" />
          <div className="text-lg">Pot Colors</div>
        </div>
        <div className="flex my-4">{plantColors}</div>
      </div>
      <div className="flex">
        <div className="rounded-full flex items-center text-xl rounde-full text-slate-500 border-2 border-slate-300 px-3 py-4">
          <button onClick={handleMinusButton}>
            <FontAwesomeIcon icon={faMinus} />
          </button>
          <div className="mx-4 text-2xl text-emerald-700 ">{quantity}</div>
          <button onClick={() => setQuantity(quantity + 1)}>
            <FontAwesomeIcon icon={faPlus} />
          </button>
        </div>

        <button
          className="rounded-full bg-emerald-700 text-white text-xl flex flex-1 justify-center items-center ml-2 hover:bg-emerald-800"
          onClick={handleAddToCart}
        >
          {isLoading ? (
            <FontAwesomeIcon
              icon={faSpinner}
              className="text-2xl mr-2 animate-spin"
            />
          ) : (
            <FontAwesomeIcon icon={faCartPlus} className="text-2xl mr-2" />
          )}
          add to cart
        </button>
      </div>
    </>
  );
};

export default PlantPurchaseOptions;
