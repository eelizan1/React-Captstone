import NavBar from 'shared-components/NavBar';
import RedirectToSignInIfSignedOut from 'shared-components/RedirectToSignInIfSignedOut';
import { useState, useEffect } from 'react';
import * as plantService from 'services/plant';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import PlantItem from './PlantItem';

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

  console.log(plants);

  const plantItemsList = plants.map((plant, idx) => {
    return <PlantItem key={idx} plant={plant} />;
  });

  return (
    <RedirectToSignInIfSignedOut>
      <NavBar />
      <div className="min-h-screen bg-green-50">
        {isLoading ? (
          <div className="flex justify-center pt-40">
            <FontAwesomeIcon
              icon={faSpinner}
              className="text-3xl text-emerald-600 animate-spin"
            />
          </div>
        ) : (
          <div className="flex justify-center py-24">
            <div className="w-full max-w-5xl">
              <div className="text-4xl font-playfair text-emerald-800 mb-6">
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
