import React, { useState } from 'react';
import { Modal } from 'antd';
import '../../App.css'; // CSS file for custom styling

const Antdesign = () => {
  const [height, setHeight] = useState(400); // Initial height of the modal
  const [initialY, setInitialY] = useState(400); // Initial Y coordinate of mouse when resizing starts

  const handleResize = (e, initialPosition) => {
    const diff = e.clientY - initialPosition;
    console.log('initialPosition:', initialPosition);
    console.log('e.clientY:', e.clientY);
    console.log('diff:', diff);
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
          const initialPosition = e.clientY;
          document.addEventListener('mousemove', (e) => {
            handleResize(e, initialPosition);
          });
          document.addEventListener('mouseup', () => {
            document.removeEventListener(
              'mousemove',
              handleResize,
              initialPosition
            );
          });
        }}
      />
      Modal content
    </Modal>
  );
};

export default Antdesign;
