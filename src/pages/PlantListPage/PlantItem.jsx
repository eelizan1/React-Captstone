import { useState, useEffect } from 'react';

const POT_COLORS = {
  stone: 'bg-stone-200',
  slate: 'bg-slate-300',
  sky: 'bg-sky-700',
  black: 'bg-gray-600',
  white: 'bg-gray-50',
  amber: 'bg-amber-600',
};

const getRandomIdx = (array) => {
  return Math.floor(Math.random() * array.length);
};

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
      <img
        className="w-[280px] h-[320px] rounded-md"
        src={plant.images[imageIdx].src}
      />
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
