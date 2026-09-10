const POT_COLORS = {
  stone: 'bg-stone-200',
  slate: 'bg-slate-300',
  sky: 'bg-sky-700',
  black: 'bg-gray-600',
  white: 'bg-gray-50',
  amber: 'bg-amber-600',
};

const PlantItem = ({ plant }) => {
  const potColors = plant.images.map((image, idx) => {
    return (
      <div
        key={idx}
        className={`rounded-full w-5 h-5 ${POT_COLORS[image.pot_color]} mx-[3px] border border-slate-300`}
      ></div>
    );
  });

  return (
    <div className="m-5">
      <img
        className="w-[280px] h-[320px] rounded-md"
        src={plant.images[0].src}
      />
      <div className="flex justify-between my-3">
        <div className="text-xl font-playfair text-emerald-700">
          {plant.name}
        </div>
        <div className="text-lg text-emerald-600">${plant.price}</div>
      </div>
      <div className="flex justify-between">
        <div className="text-sm text-slate-500">slate</div>
        <div className="flex">{potColors}</div>
      </div>
    </div>
  );
};

export default PlantItem;
