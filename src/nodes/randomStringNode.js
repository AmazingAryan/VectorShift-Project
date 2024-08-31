// randomStringNode.js
import { useState } from 'react';
import { BaseNode } from './baseNode';

// Function to generate a random string of specified length
const generateRandomString = (length = 7) => {
  const charset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  const charsetLength = charset.length;

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charsetLength);
    result += charset[randomIndex];
  }

  return result;
};

export const RandomStringNode = ({ id, data }) => {
  const [output, setOutput] = useState('');

  const handleButtonClick = () => {
    const randomString = generateRandomString();
    setOutput(randomString);
  };

  return (
    <BaseNode
      className="bg-zinc-200"
      id={id}
      data={data}
      label="String generator"
      description="Generate a Randome string"
      inputFields={[
        { name: 'outputName', label: 'Hash', type: 'text', defaultValue: output,  },
        { name: 'outputButton', label: 'Generate', type: 'button', onclick: handleButtonClick},
      ]}
      handles={[
        { id: `${id}-response`, type: 'source', position: 'right' },
      ]}
    />
  );
};