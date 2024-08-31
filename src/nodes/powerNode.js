// powerNode.js
import { BaseNode } from './baseNode';

export const PowerNode = ({ id, data }) => {
  return (
    <BaseNode
      className="bg-zinc-200"
      id={id}
      data={data}
      label="Power of 10"
      description="Raise the number to its power of 10"
      handles={[
        { id: `${id}-system`, type: 'target', position: 'left' },
        { id: `${id}-response`, type: 'source', position: 'right' },
      ]}
    />
  );
};