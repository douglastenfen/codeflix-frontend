export type InputFieldProps = {
  id: string;
  name: string;
  label: string;
  type: string;
  placeholder: string;
};

export const InputField: React.FC<InputFieldProps> = ({
  id,
  name,
  label,
  type,
  placeholder,
}) => {
  return (
    <div className='flex flex-col space-y-1'>
      <label htmlFor={label} className='text-sm font-semibold text-gray-500'>
        {label}
      </label>
      <input
        type={type}
        name={name}
        id={id}
        placeholder={placeholder}
        className='rounded-lg border-gray-600 bg-gray-700 px-4 py-2 focus:border-transparent focus:ring-2 focus:ring-red-500 focus:outline-none'
      />
    </div>
  );
};
