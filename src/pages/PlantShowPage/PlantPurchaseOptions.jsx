import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBrush } from '@fortawesome/free-solid-svg-icons';
import { POT_COLORS } from 'shared-components/util';
import { useState } from 'react';

const PlantPurchaseOptions = ({ plant, imageIdx, setImageIdx }) => {
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

  return (
    <div className="my-10">
      <div className="flex text-emerald-700">
        <FontAwesomeIcon icon={faBrush} className="mr-2 text-2xl" />
        <div className="text-lg">Pot Colors</div>
      </div>
      <div className="flex my-4">{plantColors}</div>
    </div>
  );
};

export default PlantPurchaseOptions;
