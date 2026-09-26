import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { POT_COLORS, getRandomIdx } from 'shared-components/util';

const PlantItem = ({ plant }) => {
  // index will be used for plant image and pot color selected
  // idx corresponds to plants.images[idx]
  const [imageIdx, setImageIdx] = useState(getRandomIdx(plant.images));

  const handleSetImageIdx = (idx) => {
    setImageIdx(idx);
  };

  const potColors = plant.images.map((image, idx) => {
    return (
      <div
        onMouseEnter={() => handleSetImageIdx(idx)}
        key={idx}
        className={`rounded-full w-5 h-5 ${POT_COLORS[image.pot_color]} mx-[3px] border border-slate-300 ${imageIdx == idx && 'outline outline-slate-400 outline-offset-2'}`}
      ></div>
    );
  });

  return (
    <div className="m-5">
      <Link to={`/plants/${plant?.id}`}>
        <img
          className="w-[280px] h-[320px] rounded-md"
          src={plant.images[imageIdx].src}
        />
      </Link>
      <div className="flex justify-between my-3">
        <div className="text-xl font-playfair text-emerald-700">
          {plant.name}
        </div>
        <div className="text-lg text-emerald-600">${plant.price}</div>
      </div>
      <div className="flex justify-between">
        <div className="text-sm text-slate-500">
          {plant.images[imageIdx].pot_color}
        </div>
        <div className="flex">{potColors}</div>
      </div>
    </div>
  );
};

export default PlantItem;
