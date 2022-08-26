import React from "react";
import styles from "./App.module.scss";
import Sidebar from "./components/Sidebar/Sidebar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard";
import TableContent from "./components/TableContent/TableContent";

const App = () => {
  return (
    <BrowserRouter>
      <div className={styles.App}>
        <Sidebar />
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/table" element={<TableContent />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
