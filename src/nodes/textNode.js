// textNode.js
import React, { useState, useEffect, useRef } from 'react';
import { BaseNode } from './baseNode'; // Assuming you're using BaseNode as your base component

export const TextNode = ({ id, data }) => {
  const [text, setText] = useState(data.text || '');
  const [handles, setHandles] = useState([]);
  const nodeRef = useRef(null);

  // Update size of the text node dynamically
  useEffect(() => {
    if (nodeRef.current) {
      const lines = text.split('\n');
      const newHeight = Math.min(lines.length * 20 + 40, 300); // Adjust height, limiting max height
      const newWidth = Math.min(Math.max(...lines.map(line => line.length)) * 10 + 40, 500); // Adjust width, limiting max width
      nodeRef.current.style.height = `${newHeight}px`;
      nodeRef.current.style.width = `${newWidth}px`;
    }
  }, [text]);

  // Update handles based on variables in text
  useEffect(() => {
    const variableRegex = /\{\{\s*(\w+)\s*\}\}/g;
    const newHandles = [];
    let match;
    while ((match = variableRegex.exec(text)) !== null) {
      newHandles.push({
        id: `${id}-${match[1]}`,
        type: 'target',
        position: 'left',
      });
    }
    setHandles(newHandles);
  }, [text, id]);

  return (
    <BaseNode
      id={id}
      data={data}
      label="Text"
      description="Enter text below:"
      inputFields={[
        {
          name: 'textInput',
          label: 'Text Input',
          type: 'textarea',
          value: text,
          onChange: (e) => setText(e.target.value),
        },
      ]}
      handles={handles}
      ref={nodeRef}
    />
  );
};
