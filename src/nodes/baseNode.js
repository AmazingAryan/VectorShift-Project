// BaseNode.js
import { useState } from 'react';
import { Handle } from 'reactflow';
import cn from 'classnames';

export const BaseNode = ({ id, data, label, description, inputFields = [], handles = [], className }) => {
  const [fields, setFields] = useState(
    inputFields.reduce((acc, field) => {
      acc[field.name] = data?.[field.name] || field.defaultValue;
      return acc;
    }, {})
  );

  const handleChange = (name, value) => {
    setFields({ ...fields, [name]: value });
  };

  return (
    <div className={cn("w-[400px] h-[250px] border border-gray-300 rounded-lg shadow-sm bg-[#1B0A42] bg-opacity-30 backdrop-blur-md text-white ")}>
      <div className="font-bold h-10 bg-[#430B8A] rounded-t-lg flex flex-row justify-center items-center mb-1">{label}</div>
      { description && (
         <div className="text-sm text-gray-100 flex flex-row justify-center items-center m-2">{description}</div>
      )}
     
      <div className="space-y-2 p-4">
        {inputFields.map((field) => (
          <label key={field.name} className="block">
            <span className="block text-gray-200 mb-1">{field.label}:</span>
            {field.type === 'select' ? (
              <select
                value={fields[field.name]}
                onChange={(e) => handleChange(field.name, e.target.value)}
                className="w-full p-2 bg-[#430B8A] border-none rounded-md focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
              >
                {field.options.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            ) : field.type==='button' ? (
              <button
              type="button"
              className="w-full p-2 border border-none rounded-md bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {field.label}
            </button>
            ) : (
              <input
                type={field.type}
                value={fields[field.name]}
                onChange={(e) => handleChange(field.name, e.target.value)}
                className="w-full p-2 bg-[#430B8A] border-none  rounded-md focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
              />
            )}
          </label>
        ))}
      </div>
      {handles.map((handle) => (
        <Handle
          key={handle.id}
          type={handle.type}
          position={handle.position}
          id={handle.id}
          style={handle.style}
        />
      ))}
    </div>
  );
};
