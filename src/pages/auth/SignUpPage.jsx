import AuthForm from './AuthForm/AuthForm';
import FormContainer from './FormContainer';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import * as userService from '../../services/user';

const SignUpPage = () => {
  const [error, setError] = useState('');
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
          {
            label: 'confirm password',
            type: 'password',
          },
        ]}
        submitButtonLabel="Create Account"
        onSubmit={async (values) => {
          if (values.username.length < 4) {
            setError('username must be at least 4 characters');
            return;
          }
          if (values.password.length < 4) {
            setError('password must be at least 4 characters');
            return;
          }
          if (values.password != values['confirm password']) {
            setError('password and confirm password do not match');
            return;
          }

          const body = {
            username: values.username,
            password: values.password,
          };

          const response = await userService.createUser(body);

          console.log(response.status);
        }}
      />
      <Link to="/" className="text-green-600 underline">
        Sign In
      </Link>
    </FormContainer>
  );
};

export default SignUpPage;
