import React, {
  useState,
  // useRef,
  useEffect,
  useMemo,
  useCallback,
} from 'react';

import './index.css';

import { AgGridReact } from 'ag-grid-react';
import { Link, Route, Router, Routes } from 'react-router-dom';
import CellRenderer from './Components/CellRenderer/CellRenderer';
import CustomisedHeader from './Components/CustomizedHeader/CustomisedHeader';
import Antdesign from './Components/AntD/Antdesign';

function App() {
  return (
    <div className="App">
      <ul className="App-header">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/cell-renderer">CellRenderer</Link>
        </li>
        <li>
          <Link to="/customised-header">CustomisedHeader</Link>
        </li>
        <li>
          <Link to="/antd">AntDesign</Link>
        </li>
      </ul>
      <Routes>
        <Route exact path="/" component={<CellRenderer />}></Route>
        <Route exact path="/cell-renderer" element={<CellRenderer />}></Route>
        <Route
          exact
          path="/customised-header"
          element={<CustomisedHeader />}
        ></Route>
        <Route exact path="/antd" element={<Antdesign />}></Route>
      </Routes>
    </div>
  );
}

export default App;
