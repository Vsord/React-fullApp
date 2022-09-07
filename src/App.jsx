import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import styles from "./App.module.scss";
import Dashboard from "./components/Dashboard/Dashboard";
import LogIn from "./components/LogIn/LogIn";
import NotFound from "./components/NotFound/NotFound";
import Sidebar from "./components/Sidebar/Sidebar";
import SignUp from "./components/SignUp/SignUp";
import TableContent from "./components/TableContent/TableContent";
import PrivateRoute from "./utils/PrivateRoute";

const App = () => {
  return (
    <BrowserRouter>
      <div className={styles.App}>
        <Routes>
          <Route path="/login" element={<LogIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route element={<PrivateRoute />}>
            <Route path="/" element={<Sidebar />}>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/table" element={<TableContent />} />
            </Route>
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
