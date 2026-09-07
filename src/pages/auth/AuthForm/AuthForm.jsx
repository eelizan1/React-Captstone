import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import Field from './Field';

// values:
// {
//     username: 'enrico'
//     password: 'password'
// }

const AuthForm = ({ fields, submitButtonLabel, onSubmit }) => {
  const [loading, setLoading] = useState(false);
  // initializing values with empty fields prop values - need to iterate over fields to get empty values
  // have useState pass in a function to call the function to avoid re-renders
  const [values, setValues] = useState(() => {
    const initialState = {};
    for (let field of fields) {
      // creating the key value for the obj
      initialState[field.label] = '';
    }

    return initialState;
  });

  return (
    <form
      className="p-4 m-4 bg-white border border-slate-300 rounded-lg font-lato"
      onSubmit={async (e) => {
        e.preventDefault();
        setLoading(true);
        await onSubmit(values);
        setLoading(false);
      }}
    >
      {fields.map((field) => {
        return (
          <Field
            key={field.label}
            label={field.label}
            type={field.type}
            value={values[field.label]} // ex. passing in "enrico" for "username"
            setValues={setValues}
            // have onChange logic here to make Field a "dumb" component
            onChange={(e) => {
              // copy over existing values, then change the specific field
              setValues({ ...values, [field.label]: e.target.value });
            }}
          />
        );
      })}
      <button className="bg-emerald-700 text-white w-full rounded-lg py-2 mt-4 relative">
        {submitButtonLabel}

        {loading && (
          <div className="absolute top-1 right-4 items-center h-full">
            <FontAwesomeIcon
              icon={faSpinner}
              className="text-green-300 text-3xl animate-spin"
            />
          </div>
        )}
      </button>
    </form>
  );
};

export default AuthForm;
