import React from 'react';

interface OTCFieldProps {
  values: string[];
  onChange: (index: number, value: string) => void;
  error?: string;
}

const OTCField: React.FC<OTCFieldProps> = ({ values, onChange, error }) => {
  return (
    <div className="mb-4">
      <div className={`grid grid-cols-4 gap-2 md:flex md:items-center ${error ? 'border-red-500' : 'border-gray-300'}`}>  
        {values.map((value, index) => (
          <input
            key={index}
            type="text"
            value={value}
            onChange={(e) => onChange(index, e.target.value)}
            className="w-12 h-12 text-center bg-transparent outline-none text-white border rounded"
          />
        ))}
        <div className="hidden md:block w-8 h-0.5 bg-gray-300 mx-2"></div>
      </div>
      {error && <p className="text-red-500 mt-1 text-sm">{error}</p>}
    </div>
  );
};

export default OTCField; 