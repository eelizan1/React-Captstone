import SessionContext from 'context/SessionContext';
import { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUser,
  faArrowRightFromBracket,
} from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

const NavBar = () => {
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const { username, signOut } = useContext(SessionContext);
  return (
    <nav
      className="bg-emerald-800 flex justify-center font-lato"
      onMouseLeave={() => setUserMenuOpen(false)}
    >
      <div className="flex items-center justify-between w-full max-w-5xl px-8 py-2">
        <div className="text-2xl text-white font-playfair flex flex-col items-center">
          <img
            className="w-10"
            src="https://static-task-assets.react-formula-staging.com/capstone_logo_light.png"
          />
          Rica's Plants
        </div>
        <div className="flex flex-1 justify-end">
          <div className="relative min-w-32">
            <button
              className="text-emerald-200 flex items-center"
              onClick={() => {
                setUserMenuOpen(true);
              }}
            >
              <FontAwesomeIcon icon={faUser} className="mr-2 text-xl" />
              {username}
            </button>
            {userMenuOpen && (
              <div className="absolute left-0 mt-20 bg-white bottom-[-46px] rounded-md shadow-md">
                <button
                  className="text-slate-500 hover:text-emerald-700 px-4 py-2"
                  onClick={signOut} // call global signout from context to delete session token
                >
                  <FontAwesomeIcon
                    icon={faArrowRightFromBracket}
                    className="mr-2"
                  />
                  sign out
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
