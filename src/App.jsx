import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignInPage from './pages/auth/SignInPage';
import SignUpPage from './pages/auth/SignUpPage';
import * as userService from 'services/user';
import SessionContext from 'context/SessionContext';

const App = () => {
  // on app load check if there is existing token
  const [sessionToken, setSessionToken] = useState(
    userService.getSessionTokenStorage()
  );
  return (
    // SessionContext will pass in methods the entire app can use
    <SessionContext.Provider
      value={{
        signIn: (capstoneSessionToken) => {
          setSessionToken(capstoneSessionToken);
          userService.setSessionTokenStorage(capstoneSessionToken);
        },
        signOut: () => {
          setSessionToken(null);
          userService.removeSessionTokenStorage();
        },
      }}
    >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignInPage />}></Route>
          <Route path="/sign-up" element={<SignUpPage />}></Route>
        </Routes>
      </BrowserRouter>
    </SessionContext.Provider>
  );
};

export default App;
