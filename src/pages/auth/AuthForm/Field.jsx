const Field = ({ label, type, value, onChange }) => {
  return (
    <div className="flex flex-col my-4">
      <label htmlFor={label} className="text-slate-500">
        {label}
      </label>
      <input
        id={label}
        type={type}
        value={value} // "enrico" as per example
        onChange={onChange}
        className="px-2 py-1 bg-slate-50 border border-slate-200 rounded-lg
              focus:outline-emerald-600 w-64"
      />
    </div>
  );
};

export default Field;
