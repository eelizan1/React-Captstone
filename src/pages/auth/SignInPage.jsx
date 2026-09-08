import { useState, useContext } from 'react';
import AuthForm from './AuthForm/AuthForm';
import FormContainer from './FormContainer';
import { Link, useLocation } from 'react-router-dom';
import * as userService from '../../services/user';
import SessionContext from 'context/SessionContext';

const SignInPage = () => {
  const [error, setError] = useState('');
  const location = useLocation();
  const sessionContext = useContext(SessionContext); // access to context for token operations

  const handleSubmit = async (values) => {
    const body = {
      username: values.username,
      password: values.password,
    };
    const response = await userService.createSession(body);
    const data = await response.json();

    if (response.status == 201) {
      setError('');
      sessionContext.signIn(data.capstone_session_token);
    } else {
      setError(data.error);
    }
  };
  return (
    <FormContainer>
      <div className="text-red-700 font-lato">{error}</div>
      {location.state?.accountCreated && (
        <div className="p-4 mb-8 bg-green-200 border rounded-lg border emerald-500 text-emerald-700">
          Account created successfully. Please sign in
        </div>
      )}
      <AuthForm
        fields={[
          {
            label: 'username',
            type: 'text',
          },
          {
            label: 'password',
            type: 'password',
          },
        ]}
        submitButtonLabel="Sign In"
        onSubmit={handleSubmit}
      />
      <Link to="/sign-up" className="text-green-600 underline">
        Create an account
      </Link>
    </FormContainer>
  );
};

export default SignInPage;
