// hubNode.js
import { BaseNode } from './baseNode';

export const HubNode = ({ id, data }) => {
  return (
    <BaseNode
      className="bg-green-500"
      id={id}
      data={data}
      label="HUB"
      description="Connect Nodes"
      handles={[
        { id: `${id}-input1`, type: 'target', position: 'left', style: { top: `${100 / 6}%` } },
        { id: `${id}-input2`, type: 'target', position: 'left', style: { top: `${200 / 6}%` } },
        { id: `${id}-input3`, type: 'target', position: 'left', style: { top: `${300 / 6}%` } },
        { id: `${id}-input4`, type: 'target', position: 'left', style: { top: `${400 / 6}%` } },
        { id: `${id}-input5`, type: 'target', position: 'left', style: { top: `${500 / 6}%` } },
        { id: `${id}-response`, type: 'source', position: 'right' },
      ]}
    />
  );
};