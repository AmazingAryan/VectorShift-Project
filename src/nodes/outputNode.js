// outputNode.js
import { BaseNode } from './baseNode';


export const OutputNode = ({ id, data }) => {
  return (
    <BaseNode
    className="bg-lime-200"
      id={id}
      data={data}
      label="Output"
      inputFields={[
        { name: 'outputName', label: 'Name', type: 'text', defaultValue: id.replace('customOutput-', 'output_') },
        { name: 'outputType', label: 'Type', type: 'select', options: ['Text', 'Image'], defaultValue: 'Text' },
      ]}
      handles={[
        { id: `${id}-value`, type: 'target', position: 'left' },
      ]}
    />
  );
};