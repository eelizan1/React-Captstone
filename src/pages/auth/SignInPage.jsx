import { useState } from 'react';
import AuthForm from './AuthForm/AuthForm';
import FormContainer from './FormContainer';
import { Link } from 'react-router-dom';
import * as userService from '../../services/user';

const SignInPage = () => {
  const [error, setError] = useState('');

  const handleSubmit = async (values) => {
    const body = {
      username: values.username,
      password: values.password,
    };
    const response = await userService.createSession(body);
    const data = await response.json();

    if (response.status == 201) {
      setError('');
    } else {
      setError(data.error);
    }
  };
  return (
    <FormContainer>
      <div className="text-red-700 font-lato">{error}</div>
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
