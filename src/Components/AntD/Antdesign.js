import React, { useRef, useState } from 'react';
import { Modal } from 'antd';
import '../../App.css'; // CSS file for custom styling

const Antdesign = () => {
  const [height, setHeight] = useState(400); // Initial height of the modal
  const initialY = useRef(400); // Initial Y coordinate of mouse when resizing starts

  const handleResize = (e) => {
    const diff = e.clientY - initialY.current;
    setHeight(height + diff);
  };

  return (
    <Modal
      open={true}
      bodyStyle={{ height: `${height}px` }} // Set the height dynamically
      wrapClassName="resizable-modal"
    >
      <div
        className="resize-handle"
        onMouseDown={(e) => {
          initialY.current = e.clientY;
          document.addEventListener('mousemove', handleResize);
          document.addEventListener('mouseup', () => {
            document.removeEventListener('mousemove', handleResize);
          });
        }}
      />
      Modal content
    </Modal>
  );
};

export default Antdesign;
