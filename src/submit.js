import React from 'react';

export const SubmitButton = ({ nodes, edges }) => {
  const handleSubmit = async () => {
    try {
      console.log('Submitting data to backend...'); // for debug

      const response = await fetch('http://127.0.0.1:8000/pipelines/parse', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          nodes: nodes.map(node => ({ id: node.id, type: node.type })),
          edges: edges.map(edge => ({ source: edge.source, target: edge.target })),
        }),
      });

      console.log('Response received:', response); // for debug

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const result = await response.json();

      console.log('Result from backend:', result); // for edbug

      alert(`Number of Nodes: ${result.num_nodes}, Number of Edges: ${result.num_edges}, Is DAG: ${result.is_dag}`);
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
    }
  };

  return (
    <div className="flex items-center justify-center">
      <button
        type="button"
        onClick={handleSubmit}
        className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-md shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition"
      >
        Submit
      </button>
    </div>
  );
};
