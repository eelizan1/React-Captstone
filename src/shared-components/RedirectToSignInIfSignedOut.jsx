import { useContext, useEffect } from 'react';
import SessionContext from 'context/SessionContext';
import { useNavigate } from 'react-router-dom';

const RedirectToSignInIfSignedOut = (props) => {
  const { username } = useContext(SessionContext);
  const navigate = useNavigate();

  // if signed out redirect to sign in page
  // else render the children
  useEffect(() => {
    if (username == null) {
      // after signing in, we will nagivate to sign in
      navigate('/');
    }
  }, [username]); // run effect if username changes (null to not null)

  return props.children;
};

export default RedirectToSignInIfSignedOut;
