// llmNode.js
import { BaseNode } from './baseNode';

export const LLMNode = ({ id, data }) => {
  return (
    <BaseNode
      className="bg-zinc-200"
      id={id}
      data={data}
      label="LLM"
      description="This is a LLM."
      handles={[
        { id: `${id}-system`, type: 'target', position: 'left', style: { top: `${100 / 3}%` } },
        { id: `${id}-prompt`, type: 'target', position: 'left', style: { top: `${200 / 3}%` } },
        { id: `${id}-response`, type: 'source', position: 'right' },
      ]}
    />
  );
};