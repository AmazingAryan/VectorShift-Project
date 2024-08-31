// fileReaderNode.js
import { BaseNode } from './baseNode';

export const FileReaderNode = ({ id, data }) => {
  return (
    <BaseNode
      className="bg-indigo-800"
      id={id}
      data={data}
      label="File Reader"
      
      handles={[
        { id: `${id}-input`, type: 'target', position: 'left' },
        { id: `${id}-output`, type: 'source', position: 'right' },
      ]}
    >
        <p>File</p>
    </BaseNode>
  );
};
