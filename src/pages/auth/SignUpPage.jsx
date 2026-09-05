import AuthForm from './AuthForm/AuthForm';
import FormContainer from './FormContainer';
import { Link } from 'react-router-dom';

const SignUpPage = () => {
  return (
    <FormContainer>
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
            label: 'confirm-password',
            type: 'password',
          },
        ]}
        submitButtonLabel="Create Account"
      />
      <Link to="/" className="text-green-600 underline">
        Sign In
      </Link>
    </FormContainer>
  );
};

export default SignUpPage;
