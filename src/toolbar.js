// toolbar.js

import { DraggableNode } from './draggableNode';

export const PipelineToolbar = () => {

    return (
        <div className='p-[10px] bg-[#430B8A]'>
            <div className="mt-5 flex flex-wrap gap-2.5">
                <DraggableNode type='customInput' label='Input' />
                <DraggableNode type='llm' label='LLM' />
                <DraggableNode type='customOutput' label='Output' />
                <DraggableNode type='text' label='Text' />
                <DraggableNode type='power' label='Power' />
                <DraggableNode type='randomString' label='String Generator' />
                <DraggableNode type='hub' label='Hub' />
                <DraggableNode type='sum' label='Sum' />
            </div>
        </div>
    );
};
