// sumNode.js
import { useState } from 'react';
import { BaseNode } from './baseNode';

// Function to generate a random string of specified length
const add = (data) => {
  //add logic

  return 0;
};

export const SumNode = ({ id, data }) => {
  const [output, setOutput] = useState('');

  const handleButtonClick = () => {
    const sum = add(data);
    setOutput(sum);
  };

  return (
    <BaseNode
      className="bg-zinc-200"
      id={id}
      data={data}
      label="Sum"
      description="Add 2 nodes"
      inputFields={[
        { name: 'outputName', label: 'Sum', type: 'number', defaultValue: output,  },
      ]}
      handles={[
            { id: `${id}-input1`, type: 'target', position: 'left', style: { top: `${100 / 3}%` } },
            { id: `${id}-input2`, type: 'target', position: 'left', style: { top: `${200 / 3}%` } },
            { id: `${id}-response`, type: 'source', position: 'right' },
      ]}
    />
  );
};