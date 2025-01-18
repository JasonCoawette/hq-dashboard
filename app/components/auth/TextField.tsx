import React from 'react';

interface TextFieldProps {
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  buttonLabel?: string;
  onButtonClick?: () => void;
}

const TextField: React.FC<TextFieldProps> = ({
  placeholder,
  value,
  onChange,
  error,
  buttonLabel,
  onButtonClick,
}) => {
  return (
    <div className="w-full h-fit">
      <div className={`flex items-center border ${error ? 'border-red-500' : 'border-stroke'} rounded p-2`}>  
        <input 
          type="text"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className="flex-grow bg-transparent outline-none text-primaryFG"
        />
        {buttonLabel && onButtonClick && (
          <button
            onClick={onButtonClick}
            className="ml-2 bg-primaryFG text-primaryFGInverted px-4 py-1 rounded"
          >
            {buttonLabel}
          </button>
        )}
      </div>
      {error && <p className="text-red-500 mt-1 text-sm">{error}</p>}
    </div>
  );
};

export default TextField; 