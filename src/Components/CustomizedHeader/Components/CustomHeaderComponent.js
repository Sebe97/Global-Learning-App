import React, { useEffect, useState } from 'react';

function CustomHeaderComponent(props) {
  console.log('props:', props);
  const [sortState, setSortState] = useState();

  const sort = () => {
    alert();
  };

  useEffect(() => {
    const listener = () => {
      alert('sort has Changed');
      //   if (props.column.isSortAscending()) {
      //     setSortState('ASC');
      //   } else if (props.column.isSortDescending()) {
      //     setSortState('DESC');
      //   } else {
      //     setSortState(undefined);
      //   }
    };

    props.column.addEventListener('sortChanged', listener);

    return () => props.column.removeEventListener('sortChanged', listener);
  }, []);
  return (
    <div>
      {props.displayName}
      <button onClick={sort}> sort</button>
    </div>
  );
}

export default CustomHeaderComponent;
