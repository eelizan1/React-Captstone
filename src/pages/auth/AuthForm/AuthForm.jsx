import { useState } from 'react';

const AuthForm = ({ fields, submitButtonLabel }) => {
  const [fieldValues, setFieldValues] = useState({});
  return (
    <form className="p-4 m-4 bg-white border border-slate-300 rounded-lg font-lato">
      {fields.map((field) => {
        return (
          <div key={field.label} className="flex flex-col my-4">
            <label htmlFor={field.label} className="text-slate-500">
              {field.label}
            </label>
            <input
              id={field.label}
              type={field.type}
              className="px-2 py-1 bg-slate-50 border border-slate-200 rounded-lg
              focus:outline-emerald-600 w-64"
            />
          </div>
        );
      })}
      <button className="bg-emerald-700 text-white w-full rounded-lg py-2 mt-4">
        {submitButtonLabel}
      </button>
    </form>
  );
};

export default AuthForm;
