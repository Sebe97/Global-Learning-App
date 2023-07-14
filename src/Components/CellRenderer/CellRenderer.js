import React, { useCallback, useMemo, useRef, useState } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import CustomCellRenderer from './Components/CustomCellRenderer';

const CellRenderer = () => {
  const containerStyle = useMemo(() => ({ width: 'auto', height: 'auto' }), []);
  const gridStyle = useMemo(() => ({ height: '100vh', width: 'auto' }), []);
  const [rowData, setRowData] = useState([
    { id: 'c1', make: 'Toyota', model: 'Celica', price: 35000 },
    { id: 'c2', make: 'Ford', model: 'Mondeo', price: 32000 },
    { id: 'c8', make: 'Porsche', model: 'Boxster', price: 72000 },
    { id: 'c4', make: 'BMW', model: 'M50', price: 60000 },
    { id: 'c14', make: 'Aston Martin', model: 'DBX', price: 190000 },
  ]);
  const [columnDefs, setColumnDefs] = useState([
    { headerName: 'Row ID', valueGetter: 'node.id' },
    {
      field: 'make',
      width: '300px',
      cellRenderer: (params) => {
        return (
          <div>
            {params.value} In line component
            <button onClick={() => alert(params.value)}>click</button>
          </div>
        );
      },
    },
    { field: 'model', cellRenderer: CustomCellRenderer, width: '300px' },
    { field: 'price' },
  ]);
  const getRowId = useMemo(() => {
    return (params) => params.data.id;
  }, []);

  return (
    <div style={containerStyle}>
      <div style={gridStyle} className="ag-theme-alpine">
        <AgGridReact
          rowData={rowData}
          columnDefs={columnDefs}
          getRowId={getRowId}
        ></AgGridReact>
      </div>
    </div>
  );
};

export default CellRenderer;
