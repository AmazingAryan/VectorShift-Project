// inputNode.js
import { BaseNode } from './baseNode';

export const InputNode = ({ id, data }) => {
  return (
    <BaseNode
      className="bg-indigo-800"
      id={id}
      data={data}
      label="Input"
      inputFields={[
        { name: 'inputName', label: 'Name', type: 'text', defaultValue: id.replace('customInput-', 'input_') },
        { name: 'inputType', label: 'Type', type: 'select', options: ['Text', 'File'], defaultValue: 'Text' },
      ]}
      handles={[
        { id: `${id}-value`, type: 'source', position: 'right' },
      ]}
    />
  );
};

