import { AgGridReact } from 'ag-grid-react';
import React, { useMemo } from 'react';

import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import CustomHeaderComponent from './Components/CustomHeaderComponent.js';

export function CustomisedHeader() {
  const rowData = useMemo(
    () => [
      { nume: 'Ionescu', prenume: 'Ionica', varsta: '26', studii: 'licenta' },
      { nume: 'Cristache', prenume: 'Ion', varsta: '27', studii: 'master' },
      { nume: 'Dumitrascheu', prenume: 'Ioan', varsta: '28', studii: 'liceu' },
      { nume: 'Marian', prenume: 'Ionel', varsta: '29', studii: 'generala' },
    ],
    []
  );
  const containerStyle = useMemo(() => ({ width: 'auto', height: 'auto' }), []);
  const gridStyle = useMemo(() => ({ height: '100vh', width: 'auto' }), []);

  const columnDefs = useMemo(() => [
    {
      field: 'Full Name',
      children: [{ field: 'nume' }, { field: 'prenume' }],
    },
    {
      field: 'Details',
      children: [
        { field: 'varsta', headerComponent: CustomHeaderComponent },
        { field: 'studii' },
      ],
    },
  ]);

  return (
    <div style={containerStyle}>
      <div style={gridStyle} className="ag-theme-alpine">
        <AgGridReact rowData={rowData} columnDefs={columnDefs}></AgGridReact>
      </div>
    </div>
  );
}

export default CustomisedHeader;
