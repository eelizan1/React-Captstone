import SessionContext from 'context/SessionContext';
import { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

const NavBar = () => {
  const { username } = useContext(SessionContext);
  return (
    <nav className="bg-emerald-800 flex justify-center font-lato">
      <div className="flex items-center justify-between w-full max-w-5xl px-8 py-2">
        <div className="text-2xl text-white font-playfair flex flex-col items-center">
          <img
            className="w-10"
            src="https://static-task-assets.react-formula-staging.com/capstone_logo_light.png"
          />
          Rica's Plants
        </div>
        <div className="">
          <button className="text-emerald-200 flex items-center">
            <FontAwesomeIcon icon={faUser} className="mr-2 text-xl" />
            {username}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
