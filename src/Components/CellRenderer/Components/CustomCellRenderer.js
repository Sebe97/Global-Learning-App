import React from 'react';

function CustomCellRenderer(params) {
  const logParamsFunction = (props) => {
    // console.log('params');
    console.log('props:', props);
  };

  return (
    <div>
      customCompoenent
      <button onClick={() => alert(params.value)}>Log Params</button>
    </div>
  );
}

export default CustomCellRenderer;
