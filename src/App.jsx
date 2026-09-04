import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignInPage from './pages/auth/SignInPage';
import SignUpPage from './pages/auth/SignUpPage';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignInPage />}></Route>
        <Route path="/sign-up" element={<SignUpPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
