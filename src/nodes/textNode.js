import React, { useState, useEffect, useRef } from 'react';
import { BaseNode } from './baseNode';

export const TextNode = ({ id, data }) => {
  const [text, setText] = useState(data.text || '');
  const [handles, setHandles] = useState([]);
  const nodeRef = useRef(null);
  const textAreaRef = useRef(null);

  const adjustTextAreaAndNodeHeight = () => {
    if (textAreaRef.current && nodeRef.current) {
      // Reset the textarea height to auto to measure its scrollHeight
      textAreaRef.current.style.height = 'auto';
  
      const nodePadding = 20; 
      const minNodeHeight = 200; 
      const maxNodeHeight = 600; 
      const maxTextAreaHeight = minNodeHeight;
      
      
      // Calculate the new height for the textarea, not exceeding maxTextAreaHeight
      const newTextAreaHeight = Math.min(textAreaRef.current.scrollHeight, maxTextAreaHeight);
      textAreaRef.current.style.height = `${newTextAreaHeight}px`;
  
      // Calculate the required node height based on the textarea height
      const newNodeHeight = Math.min(
        Math.max(newTextAreaHeight + nodePadding + 120, minNodeHeight),
        maxNodeHeight
      );
  
      // Set the node height
      nodeRef.current.style.height = `${newNodeHeight}px`;
    }
  };
  
  useEffect(() => {
    adjustTextAreaAndNodeHeight();
  }, [text]);
  

  useEffect(() => {
    const variableRegex = /\{\{\s*(\w+)\s*\}\}/g;
    const newHandles = [];
    let match;
    let i = 0;
    while ((match = variableRegex.exec(text)) !== null) {
      newHandles.push({
        id: `${id}-${match[1]}`,
        type: 'target',
        position: 'left',
        style: { top: `${(i++) * 100 / (newHandles.length + 1)}%` }
      });
    }
    setHandles(newHandles);
  }, [text, id]);

  const getHandleStyle = (index, totalHandles) => {
    const top = (100 * (index + 1)) / (totalHandles + 1); // Calculate percentage top
    return { top: `${top}%` };
  };

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
          onChange: setText,
          ref: textAreaRef,
          style: { overflow: 'hidden' }
        },
      ]}
      handles={handles.map((handle, index) => ({
        ...handle,
        style: getHandleStyle(index, handles.length)
      }))}
      ref={nodeRef}
    />
  );
};
