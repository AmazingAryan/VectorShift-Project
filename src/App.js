import { PipelineToolbar } from './toolbar';
import { PipelineUI } from './ui';
import { SubmitButton } from './submit';
import { useStore } from './store';
import { shallow } from 'zustand/shallow';

function App() {
  const { nodes, edges } = useStore(state => ({
    nodes: state.nodes,
    edges: state.edges,
  }), shallow);

  return (
    <div className='bg-gradient-to-br from-[#1B0A42] to-black h-full pb-10'>
      <PipelineToolbar />
      <PipelineUI />
      <SubmitButton nodes={nodes} edges={edges} />
    </div>
  );
}

export default App;
