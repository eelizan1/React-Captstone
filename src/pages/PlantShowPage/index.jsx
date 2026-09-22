import NavBar from 'shared-components/NavBar';
import { useState, useEffect } from 'react';
import * as plantService from 'services/plant';
import { useParams } from 'react-router-dom';
import LoadingSpinner from 'shared-components/LoadingSpinner';
import PlantInfoSection from './PlantInfoSection';

const PlantShowPage = () => {
  const { plantId } = useParams();
  const [plant, setPlant] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const fetchPlant = async () => {
    setIsLoading(true);
    const response = await plantService.getPlantById(plantId);
    const data = await response.json();

    setPlant(data);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchPlant();
    // plantId must stay a dependency: React Router reuses this same component
    // instance across /plants/:plantId navigations (no remount), so without it
    // clicking from one plant to another would keep showing the first plant.
  }, [plantId]);

  return (
    <>
      <NavBar />
      <div className="flex justify-center bg-green-50 min-h-screen font-lato">
        <div className="w-full max-w-5xl px-8 py-24">
          {isLoading ? <LoadingSpinner /> : <PlantInfoSection plant={plant} />}
        </div>
      </div>
    </>
  );
};

export default PlantShowPage;
