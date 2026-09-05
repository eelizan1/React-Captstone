import AuthForm from './AuthForm/AuthForm';

const SignInPage = () => {
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
        ]}
        submitButtonLabel="Sign In"
      />
    </div>
  );
};

export default SignInPage;
