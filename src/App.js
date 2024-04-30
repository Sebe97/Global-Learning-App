// App.js
import React from "react";
import { Route, Routes } from "react-router-dom";
import CellRenderer from "./Components/CellRenderer/CellRenderer.js";
import CustomisedHeader from "./Components/CustomizedHeader/CustomisedHeader.js";
import Antdesign from "./Components/AntD/Antdesign.js";
import Flex3Columns from "./Components/Flex3Columns/Flex3Columns.js";
import Home from "./Components/Home/Home.jsx";
import MUIGrid from "./Components/MUI/MUIGrid.jsx";
import Navbar from "./Components/NavBar/NavBar.jsx";
// import { createTheme, ThemeProvider } from "@mui/material/styles";
import Login from "./Components/Login/Login.tsx";
import Counter from "./Components/Hooks/Hooks.js";

// const theme = createTheme({
//   palette: {
//     primary: {
//       main: "#556cd6",
//     },
//     secondary: {
//       main: "#19857b",
//     },
//     error: {
//       main: "#ff0000",
//     },
//     background: {
//       default: "#fff",
//     },
//   },
// });
export default function App() {
  return (
    <>
      {/* <ThemeProvider theme={theme}> 
      ThemeProvider nu mai e de actualitate*/}
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cell-renderer" element={<CellRenderer />} />
        <Route path="/customised-header" element={<CustomisedHeader />} />
        <Route path="/antd" element={<Antdesign />} />
        <Route path="/flex-3-columns" element={<Flex3Columns />} />
        <Route path="/hooks" element={<Counter />} />

        <Route path="/MUI-Grid" element={<MUIGrid />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      {/* </ThemeProvider> */}
    </>
  );
}
