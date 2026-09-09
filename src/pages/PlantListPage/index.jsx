import NavBar from 'shared-components/NavBar';
import RedirectToSignInIfSignedOut from 'shared-components/RedirectToSignInIfSignedOut';
import { useState, useEffect } from 'react';
import * as plantService from 'services/plant';

const PlantListPage = () => {
  const [plants, setPlants] = useState([]);

  // plant api call
  const fetchPlants = async () => {
    const response = await plantService.getPlants();
    const data = await response.json();

    setPlants(data);

    console.log(data);
  };
  useEffect(() => {
    fetchPlants(); // invoke plant api call
  }, []);
  return (
    <RedirectToSignInIfSignedOut>
      <NavBar />
    </RedirectToSignInIfSignedOut>
  );
};

export default PlantListPage;
