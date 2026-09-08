import { useContext, useEffect } from 'react';
import SessionContext from 'context/SessionContext';
import { useNavigate } from 'react-router-dom';

const RedirectToPlantsIfSignedIn = (props) => {
  const { username } = useContext(SessionContext);
  const navigate = useNavigate();

  // if signed in redirect to plants list page
  // else render the chilren
  useEffect(() => {
    if (username != null) {
      // after signing in, we will nagivate to plants
      navigate('/plants');
    }
  }, [username]); // run effect if username changes (null to not null)

  return props.children;
};

export default RedirectToPlantsIfSignedIn;
