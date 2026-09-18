import NavBar from 'shared-components/NavBar';
import RedirectToSignInIfSignedOut from 'shared-components/RedirectToSignInIfSignedOut';
import { useState, useEffect } from 'react';
import * as plantService from 'services/plant';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import PlantItem from './PlantItem';
import LoadingSpinner from 'shared-components/LoadingSpinner';

const PlantListPage = () => {
  const [plants, setPlants] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // plant api call
  const fetchPlants = async () => {
    setIsLoading(true);
    const response = await plantService.getPlants();
    const data = await response.json();

    setPlants(data);
    setIsLoading(false);
  };
  useEffect(() => {
    fetchPlants(); // invoke plant api call
  }, []);

  const plantItemsList = plants.map((plant) => {
    return <PlantItem key={plant.id} plant={plant} />;
  });

  return (
    <RedirectToSignInIfSignedOut>
      <NavBar />
      <div className="min-h-screen bg-green-50">
        {isLoading ? (
          <LoadingSpinner />
        ) : (
          <div className="flex justify-center py-24">
            <div className="w-full max-w-5xl">
              <div className="text-4xl font-playfair text-emerald-800 mb-6 px-12">
                Plants in Stock
              </div>
              <div className="flex flex-wrap justify-center">
                {plantItemsList}
              </div>
            </div>
          </div>
        )}
      </div>
    </RedirectToSignInIfSignedOut>
  );
};

export default PlantListPage;
