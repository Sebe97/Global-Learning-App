import React, { useEffect, useRef, useState } from "react";
import { Modal } from "antd";
import "../../App.css"; // CSS file for custom styling
import Button from "@mui/material/Button";

// The goal is to have a resizable modale on the vertical axis

const Antdesign = () => {
  const [height, setHeight] = useState(400); // Initial height of the modal
  const initialY = useRef(400); // Initial Y coordinate of mouse when resizing starts

  const [open, setOpen] = useState(false);

  const handleResize = (e) => {
    const diff = e.clientY - initialY.current;
    setHeight(height + diff);
  };

  const openModal = () => {
    setOpen(true);
  };

  const handleOnCancel = () => {
    setOpen(false);
  };

  const handleOnOk = () => {
    setOpen(false);
  };

  return (
    <>
      <Button variant="outlined" onClick={openModal} sx={{ margin: "10px" }}>
        Open Modal
      </Button>
      <Modal
        open={open}
        onOk={handleOnOk}
        onCancel={handleOnCancel}
        bodyStyle={{ height: `${height}px` }} // Set the height dynamically
        wrapClassName="resizable-modal"
      >
        <div
          className="resize-handle"
          onMouseDown={(e) => {
            initialY.current = e.clientY;
            document.addEventListener("mousemove", handleResize);
            document.addEventListener("mouseup", () => {
              document.removeEventListener("mousemove", handleResize);
            });
          }}
        />
        Modal content
      </Modal>
    </>
  );
};

export default Antdesign;
