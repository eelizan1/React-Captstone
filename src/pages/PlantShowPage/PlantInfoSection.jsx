import { faCircleCheck, faTruckFast } from '@fortawesome/free-solid-svg-icons';
import PlantHeading from './PlantHeading';
import BenefitBox from './BenefitBox';

const PlantInfoSection = (props) => {
  const { plant } = props;

  return (
    <div className="flex flex-col md:flex-row">
      <div className="flex flex-col flex-1">
        <div className="block md:hidden mb-8">
          <PlantHeading plant={plant} />
        </div>
        <img className="rounded-lg" src={plant.images[0].src} />
        <div className="flex mt-4">
          <BenefitBox
            icon={faCircleCheck}
            title="Guaranteed Healthy"
            description="Guaranteed to arrive healthy or your money back"
          />
          <div className="bg-slate-300 w-px"></div>
          <BenefitBox
            icon={faTruckFast}
            title="Free Shipping"
            description="Get free ground shipping on orders over $50"
          />
        </div>
      </div>
      <div className="flex flex-col flex-1 md:px-8">
        <div className="hidden md:block">
          <PlantHeading plant={plant} />
        </div>

        <p className="text-slate-600 leading-relaxed mt-4">
          {plant.description}
        </p>
      </div>
    </div>
  );
};

export default PlantInfoSection;
