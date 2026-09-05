import { useState } from 'react';
import Field from './Field';

// values:
// {
//     username: 'enrico'
//     password: 'password'
// }

const AuthForm = ({ fields, submitButtonLabel }) => {
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

  console.log(values);

  return (
    <form className="p-4 m-4 bg-white border border-slate-300 rounded-lg font-lato">
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
      <button className="bg-emerald-700 text-white w-full rounded-lg py-2 mt-4">
        {submitButtonLabel}
      </button>
    </form>
  );
};

export default AuthForm;
