import AuthForm from './AuthForm/AuthForm';

const SignUpPage = () => {
  return (
    <div className="flex justify-center items-center">
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
    </div>
  );
};

export default SignUpPage;
