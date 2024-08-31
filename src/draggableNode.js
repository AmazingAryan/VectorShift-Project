// draggableNode.js

export const DraggableNode = ({ type, label }) => {
    const onDragStart = (event, nodeType) => {
      const appData = { nodeType }
      event.target.style.cursor = 'grabbing';
      event.dataTransfer.setData('application/reactflow', JSON.stringify(appData));
      event.dataTransfer.effectAllowed = 'move';
    };
  
    return (
      <div
      className={`
        ${type} 
        cursor-grab
        min-w-[80px]
        p-2
        h-[60px] 
        flex 
        items-center 
        justify-center 
        rounded-lg 
        bg-[#1C2536] 
        text-white 
        flex-col
        draggable
      `}
        onDragStart={(event) => onDragStart(event, type)}
        onDragEnd={(event) => (event.target.style.cursor = 'grab')}
        draggable
      >
          <span style={{ color: '#fff' }}>{label}</span>
      </div>
    );
  };
  